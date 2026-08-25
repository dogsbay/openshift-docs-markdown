# Provisioning and deploying a distributed unit (DU) manually {id="cnf-provisioning-deploying-a-distributed-unit-manually_{{ context }}"}

Radio access network (RAN) is composed of central units (CU), distributed units (DU), and radio units (RU).
RAN from the telecommunications standard perspective is shown below:

![High level RAN overview](/_assets/images/135_OpenShift_Distributed_Unit_0121.svg)

From the three components composing RAN, the CU and DU can be virtualized and implemented as cloud-native functions.

The CU and DU split architecture is driven by real-time computing and networking requirements. A DU can be seen as a real-time part of a
telecommunication baseband unit.
One distributed unit may aggregate several cells. A CU can be seen as a non-realtime part of a baseband unit, aggregating
traffic from one or more distributed units.

A cell in the context of a DU can be seen as a real-time application performing intensive digital signal processing, data transfer,
and algorithmic tasks.
Cells often use hardware acceleration (FPGA, GPU, eASIC) for DSP processing offload, but there are also software-only implementations
(FlexRAN), based on AVX-512 instructions.

Running cell application on COTS hardware requires the following features to be enabled:

*   Real-time kernel
*   CPU isolation
*   NUMA awareness
*   Huge pages memory management
*   Precision timing synchronization using PTP
*   AVX-512 instruction set (for Flexran and / or FPGA implementation)
*   Additional features depending on the RAN Operator requirements

Accessing hardware acceleration devices and high throughput network interface controllers by virtualized software applications
requires use of SR-IOV and Passthrough PCI device virtualization.

In addition to the compute and acceleration requirements, DUs operate on multiple internal and external networks.

## The manifest structure {id="cnf-manifest-structure_{{ context }}"}

The profile is built from one cluster specific folder and one or more site-specific folders.
This is done to address a deployment that includes remote worker nodes, with several sites belonging to the same cluster.

The [`cluster-config`](ran-profile/cluster-config) directory contains performance and PTP customizations based upon
Operator deployments in [`deploy`](../feature-configs/deploy) folder.

The [`site.1.fqdn`](site.1.fqdn) folder contains site-specific network customizations.

## Prerequisites {id="cnf-du-prerequisites_{{ context }}"}

Before installing the Operators and deploying the DU, perform the following steps.

1.  Create a machine config pool for the RAN worker nodes. For example:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfigPool
    metadata:
      name: worker-cnf
      labels:
        machineconfiguration.openshift.io/role: worker-cnf
    spec:
      machineConfigSelector:
        matchExpressions:
          - {
              key: machineconfiguration.openshift.io/role,
              operator: In,
              values: [worker-cnf, worker],
            }
      paused: false
      nodeSelector:
        matchLabels:
          node-role.kubernetes.io/worker-cnf: ""

    EOF
    ```
1.  Include the worker node in the above machine config pool by labeling it with the `node-role.kubernetes.io/worker-cnf` label:
    ```terminal
    $ oc label --overwrite node/<your node name> node-role.kubernetes.io/worker-cnf=""
    ```
1.  Label the node as PTP slave (DU only):
    ```terminal
    $ oc label --overwrite node/<your node name> ptp/slave=""
    ```

## SR-IOV configuration notes {id="cnf-du-configuration-notes_{{ context }}"}

The `SriovNetworkNodePolicy` object must be configured differently for different NIC models and placements.

|     |     |     |
| --- | --- | --- |
| **Manufacturer** | **deviceType** | **isRdma** |
| Intel | vfio-pci or netdevice | false |
| Mellanox | netdevice | structure |

In addition, when configuring the `nicSelector`, the `pfNames` value must match the intended interface name on the specific host.

If there is a mixed cluster where some of the nodes are deployed with Intel NICs and some with Mellanox, several SR-IOV configurations can be
created with the same `resourceName`. The device plugin will discover only the available ones and will put the capacity on the node accordingly.