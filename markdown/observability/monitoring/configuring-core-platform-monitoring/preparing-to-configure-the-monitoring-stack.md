{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to configure core platform monitoring stack {id="preparing-to-configure-the-monitoring-stack"}
{%- set context = "preparing-to-configure-the-monitoring-stack" %}

{% if not openshift_rosa_hcp %}
The {{ product_title }} installation program provides only a low number of configuration options before installation. Configuring most {{ product_title }} framework components, including the cluster monitoring stack, happens after the installation.
{% endif %}

This section explains which monitoring components can be configured and how to prepare for configuring the monitoring stack.


:::important

*   Not all configuration parameters for the monitoring stack are exposed.
Only the parameters and fields listed in the [Config map reference for the {{ cmo_full }}](/observability/monitoring/config-map-reference-for-the-cluster-monitoring-operator#cluster-monitoring-operator-configuration-reference) are supported for configuration.

{% if not openshift_rosa_hcp %}
*   The monitoring stack imposes additional resource requirements. Consult the computing resources recommendations in [Scaling the {{ cmo_full }}](/scalability_and_performance/recommended-performance-scale-practices/recommended-infrastructure-practices#scaling-cluster-monitoring-operator_recommended-infrastructure-practices) and verify that you have sufficient resources.
{%- endif %}

:::


{% leveloffset +1 %}{% include "./modules/monitoring-configurable-monitoring-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-creating-cluster-monitoring-configmap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-granting-users-permissions-for-core-platform-monitoring.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Resources reference for the {{ cmo_full }}](/observability/monitoring/accessing-metrics/accessing-monitoring-apis-by-using-the-cli#resources-reference-for-the-cluster-monitoring-operator_accessing-monitoring-apis-by-using-the-cli)
*   [CMO services resources](/observability/monitoring/accessing-metrics/accessing-monitoring-apis-by-using-the-cli#cmo-services-resources_accessing-monitoring-apis-by-using-the-cli)

{% leveloffset +2 %}{% include "./modules/monitoring-granting-user-permissions-using-the-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-granting-user-permissions-using-the-cli.md" %}{% endleveloffset %}