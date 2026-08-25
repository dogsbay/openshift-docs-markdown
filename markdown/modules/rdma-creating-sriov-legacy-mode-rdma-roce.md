{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a SR-IOV legacy mode RDMA on RoCE {id="rdma-creating-sriov-legacy-mode-rdma-roce_{{ context }}"}

Configure a Single Root I/O Virtualization (SR-IOV) legacy mode host device RDMA on RoCE.

**Procedure**

1.  Generate a new host device `NicClusterPolicy` custom resource (CR):
    ```yaml
    $ cat <<EOF > network-sriovleg-nic-cluster-policy.yaml
    apiVersion: mellanox.com/v1alpha1
    kind: NicClusterPolicy
    metadata:
      name: nic-cluster-policy
    spec:
      ofedDriver:
        image: doca-driver
        repository: nvcr.io/nvidia/mellanox
        version: 24.10-0.7.0.0-0
        startupProbe:
          initialDelaySeconds: 10
          periodSeconds: 20
        livenessProbe:
          initialDelaySeconds: 30
          periodSeconds: 30
        readinessProbe:
          initialDelaySeconds: 10
          periodSeconds: 30
        env:
        - name: UNLOAD_STORAGE_MODULES
          value: "true"
        - name: RESTORE_DRIVER_ON_POD_TERMINATION
          value: "true"
        - name: CREATE_IFNAMES_UDEV
          value: "true"
    EOF
    ```
1.  Create the policy on the cluster by using the following command:
    ```terminal
    $ oc create -f network-sriovleg-nic-cluster-policy.yaml
    ```
    ```terminal title="Example output"
    nicclusterpolicy.mellanox.com/nic-cluster-policy created
    ```
1.  Verify the pods by using the following command in the DOCA/MOFED container:
    ```terminal
    $ oc get pods -n nvidia-network-operator
    ```
    ```terminal title="Example output"
    NAME                                                          READY   STATUS    RESTARTS      AGE
    mofed-rhcos4.16-696886fcb4-ds-4mb42                           2/2     Running   0             40s
    mofed-rhcos4.16-696886fcb4-ds-8knwq                           2/2     Running   0             40s
    nvidia-network-operator-controller-manager-68d547dbbd-qsdkf   1/1     Running   13 (4d ago)   4d21h
    ```
1.  Create an `SriovNetworkNodePolicy` CR that generates the Virtual Functions (VFs) for the device you want to operate in SR-IOV legacy mode. See the following example:
    ```yaml
    $ cat <<EOF > sriov-network-node-policy.yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetworkNodePolicy
    metadata:
      name: sriov-legacy-policy
      namespace:  openshift-sriov-network-operator
    spec:
      deviceType: netdevice
      mtu: 1500
      nicSelector:
        vendor: "15b3"
        pfNames: ["ens8f0np0#0-7"]
      nodeSelector:
        feature.node.kubernetes.io/pci-15b3.present: "true"
      numVfs: 8
      priority: 90
      isRdma: true
      resourceName: sriovlegacy
    EOF
    ```
1.  Create the CR on the cluster by using the following command:

    :::note

    Ensure that SR-IOV Global Enable is enabled. For more information, see [Unable to enable SR-IOV and receiving the message "not enough MMIO resources for SR-IOV" in Red&#160;Hat Enterprise Linux](https://access.redhat.com/solutions/37376). 
    
    :::

    ```terminal
    $ oc create -f sriov-network-node-policy.yaml
    ```
    ```terminal title="Example output"
    sriovnetworknodepolicy.sriovnetwork.openshift.io/sriov-legacy-policy created
    ```
1.  Each node has scheduling disabled. The nodes reboot to apply the configuration. You can view the nodes by using the following command:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                       STATUS                        ROLES                         AGE     VERSION
    edge-19.edge.lab.eng.rdu2.redhat.com       Ready                         control-plane,master,worker   5d      v1.29.8+632b078
    nvd-srv-32.nvidia.eng.rdu2.dc.redhat.com   Ready                         worker                        4d22h   v1.29.8+632b078
    nvd-srv-33.nvidia.eng.rdu2.dc.redhat.com   NotReady,SchedulingDisabled   worker                        4d22h   v1.29.8+632b078
    ```
1.  After the nodes have rebooted, verify that the VF interfaces exist by opening up a debug pod on each node. Run the following command:
    ```terminal
    a$ oc debug node/nvd-srv-33.nvidia.eng.rdu2.dc.redhat.com
    ```
    ```terminal title="Example output"
    Starting pod/nvd-srv-33nvidiaengrdu2dcredhatcom-debug-cqfjz ...
    To use host binaries, run `chroot /host`
    Pod IP: 10.6.135.12
    If you don't see a command prompt, try pressing enter.
    sh-5.1# chroot /host
    sh-5.1# ip link show | grep ens8
    26: ens8f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    42: ens8f0v0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    43: ens8f0v1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    44: ens8f0v2: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    45: ens8f0v3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    46: ens8f0v4: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    47: ens8f0v5: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    48: ens8f0v6: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    49: ens8f0v7: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    ```
1.  Repeat the previous steps on the second node, if necessary.
1.  Optional: Confirm that the resources appear in the cluster `oc describe node` section by using the following command:
    ```terminal
    $ oc describe node -l node-role.kubernetes.io/worker=| grep -E 'Capacity:|Allocatable:' -A8
    ```
    ```terminal title="Example output"
    Capacity:
      cpu:                       128
      ephemeral-storage:         1561525616Ki
      hugepages-1Gi:             0
      hugepages-2Mi:             0
      memory:                    263596692Ki
      nvidia.com/gpu:            2
      nvidia.com/hostdev:        0
      openshift.io/sriovlegacy:  8
    --
    Allocatable:
      cpu:                       127500m
      ephemeral-storage:         1438028263499
      hugepages-1Gi:             0
      hugepages-2Mi:             0
      memory:                    262445716Ki
      nvidia.com/gpu:            2
      nvidia.com/hostdev:        0
      openshift.io/sriovlegacy:  8
    --
    Capacity:
      cpu:                       128
      ephemeral-storage:         1561525616Ki
      hugepages-1Gi:             0
      hugepages-2Mi:             0
      memory:                    263596688Ki
      nvidia.com/gpu:            2
      nvidia.com/hostdev:        0
      openshift.io/sriovlegacy:  8
    --
    Allocatable:
      cpu:                       127500m
      ephemeral-storage:         1438028263499
      hugepages-1Gi:             0
      hugepages-2Mi:             0
      memory:                    262445712Ki
      nvidia.com/gpu:            2
      nvidia.com/hostdev:        0
      openshift.io/sriovlegacy:  8
    ```
1.  After the VFs for SR-IOV legacy mode are in place, generate the `SriovNetwork` CR file. See the following example:
    ```yaml
    $ cat <<EOF > sriov-network.yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetwork
    metadata:
      name: sriov-network
      namespace:  openshift-sriov-network-operator
    spec:
      vlan: 0
      networkNamespace: "default"
      resourceName: "sriovlegacy"
      ipam: |
        {
          "type": "whereabouts",
          "range": "192.168.3.225/28",
          "exclude": [
           "192.168.3.229/30",
           "192.168.3.236/32"
          ]
        }
    EOF
    ```
1.  Create the custom resource on the cluster by using the following command:
    ```terminal
    $ oc create -f sriov-network.yaml
    ```
    ```terminal title="Example output"
    sriovnetwork.sriovnetwork.openshift.io/sriov-network created
    ```