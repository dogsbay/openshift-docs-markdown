---
title: Using DPDK and RDMA
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using DPDK and RDMA {id="using-dpdk-and-rdma"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-dpdk-and-rdma" %}

The containerized Data Plane Development Kit (DPDK) application is supported on {{ product_title }}. You can use Single Root I/O Virtualization (SR-IOV) network hardware with the Data Plane Development Kit (DPDK) and with remote direct memory access (RDMA).

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

{% leveloffset +1 %}{% include "./modules/nw-sriov-example-vf-function-in-pod.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-dpdk-example-intel.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-dpdk-example-mellanox.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-running-dpdk-rootless-tap.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-create-performance-profiles_cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)

{% leveloffset +1 %}{% include "./modules/nw-sriov-concept-dpdk-line-rate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-example-dpdk-line-rate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-app-netutil.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-network-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-create-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-dpdk-base-workload.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-dpdk-running-testpmd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-rdma-example-mellanox.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-openstack-ovs-dpdk-testpmd-pod.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_using-dpdk-and-rdma"}

*   [Red Hat certified hardware (Red Hat Ecosystem Catalog)](https://catalog.redhat.com/en/hardware)
*   [Configuring a cluster for RDMA in {{ rhoai_full }}](https://docs.redhat.com/en/documentation/red_hat_openshift_ai_self-managed/latest/html/managing_openshift_ai/managing-distributed-workloads_managing-rhoai#configuring-a-cluster-for-rdma_managing-rhoai)
*   [Creating a performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-create-performance-profiles_cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Adjusting the NIC queues with the performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#adjusting-nic-queues-with-the-performance-profile_cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Provisioning real-time and low latency workloads](/scalability_and_performance/cnf-provisioning-low-latency-workloads#cnf-provisioning-low-latency-workloads)
*   [Installing the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator)
*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#nw-sriov-networknodepolicy-object_configuring-sriov-device)
*   [Dynamic IP address assignment configuration with Whereabouts](/networking/multiple_networks/secondary_networks/configuring-ip-secondary-nwt#nw-multus-whereabouts_configuring-additional-network)
*   [Disabling interrupt processing for individual pods](/scalability_and_performance/cnf-provisioning-low-latency-workloads#disabling-interrupt-processing-for-individual-pods_cnf-provisioning-low-latency)
*   [Configuring an SR-IOV Ethernet network attachment](/networking/hardware_networks/configuring-sriov-net-attach#configuring-sriov-net-attach)