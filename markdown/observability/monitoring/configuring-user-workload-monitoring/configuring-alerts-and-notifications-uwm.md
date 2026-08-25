{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring alerts and notifications for user workload monitoring {id="configuring-alerts-and-notifications-uwm"}
{%- set context = "configuring-alerts-and-notifications-uwm" %}

You can configure a local or external Alertmanager instance to route alerts from Prometheus to endpoint receivers. You can also attach custom labels to all time series and alerts to add useful metadata information.

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-external-alertmanagers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-secrets-for-alertmanager.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-adding-a-secret-to-the-alertmanager-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-attaching-additional-labels-to-your-time-series-and-alerts.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}

**Additional resources**
{._additional-resources}

*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
{% endif %}

## Configuring alert notifications {id="configuring-alert-notifications_{{ context }}" ._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
In {{ product_title }}, an administrator can enable alert routing for user-defined projects with one of the following methods:

*   Use the default platform Alertmanager instance.
*   Use a separate Alertmanager instance only for user-defined projects.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
In {{ product_title }}, the `dedicated-admin` user can enable alert routing for user-defined projects by using a separate Alertmanager instance for user-defined projects.
{% endif %}

Developers and other users with the `alert-routing-edit` cluster role can configure custom alert notifications for their user-defined projects by configuring alert receivers.


:::note

Review the following limitations of alert routing for user-defined projects:

*   User-defined alert routing is scoped to the namespace in which the resource is defined. For example, a routing configuration in namespace `ns1` only applies to `PrometheusRules` resources in the same namespace.
*   When a namespace is excluded from user-defined monitoring, `AlertmanagerConfig` resources in the namespace cease to be part of the Alertmanager configuration.

:::


**Additional resources**
{._additional-resources}

*   [Understanding alert routing for user-defined projects](/observability/monitoring/about-ocp-monitoring/key-concepts#understanding-alert-routing-for-user-defined-projects_key-concepts)
*   [Sending notifications to external systems](/observability/monitoring/about-ocp-monitoring/key-concepts#sending-notifications-to-external-systems_key-concepts)
*   [PagerDuty website](https://www.pagerduty.com/)
*   [Prometheus Integration Guide (PagerDuty documentation)](https://www.pagerduty.com/docs/guides/prometheus-integration-guide/)
*   [Support version matrix for monitoring components](/observability/monitoring/getting-started/maintenance-and-support-for-monitoring#support-version-matrix-for-monitoring-components_maintenance-and-support-for-monitoring)
*   [Enabling alert routing for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-alert-routing-for-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-alert-routing-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Send test alerts to Alertmanager in OpenShift 4 (Red&#160;Hat Customer Portal)](https://access.redhat.com/solutions/6828481)

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-alert-routing-user-defined-alerts-secret.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Send test alerts to Alertmanager in OpenShift 4 (Red&#160;Hat Customer Portal)](https://access.redhat.com/solutions/6828481)

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-different-alert-receivers-for-default-platform-alerts-and-user-defined-alerts.md" %}{% endleveloffset %}