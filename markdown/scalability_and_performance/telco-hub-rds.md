---
title: Telco hub reference design specification
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set telco_hub = true %}
{% include "./_attributes/common-attributes.md" %}
# Telco hub reference design specification {id="telco-hub-ref-design-specs"}
{%- set context = "telco-hub" %}

The telco hub reference design specification (RDS) describes the configuration for a hub cluster that deploys and operates fleets of {{ product_title }} clusters in a telco environment.

{% leveloffset +1 %}{% include "./modules/telco-ran-core-ref-design-spec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-deviations-from-the-ref-design.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-architecture-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-telco-management-cluster-use-model.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For more information about core clusters or far edge clusters that host RAN distributed unit (DU) workloads, see the following:
    *   [Telco core RDS](/scalability_and_performance/telco-core-rds#telco-core-ref-design-specs)
    *   [Telco RAN DU RDS](/scalability_and_performance/telco-ran-du-rds#telco-ran-du-ref-design-specs)
*   For more information about lifecycle management for the fleet of managed clusters see:
    *   [Image-based upgrade for {{ sno }} clusters](/edge_computing/image_based_upgrade/cnf-understanding-image-based-upgrade#cnf-understanding-image-based-upgrade)
    *   [Updating managed clusters with the {{ cgu_operator_full }}](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)
    *   [Upgrading a telco core CNF cluster](/post_installation_configuration/day_2_core_cnf_clusters/telco-day-2-welcome#telco-day-2-welcome)
*   For more information about declarative cluster provisioning with {{ ztp }} see:
    *   [Installing managed clusters with {{ rh_rhacm }} and SiteConfig resources](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)
*   For more information about observability metrics and alerts, see:
    *   [Multicluster architecture](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/about/index#multicluster-architecture)
    *   [Observability](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/about/index#observability-arch)

{% leveloffset +1 %}{% include "./modules/telco-hub-scaling-targets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-resource-utilization.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Comparison of hub cluster and managed cluster templates](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/governance/index#template-comparison-table)

{% leveloffset +1 %}{% include "./modules/telco-hub-cluster-topology.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} architecture](/welcome/learn_more_about_openshift#architecture)
*   [Postinstallation node tasks](/post_installation_configuration/node-tasks#post-install-node-tasks)

{% leveloffset +1 %}{% include "./modules/telco-hub-networking.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
*   [Installing a cluster in a disconnected environment](/disconnected/installing#installing-disconnected-environments)
*   [Using Operator Lifecycle Manager on restricted networks](/disconnected/using-olm#olm-restricted-networks)
*   [Configuring the hub cluster to use a disconnected mirror registry](/edge_computing/ztp-preparing-the-hub-cluster#ztp-configuring-the-cluster-for-a-disconnected-environment_ztp-preparing-the-hub-cluster)
*   [CIDR range definitions](/networking/networking_overview/cidr-range-definitions#cidr-range-definitions)
*   [Installing {{ product_title }}](/installing/overview/index#ocp-installation-overview)
*   [Networking in {{ product_title }}](/networking/networking_overview/understanding-networking#understanding-networking)
*   [Networking in {{ rh_rhacm }}](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/networking/index)
*   [Network configuration in {{ rh_rhacm }}](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#mce-network-configuration)

{% leveloffset +1 %}{% include "./modules/telco-hub-memory-and-cpu-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Scaling your {{ product_title }} cluster and tuning performance in production environments](/scalability_and_performance/index#scalability-and-performance-overview)
*   [Sizing your cluster](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/install/installing#sizing-your-cluster)

{% leveloffset +1 %}{% include "./modules/telco-hub-storage-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-hub-assisted-service.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling central infrastructure management in disconnected environments](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#enable-cim-disconnected)

{% leveloffset +2 %}{% include "./modules/telco-hub-acm-observability.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-hub-storage-considerations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [ODF disks cleaning procedure](https://access.redhat.com/solutions/7114870)
*   [Persistent storage overview](/storage/understanding-persistent-storage#persistent-storage-overview_understanding-persistent-storage)
*   [{{ rh_storage }} architecture](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html/red_hat_openshift_data_foundation_architecture/index)
*   [Persistent storage using local volumes](/storage/persistent_storage_local/persistent-storage-local#persistent-storage-using-local-volume)
*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)

{% leveloffset +1 %}{% include "./modules/telco-hub-git-repository.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-hub-cluster-openshift-deployment.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} installation overview](/installing/overview/index#installation-overview_ocp-installation-overview)
*   [Installing a cluster with customizations](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)
*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/telco-hub-hub-cluster-day-2-operators.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Red Hat Advanced Cluster Management for Kubernetes 2.11 Support Matrix](https://access.redhat.com/articles/7073065)
*   [OpenShift Operator lifecycles](https://access.redhat.com/support/policy/updates/openshift_operators)
*   For more information about telco hub cluster update requirements, see:
    *   [Recommended hub cluster specifications and managed cluster limits for {{ ztp }}](/edge_computing/ztp-preparing-the-hub-cluster#ztp-gitops-ztp-max-spoke-clusters_ztp-preparing-the-hub-cluster).
    *   [Red Hat Advanced Cluster Management for Kubernetes 2.11 Support Matrix](https://access.redhat.com/articles/7073065)
    *   [OpenShift Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators)
*   For more information about updating the hub cluster, see:
    *   [Introduction to OpenShift updates](/updating/understanding_updates/intro-to-updates#understanding-openshift-updates)
    *   [Upgrading your hub cluster](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/install/index#upgrading-hub)
    *   [Updating {{ ztp }}](/edge_computing/ztp-updating-gitops#ztp-updating-gitops)

{% leveloffset +1 %}{% include "./modules/telco-hub-observability.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For more information about observability, see:
    *   [Exporting metrics to external endpoints](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/observability/index#exporting-metrics-to-external-endpoints)
    *   [Enabling the Observability service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/observability/index#enabling-observability-service)
*   For more information about custom metrics, see [Adding custom metrics](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/observability/index#adding-custom-metrics)
*   For more information about forwarding alerts to other external systems, see [Forwarding alerts](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/observability/index#forward-alerts)
*   For more information about CPU and memory requirements see: [Observability pod capacity requests](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/observability/index#observability-pod-capacity-requests)
*   For more information about custom dashboards, see [Using Grafana dashboards](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/observability/index#using-grafana-dashboards)

{% leveloffset +1 %}{% include "./modules/telco-hub-managed-clusters-lifecycle-management.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Challenges of the network far edge](/edge_computing/ztp-deploying-far-edge-clusters-at-scale#ztp-deploying-far-edge-clusters-at-scale)

{% leveloffset +2 %}{% include "./modules/telco-hub-managed-cluster-deployment.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [SiteConfig](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/multicluster_engine_operator_with_red_hat_advanced_cluster_management/siteconfig-intro#siteconfig-intro)
*   [ClusterInstance](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/apis/apis#rhacm-docs_apis_clusterinstance_jsonclusterinstance)
*   [Creating the managed bare-metal host secrets](/edge_computing/ztp-deploying-far-edge-sites#ztp-creating-the-site-secrets_ztp-deploying-far-edge-sites)

{% leveloffset +2 %}{% include "./modules/telco-hub-managed-cluster-updates-and-upgrades.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuration policy YAML structure](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/governance/governance#configuration-policy-yaml)
*   [About the ClusterGroupUpgrade CR](/edge_computing/cnf-talm-for-cluster-upgrades#talo-about-cgu-crs_cnf-topology-aware-lifecycle-manager)
*   [Understanding the image-based upgrade for {{ sno }} clusters](/edge_computing/image_based_upgrade/cnf-understanding-image-based-upgrade#cnf-understanding-image-based-upgrade)
*   [Performing an image-based upgrade for {{ sno }} clusters using {{ ztp }}](/edge_computing/image_based_upgrade/ztp-image-based-upgrade#ztp-image-based-upgrade)

{% leveloffset +2 %}{% include "./modules/telco-hub-hub-disaster-recovery.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Business continuity](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/business_continuity/index)

{% leveloffset +1 %}{% include "./modules/telco-hub-hub-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-hub-red-hat-advanced-cluster-management-rhacm.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   * [Hub Network Configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/networking/networking#hub-network-config)
*   [Multi Cluster Engine](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/clusters/index#cluster_mce_overview)
*   [Governance](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/governance/index)
*   [{{ cgu_operator_full }}](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)
*   [MultiClusterHub Observability](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/observability/index)
*   [Business continuity](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/business_continuity/index#business-cont-overview)
*   [Performance and scalability](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/install/installing#performance-and-scalability)
*   [Network configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/clusters/index#mce-network-configuration)

{% leveloffset +2 %}{% include "./modules/telco-hub-topology-aware-lifecycle-manager-talm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-hub-gitops-operator-and-ztp-plugins.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [ClusterInstance CR](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/multicluster_engine_operator_with_red_hat_advanced_cluster_management/siteconfig-intro)
*   [PolicyGenTemplate CRs](/edge_computing/policygentemplate_for_ztp/ztp-configuring-managed-clusters-policies#ztp-configuring-managed-clusters-policies)
*   [{{ ztp }} version independence](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository-ver-ind_ztp-preparing-the-hub-cluster)

{% leveloffset +2 %}{% include "./modules/telco-hub-local-storage-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-hub-openshift-data-foundation.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Support OpenShift dual stack with {{ rh_storage }} using IPv4](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/4.13/html-single/4.13_release_notes/index#support_openshift_dual_stack_with_odf_using_ipv4)
*   [Infrastructure requirements](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.15/html-single/planning_your_deployment/index#infrastructure-requirements_rhodf)
*   [Network requirements](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.15/html-single/planning_your_deployment/index#network-requirements_rhodf)
*   [Storage cluster deployment approaches](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/4.17/html-single/planning_your_deployment/index#network-requirements_rhodf)

{% leveloffset +2 %}{% include "./modules/telco-hub-logging.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-hub-oadp-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-hub-cert-manager-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-rds-container.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/using-cluster-compare-telco-hub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hub-cluster-ref-config-crs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-advanced-cluster-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-storage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-gitops-ztp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-logging.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-container-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-image-mirroring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-crs-backup-recovery.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-hub-software-stack.md" %}{% endleveloffset %}

{%- set telco_hub = "" -%}