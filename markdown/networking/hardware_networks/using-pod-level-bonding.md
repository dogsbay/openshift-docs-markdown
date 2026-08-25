---
title: Using pod-level bonding
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using pod-level bonding {id="using-pod-level-bonding"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-pod-level-bonding" %}

{%- set FeatureName = "Bond Container Network Interface (CNI)" %}

Bonding at the pod level is vital to enable workloads inside pods that require high availability and more throughput. With pod-level bonding, you can create a bond interface from multiple single root I/O virtualization (SR-IOV) virtual function interfaces in a kernel mode interface. The SR-IOV virtual functions are passed into the pod and attached to a kernel driver.

One scenario where pod level bonding is required is creating a bond interface from multiple SR-IOV virtual functions on different physical functions. Creating a bond interface from two different physical functions on the host can be used to achieve high availability and throughput at pod level.

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

For guidance on tasks such as creating a SR-IOV network, network policies, network attachment definitions and pods, see  [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device).

{% leveloffset +1 %}{% include "./modules/nw-sriov-cfg-bond-interface-with-virtual-functions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-creating-bond-network-attachment-definition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-creating-pod-using-bond-interface.md" %}{% endleveloffset %}