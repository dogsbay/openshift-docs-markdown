{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the SR-IOV network node policy {id="configure-sriov-node-policy_{{ context }}"}

You can create an SR-IOV network device configuration for a node by creating an SR-IOV network node policy.
To enable hardware offloading, you must define the `.spec.eSwitchMode` field with the value `"switchdev"`. {._abstract}

The following procedure creates an SR-IOV interface for a network interface controller with hardware offloading.

**Prerequisites**

*   You installed the OpenShift CLI (`oc`).
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Create a file, such as `sriov-node-policy.yaml`, with content such as the following example:
    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetworkNodePolicy
    metadata:
      name: <name>
      namespace: openshift-sriov-network-operator
    spec:
      deviceType: netdevice
      eSwitchMode: "switchdev"
      nicSelector:
        deviceID: "1019"
        rootDevices:
        - 0000:d8:00.0
        vendor: "15b3"
        pfNames:
        - ens8f0
      nodeSelector:
        feature.node.kubernetes.io/network-sriov.capable: "true"
      numVfs: 6
      priority: 5
      resourceName: mlxnics
    ```
    *   `<name>` specifies the name for the custom resource object.
    *   The `deviceType` field must be set to `netdevice`. Hardware offloading is not supported with `vfio-pci`.
    *   The `eSwitchMode` field must be set to `"switchdev"`.
1.  Apply the configuration for the policy:
    ```terminal
    $ oc create -f sriov-node-policy.yaml
    ```

    :::note

    When you apply the configuration specified in a `SriovNetworkPoolConfig` object, the SR-IOV Operator drains and restarts the nodes in the machine config pool.

    It might take several minutes for a configuration change to apply.
    
    :::