{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Visualization for logging {id="log6x-visual-6-2"}
{%- set context = "logging-6x-6.2" %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
Visualization for logging is provided by deploying the [Logging UI Plugin](https://docs.redhat.com/en/documentation/red_hat_openshift_cluster_observability_operator/1-latest/html/ui_plugins_for_red_hat_openshift_cluster_observability_operator/logging-ui-plugin#coo-logging-ui-plugin-install_logging-ui-plugin) of the [Cluster Observability Operator](https://docs.redhat.com/en/documentation/red_hat_openshift_cluster_observability_operator/1-latest/html/about_red_hat_openshift_cluster_observability_operator/cluster-observability-operator-overview-1), which requires Operator installation.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
Visualization for logging is provided by deploying the Logging UI Plugin of the Cluster Observability Operator, which requires Operator installation.
{% endif %}

{% include "./snippets/logging-support-exception-for-cluster-observability-operator-due-to-logging-ui-plugin.md" %}