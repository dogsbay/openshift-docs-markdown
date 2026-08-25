---
title: Preparing to install a cluster that uses SR-IOV or OVS-DPDK on OpenStack
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install a cluster that uses SR-IOV or OVS-DPDK on OpenStack {id="installing-openstack-nfv-preparing"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-openstack-nfv-preparing" %}

Before installing an {{ product_title }} cluster that uses single-root I/O virtualization (SR-IOV) or Open vSwitch with the Data Plane Development Kit (OVS-DPDK) on {{ rh_openstack_first }} or {{ rhoso_first }}, review the requirements for each technology and complete all the preparatory tasks.

{% leveloffset +1 %}{% include "./modules/installation-openstack-nfv-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-openstack-sr-iov-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [About Single Root I/O Virtualization (SR-IOV) hardware networks](/networking/hardware_networks/about-sriov#about-sriov)
*   [Planning an SR-IOV deployment ({{ rh_openstack_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_network_functions_virtualization/plan-sriov-deploy_rhosp-nfv)
*   [Configuring CPUs on Compute nodes ({{ rh_openstack_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_the_compute_service_for_instance_creation/assembly_configuring-cpus-on-compute-nodes)
*   [Planning an SR-IOV deployment ({{ rhoso_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_services_on_openshift/18.0/html/deploying_a_network_functions_virtualization_environment/plan-sriov-deploy_rhoso-nfv)
*   [NFV performance considerations ({{ rhoso_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_services_on_openshift/18.0/html-single/deploying_a_network_functions_virtualization_environment/index#nfv-perf-consider_rhoso-nfv)

{% leveloffset +2 %}{% include "./modules/installation-openstack-ovs-dpdk-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Planning your OVS-DPDK deployment ({{ rh_openstack_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_network_functions_virtualization/plan-ovs-dpdk-deploy_rhosp-nfv)
*   [Creating a flavor and deploying an instance for OVS-DPDK](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_network_functions_virtualization/config-dpdk-deploy_rhosp-nfv#create-flavor-deploy-instance-ovsdpdk_cfgdpdk-nfv)
*   [Creating a custom OVS-DPDK Compute service](https://docs.redhat.com/en/documentation/red_hat_openstack_services_on_openshift/18.0/html/deploying_a_network_functions_virtualization_environment/assembly_create-data-plane-sriov-dpdk_rhoso-nfv)
*   [Configuring an OVS-DPDK deployment ({{ rh_openstack_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_network_functions_virtualization/config-dpdk-deploy_rhosp-nfv)
*   [Planning an OVS-DPDK deployment ({{ rhoso_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_services_on_openshift/18.0/html/deploying_a_network_functions_virtualization_environment/plan-ovs-dpdk-deploy_rhoso-nfv)
*   [Creating the data plane for SR-IOV and DPDK environments ({{ rhoso_first }} documentation)](https://docs.redhat.com/en/documentation/red_hat_openstack_services_on_openshift/18.0/html/deploying_a_network_functions_virtualization_environment/assembly_create-data-plane-sriov-dpdk_rhoso-nfv)

{% leveloffset +1 %}{% include "./modules/installation-osp-configuring-sr-iov.md" %}{% endleveloffset %}

**Additional resources**

*   [Planning an SR-IOV deployment](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html-single/network_functions_virtualization_planning_and_configuration_guide/index#assembly_sriov_parameters)

{% leveloffset +1 %}{% include "./modules/installing-openstack-nfv-preparing-tasks-ovs-dpdk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-openstack-nfv-preparing-next-steps.md" %}{% endleveloffset %}