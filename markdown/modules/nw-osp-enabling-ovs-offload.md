{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling OVS hardware offloading {id="nw-osp-enabling-ovs-offload_{{ context }}"}

For clusters that run on {{ rh_openstack_first }}, you can enable [Open vSwitch (OVS)](https://www.openvswitch.org/) hardware offloading. {._abstract}

OVS is a multi-layer virtual switch that enables large-scale, multi-server network virtualization.

**Prerequisites**

*   You installed a cluster on {{ rh_openstack }} that is configured for single-root input/output virtualization (SR-IOV).
*   You installed the SR-IOV Network Operator on your cluster.
*   You created two `hw-offload` type virtual function (VF) interfaces on your cluster.


:::note

Application layer gateway flows are broken in {{ product_title }} version 4.10, 4.11, and 4.12. Also, you cannot offload the application layer gateway flow for {{ product_title }} version 4.13.

:::


**Procedure**

1.  Create an `SriovNetworkNodePolicy` policy for the two `hw-offload` type VF interfaces that are on your cluster:
    ```yaml title="The first virtual function interface"
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetworkNodePolicy
    metadata:
      name: "hwoffload9"
      namespace: openshift-sriov-network-operator
    spec:
      deviceType: netdevice
      isRdma: true
      nicSelector:
        pfNames:
        - ens6
      nodeSelector:
        feature.node.kubernetes.io/network-sriov.capable: 'true'
      numVfs: 1
      priority: 99
      resourceName: "hwoffload9"
    ```
    where:


    `kind`
    :   Specifies the `SriovNetworkNodePolicy` value.

    `spec.nicSelector.pfNames`
    :   Specifies the physical function (PF) name. Both interfaces must include PF names.
    ```yaml title="The second virtual function interface"
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetworkNodePolicy
    metadata:
      name: "hwoffload10"
      namespace: openshift-sriov-network-operator
    spec:
      deviceType: netdevice
      isRdma: true
      nicSelector:
        pfNames:
        - ens5
      nodeSelector:
        feature.node.kubernetes.io/network-sriov.capable: 'true'
      numVfs: 1
      priority: 99
      resourceName: "hwoffload10"
    ```
    where:


    `kind`
    :   Specifies the `SriovNetworkNodePolicy` value.

    `spec.nicSelector.pfNames`
    :   Specifies the physical function (PF) name. Both interfaces must include PF names.
1.  Create `NetworkAttachmentDefinition` resources for the two interfaces:
    ```yaml title="A NetworkAttachmentDefinition resource for the first interface"
    apiVersion: k8s.cni.cncf.io/v1
    kind: NetworkAttachmentDefinition
    metadata:
      annotations:
        k8s.v1.cni.cncf.io/resourceName: openshift.io/hwoffload9
      name: hwoffload9
      namespace: default
    spec:
        config: '{ "cniVersion":"0.3.1", "name":"hwoffload9","type":"host-device","device":"ens6"
        }'
    ```
    ```yaml title="A NetworkAttachmentDefinition resource for the second interface"
    apiVersion: k8s.cni.cncf.io/v1
    kind: NetworkAttachmentDefinition
    metadata:
      annotations:
        k8s.v1.cni.cncf.io/resourceName: openshift.io/hwoffload10
      name: hwoffload10
      namespace: default
    spec:
        config: '{ "cniVersion":"0.3.1", "name":"hwoffload10","type":"host-device","device":"ens5"
        }'
    ```
1.  Use the interfaces that you created with a pod. For example:
    ```yaml title="A pod that uses the two OVS offload interfaces"
    apiVersion: v1
    kind: Pod
    metadata:
      name: dpdk-testpmd
      namespace: default
      annotations:
        irq-load-balancing.crio.io: disable
        cpu-quota.crio.io: disable
        k8s.v1.cni.cncf.io/resourceName: openshift.io/hwoffload9
        k8s.v1.cni.cncf.io/resourceName: openshift.io/hwoffload10
    spec:
      restartPolicy: Never
      containers:
      - name: dpdk-testpmd
        image: quay.io/krister/centos8_nfv-container-dpdk-testpmd:latest
    ```