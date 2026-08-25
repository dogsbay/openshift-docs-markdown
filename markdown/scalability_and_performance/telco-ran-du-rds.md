---
title: Telco RAN DU reference design specification
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set telco_ran = true %}
{% include "./_attributes/common-attributes.md" %}
# Telco RAN DU reference design specification {id="telco-ran-du-ref-design-specs"}
{%- set context = "telco-ran-du" %}

The telco RAN DU reference design specifications (RDS) describes the configuration for clusters running on commodity hardware to host 5G workloads in the Radio Access Network (RAN).
It captures the recommended, tested, and supported configurations to get reliable and repeatable performance for a cluster running the telco RAN DU profile.

Use the use model and system level information to plan telco RAN DU workloads, cluster resources, and minimum hardware specifications for managed {{ sno }} clusters.

Specific limits, requirements, and engineering considerations for individual components are described in individual sections.

{% leveloffset +1 %}{% include "./modules/telco-ref-design-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-ran-core-ref-design-spec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-deviations-from-the-ref-design.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-ran-engineering-considerations-for-the-ran-du-use-model.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

{% leveloffset +1 %}{% include "./modules/telco-ran-du-application-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-ran-du-reference-design-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-bios-tuning.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recommended {{ sno }} cluster configuration for vDU application workloads](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-reference-cluster-configuration-for-vdu)
*   [Managing host firmware settings with {{ ztp }}](/edge_computing/ztp-deploying-far-edge-sites#ztp-configuring-host-firmware-with-gitops-ztp_ztp-deploying-far-edge-sites)
*   [Configuring host firmware for low latency and high performance](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-du-configuring-host-firmware-requirements_sno-configure-for-vdu)
*   [Provisioning real-time and low latency workloads](/scalability_and_performance/cnf-provisioning-low-latency-workloads#cnf-provisioning-low-latency-workloads)

{% leveloffset +2 %}{% include "./modules/telco-ran-sysctls.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using sysctls in containers](/nodes/containers/nodes-containers-sysctls#nodes-containers-sysctls-about)

{% leveloffset +2 %}{% include "./modules/telco-ran-node-tuning-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Finding the effective IRQ affinity setting for a node](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#about_irq_affinity_setting_cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Tuning nodes for low latency with the performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Using the Node Tuning Operator](/scalability_and_performance/using-node-tuning-operator#using-node-tuning-operator)

{% leveloffset +2 %}{% include "./modules/telco-ran-ptp-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-sr-iov-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Red Hat certified hardware (Red Hat Ecosystem Catalog)](https://catalog.redhat.com/en/hardware)
*   [Configuring QinQ support for SR-IOV enabled workloads](/networking/hardware_networks/configuring-sriov-qinq-support#configuring-qinq-support)

{% leveloffset +2 %}{% include "./modules/telco-ran-logging.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About OpenShift logging](https://docs.redhat.com/en/documentation/red_hat_openshift_logging/6.2/html/about_openshift_logging/index)
                                
{% leveloffset +2 %}{% include "./modules/telco-ran-sriov-fec-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [SRIOV-FEC Operator for Intel® vRAN Dedicated Accelerator manager container](https://catalog.redhat.com/software/containers/intel/sriov-fec-operator/6017de1669aea3122e6fa15f)

{% leveloffset +2 %}{% include "./modules/telco-ran-lca-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding the image-based upgrade for {{ sno }} clusters](/edge_computing/image_based_upgrade/cnf-understanding-image-based-upgrade#cnf-understanding-image-based-upgrade)
*   [Configuring a shared container directory between ostree stateroots when using {{ ztp }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#ztp-image-based-upgrade-shared-container-partition_shared-container-partition)

{% leveloffset +2 %}{% include "./modules/telco-ran-local-storage-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-lvms-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-workload-partitioning.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Workload partitioning](/scalability_and_performance/enabling-workload-partitioning#enabling-workload-partitioning)

{% leveloffset +2 %}{% include "./modules/telco-ran-cluster-tuning.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
*   [Observability](/scalability_and_performance/telco-hub-rds#telco-hub-observability_telco-hub)

{% leveloffset +2 %}{% include "./modules/telco-ran-machine-configuration.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recommended cluster install manifests](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-sno-install-time-cluster-config)

{% leveloffset +1 %}{% include "./modules/telco-ran-du-deployment-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-red-hat-advanced-cluster-management-rhacm.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using {{ ztp }} to provision clusters at the network far edge](/edge_computing/ztp-deploying-far-edge-clusters-at-scale#about-ztp_ztp-deploying-far-edge-clusters-at-scale)
*   [Red Hat Advanced Cluster Management for Kubernetes](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes)

{% leveloffset +2 %}{% include "./modules/telco-ran-siteconfig-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-topology-aware-lifecycle-manager-talm.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating managed clusters with the {{ cgu_operator_full }}](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)

{% leveloffset +2 %}{% include "./modules/telco-ran-gitops-operator-and-ztp-plugins.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing the {{ ztp }} site configuration repository for version independence](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository-ver-ind_ztp-preparing-the-hub-cluster)
*   [Adding custom content to the {{ ztp }} pipeline](/edge_computing/policygentemplate_for_ztp/ztp-advanced-policy-config#ztp-adding-new-content-to-gitops-ztp_ztp-advanced-policy-config)

{% leveloffset +2 %}{% include "./modules/telco-ran-agent-based-installer-abi.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing a cluster with customizations](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/telco-ran-du-reference-configuration-crs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-crs-cluster-tuning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-crs-day-2-operators.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-ran-crs-machine-configuration.md" %}{% endleveloffset %}

{%- set context = "ran-ref-design-crs" %}
{% leveloffset +1 %}{% include "./modules/using-cluster-compare-telco-ran.md" %}{% endleveloffset %}
{%- set context = "telco-ran-du" %}

**Additional resources**
{._additional-resources}

*   [Understanding the cluster-compare plugin](/scalability_and_performance/cluster-compare/understanding-the-cluster-compare-plugin#understanding-the-cluster-compare-plugin)

{% leveloffset +1 %}{% include "./modules/ztp-telco-ran-software-versions.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Telco hub reference configuration software specifications](/scalability_and_performance/telco-hub-rds#telco-hub-software-stack_telco-hub)

{%- set telco_ran = "" -%}