{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ cluster_manager_first }} overview {id="osd-red-hat-openshift-cluster-manager-overview_{{ context }}"}

{{ cluster_manager_first }} is a managed service where you can install, modify, operate, and upgrade your Red&#160;Hat OpenShift clusters. As a cluster administrator, this service allows you to work with all of your organization’s clusters from a single dashboard. {._abstract}

{{ cluster_manager }} guides you to install {{ OCP }}, {{ rosa_classic_title }}, {{ hcp_title_first }}, and {{ dedicated }} clusters. It is also responsible for both {{ OCP }} clusters after self-installation as well as your {{ rosa_classic_title }}, {{ hcp_title_first }}, and {{ dedicated }} clusters.

You can use {{ cluster_manager }} to do the following actions:

*   Create clusters
*   View cluster details and metrics
*   Manage your clusters with tasks such as scaling, changing node labels, networking, authentication
*   Manage access control
*   Monitor clusters
*   Schedule upgrades

**Additional resources**
{._additional-resources}

*   [{{ cluster_manager }}](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index)
*   [Understanding the monitoring stack](/observability/monitoring/about-ocp-monitoring/monitoring-stack-architecture#understanding-the-monitoring-stack_monitoring-stack-architecture)
*   [Using {{ red_hat_lightspeed }} to identify issues with your cluster](/support/remote_health_monitoring/using-insights-to-identify-issues-with-your-cluster#using-insights-to-identify-issues-with-your-cluster)
*   [Adding cluster notification contacts](/osd_cluster_admin/osd-cluster-notifications#add-notification-contact_osd-cluster-notifications)