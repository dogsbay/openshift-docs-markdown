{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ cluster_manager_first }} capabilities {id="rosa-cluster-manager-overview_{{ context }}"}

{{ cluster_manager_first }} is the managed service where you create, configure, and observe your {{ product_title }} clusters.
This overview walks through the actions it offers and the information on each cluster tab. {._abstract}

**Additional resources**
{._additional-resources}

*   [{{ cluster_manager }}](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index)
{%- if openshift_rosa or openshift_rosa_hcp %}
*   [Adding cluster notification contacts](/rosa_cluster_admin/rosa-cluster-notifications#add-notification-contact_rosa-cluster-notifications)
*   [Configuring identity providers](/authentication/sd-configuring-identity-providers#sd-configuring-identity-providers)
{%- endif %}
{%- if not openshift_rosa_hcp %}
*   [Understanding the monitoring stack](/observability/monitoring/about-ocp-monitoring/monitoring-stack-architecture#understanding-the-monitoring-stack_monitoring-stack-architecture)
*   [Using {{ red_hat_lightspeed }} to identify issues with your cluster](/support/remote_health_monitoring/using-insights-to-identify-issues-with-your-cluster#using-insights-to-identify-issues-with-your-cluster)
{%- endif %}