{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring alerts and notifications for core platform monitoring {id="configuring-alerts-and-notifications"}
{%- set context = "configuring-alerts-and-notifications" %}

You can configure a local or external Alertmanager instance to route alerts from Prometheus to endpoint receivers. You can also attach custom labels to all time series and alerts to add useful metadata information.

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-external-alertmanagers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-disabling-the-local-alertmanager.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Alertmanager (Prometheus documentation)](https://prometheus.io/docs/alerting/latest/alertmanager/)
*   [Managing alerts as an Administrator](/observability/monitoring/managing-alerts/managing-alerts-as-an-administrator#managing-alerts-as-an-administrator)

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-secrets-for-alertmanager.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-adding-a-secret-to-the-alertmanager-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-attaching-additional-labels-to-your-time-series-and-alerts.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to configure core platform monitoring stack](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#preparing-to-configure-the-monitoring-stack)

## Configuring alert notifications {id="configuring-alert-notifications_{{ context }}" ._additional-resources}

{% if openshift_rosa_hcp %}
In {{ product_title }},
{% endif %}
{% if not openshift_rosa_hcp %}
In {{ product_title }} {{ product_version }},
{%- endif %}
you can view firing alerts in the Alerting UI. You can configure Alertmanager to send notifications about default platform alerts by configuring alert receivers.


:::important

Alertmanager does not send notifications by default. It is strongly recommended to configure Alertmanager to receive notifications by configuring alert receivers through the web console or through the `alertmanager-main` secret.

:::


**Additional resources**
{._additional-resources}

*   [Sending notifications to external systems](/observability/monitoring/about-ocp-monitoring/key-concepts#sending-notifications-to-external-systems_key-concepts)
*   [PagerDuty website](https://www.pagerduty.com/)
*   [Prometheus Integration Guide (PagerDuty documentation)](https://www.pagerduty.com/docs/guides/prometheus-integration-guide/)
*   [Support version matrix for monitoring components](/observability/monitoring/getting-started/maintenance-and-support-for-monitoring#support-version-matrix-for-monitoring-components_maintenance-and-support-for-monitoring)
*   [Enabling alert routing for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-alert-routing-for-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-alert-routing-default-platform-alerts.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Send test alerts to Alertmanager in OpenShift 4 (Red&#160;Hat Customer Portal)](https://access.redhat.com/solutions/6828481)

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-alert-routing-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Send test alerts to Alertmanager in OpenShift 4 (Red&#160;Hat Customer Portal)](https://access.redhat.com/solutions/6828481)

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-different-alert-receivers-for-default-platform-alerts-and-user-defined-alerts.md" %}{% endleveloffset %}