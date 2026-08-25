{%- set _mod_docs_content_type = "REFERENCE" %}
# Next steps after completing preparatory tasks {id="installing-openstack-nfv-preparing-next-steps_{{ context }}"}

After you completed preparatory configurations, you can complete additional tasks. {._abstract}

These additional tasks are listed as follows:
 
* [Configure the Node Tuning Operator with huge pages support](/scalability_and_performance/what-huge-pages-do-and-how-they-are-consumed-by-apps#what-huge-pages-do_huge-pages) for either type of deployment.
* After you deploy your cluster, you can [install the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sr-iov-operator_installing-sriov-operator), [configure an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#nw-sriov-networknodepolicy-object_configuring-sriov-device), and [create a compute machine set on {{ rh_openstack }}](/machine_management/creating_machinesets/creating-machineset-osp#machineset-yaml-osp-sr-iov_creating-machineset-osp).
* After you deploy your cluster, you can improve the performance of your cluster by completing any of the following tasks:
** Create a [test pod template for clusters that use OVS-DPDK on {{ rh_openstack }}](/networking/hardware_networks/using-dpdk-and-rdma#nw-openstack-ovs-dpdk-testpmd-pod_using-dpdk-and-rdma).
** Create a [ test pod template for clusters that use SR-IOV on {{ rh_openstack }}](/networking/hardware_networks/configuring-sriov-device#nw-openstack-sr-iov-testpmd-pod_configuring-sriov-device).
** Create a [performance profile template for clusters that use OVS-DPDK on {{ rh_openstack }}](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#installation-openstack-ovs-dpdk-performance-profile_cnf-tuning-low-latency-nodes-with-perf-profile).