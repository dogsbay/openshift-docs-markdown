{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to configure the user workload monitoring stack {id="preparing-to-configure-the-monitoring-stack-uwm"}
{%- set context = "preparing-to-configure-the-monitoring-stack-uwm" %}

This section explains which user-defined monitoring components can be configured
{%- if not (openshift_dedicated or openshift_rosa) %}
, how to enable user workload monitoring, 
{%- endif %}
and how to prepare for configuring the user workload monitoring stack.


:::important

*   Not all configuration parameters for the monitoring stack are exposed.
Only the parameters and fields listed in the [Config map reference for the {{ cmo_full }}](/observability/monitoring/config-map-reference-for-the-cluster-monitoring-operator#cluster-monitoring-operator-configuration-reference) are supported for configuration.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   The monitoring stack imposes additional resource requirements. Consult the computing resources recommendations in [Scaling the {{ cmo_full }}](/scalability_and_performance/recommended-performance-scale-practices/recommended-infrastructure-practices#scaling-cluster-monitoring-operator_recommended-infrastructure-practices) and verify that you have sufficient resources.
{%- endif %}

:::


{% leveloffset +1 %}{% include "./modules/monitoring-configurable-monitoring-components.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
## Enabling monitoring for user-defined projects {id="enabling-monitoring-for-user-defined-projects-uwm_{{ context }}"}

In {{ product_title }}, you can enable monitoring for user-defined projects in addition to the default platform monitoring. You can monitor your own projects in {{ product_title }} without the need for an additional monitoring solution. Using this feature centralizes monitoring for core platform components and user-defined projects.

{% include "./snippets/monitoring-custom-prometheus-note.md" %}

{% leveloffset +2 %}{% include "./modules/monitoring-enabling-monitoring-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [User workload monitoring first steps](/observability/monitoring/getting-started/user-workload-monitoring-first-steps#user-workload-monitoring-first-steps) 

{% leveloffset +2 %}{% include "./modules/monitoring-granting-users-permission-to-configure-monitoring-for-user-defined-projects.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-enabling-alert-routing-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding alert routing for user-defined projects](/observability/monitoring/about-ocp-monitoring/key-concepts#understanding-alert-routing-for-user-defined-projects_key-concepts)

{%- if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +2 %}{% include "./modules/monitoring-enabling-the-platform-alertmanager-instance-for-user-defined-alert-routing.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +2 %}{% include "./modules/monitoring-enabling-a-separate-alertmanager-instance-for-user-defined-alert-routing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-granting-users-permission-to-configure-alert-routing-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring alert notifications](/observability/monitoring/configuring-user-workload-monitoring/configuring-alerts-and-notifications-uwm#configuring-alert-notifications_configuring-alerts-and-notifications-uwm)

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-granting-users-permission-to-monitor-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [CMO services resources](/observability/monitoring/accessing-metrics/accessing-monitoring-apis-by-using-the-cli#cmo-services-resources_accessing-monitoring-apis-by-using-the-cli)
*   [Granting users permission to configure monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#granting-users-permission-to-configure-monitoring-for-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm)
*   [Granting users permission to configure alert routing for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#granting-users-permission-to-configure-alert-routing-for-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +2 %}{% include "./modules/monitoring-granting-user-permissions-using-the-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-granting-user-permissions-using-the-cli.md" %}{% endleveloffset %}
{% endif %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-excluding-a-user-defined-project-from-monitoring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-disabling-monitoring-for-user-defined-projects.md" %}{% endleveloffset %}
{% endif %}