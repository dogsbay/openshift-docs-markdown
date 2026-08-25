---
title: NVIDIA GPUDirect Remote Direct Memory Access (RDMA)
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# NVIDIA GPUDirect Remote Direct Memory Access (RDMA) {id="rdma-remote-direct-memory-access"}
{%- set context = "rdma-remote-direct-memory-access" %}


NVIDIA GPUDirect Remote Direct Memory Access (RDMA) allows for an application in one computer to directly access the memory of another computer without needing access through the operating system. This provides the ability to bypass kernel intervention in the process, freeing up resources and greatly reducing the CPU overhead normally needed to process network communications. This is useful for distributing GPU-accelerated workloads across clusters. And because RDMA is so suited toward high bandwidth and low latency applications, this makes it ideal for big data and machine learning applications.
 
There are currently three configuration methods for NVIDIA GPUDirect RDMA:


Shared device
:   This method allows for an NVIDIA GPUDirect RDMA device to be shared among multiple pods on the {{ product_title }} worker node where the device is exposed. 


Host device
:   This method provides direct physical Ethernet access on the worker node by 
    creating an additional host network on a pod. A plugin allows the network device to be moved from the host network namespace to the network namespace on the pod.


SR-IOV legacy device
:   The Single Root IO Virtualization (SR-IOV) method can share a single network device, such as an Ethernet adapter, with multiple pods. SR-IOV segments the device, recognized on the host node as a physical function (PF), into multiple virtual functions (VFs).  The VF is used like any other network device.   

Each of these methods can be used across either the NVIDIA GPUDirect RDMA over Converged Ethernet (RoCE) or Infiniband infrastructures, providing an aggregate total of six methods of configuration.

{%- set FeatureName = "Remote Direct Memory Access" %}

{% leveloffset +1 %}{% include "./modules/rdma-prerequisites.md" %}{% endleveloffset %}

*   Install the [Node Feature Discovery Operator](/hardware_enablement/psap-node-feature-discovery-operator#installing-the-node-feature-discovery-operator_node-feature-discovery-operator).
*   Install the [SR-IOV Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).
*   Install the [NVIDIA Network Operator](https://docs.nvidia.com/networking/display/kubernetes2501/getting-started-openshift.html#network-operator-installation-using-openshift-oc-cli) (NVIDIA documentation). 
*   Install the [NVIDIA GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/openshift/24.9.2/install-gpu-ocp.html) (NVIDIA documentation).

{% leveloffset +1 %}{% include "./modules/rdma-disabling-irdma-kernel-module.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-creating-persistent-naming-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-configuring-the-nfd-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-configuring-the-sriov-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-configuring-the-nvidia-network-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-configuring-the-gpu-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-creating-the-machine-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-creating-workload-pods.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rdma-creating-shared-device-rdma-roce.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rdma-creating-host-device-rdma-roce.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rdma-creating-sriov-legacy-mode-rdma-roce.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rdma-creating-shared-device-rdma-ib.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rdma-verifying-rdma-connectivity.md" %}{% endleveloffset %}