{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Custom logging alerts {id="custom-logging-alerts"}
{%- set context = "custom-logging-alerts" %}

In logging 5.7 and later versions, users can configure the LokiStack deployment to produce customized alerts and recorded metrics. If you want to use customized [alerting and recording rules](https://grafana.com/docs/loki/latest/alert/), you must enable the LokiStack ruler component.

LokiStack log-based alerts and recorded metrics are triggered by providing [LogQL](https://grafana.com/docs/loki/latest/query/) expressions to the ruler component. The {{ loki_op }} manages a ruler that is optimized for the selected LokiStack size, which can be `1x.extra-small`, `1x.small`, or `1x.medium`.

To provide these expressions, you must create an `AlertingRule` custom resource (CR) containing Prometheus-compatible [alerting rules](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/), or a `RecordingRule` CR containing Prometheus-compatible [recording rules](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/).

Administrators can configure log-based alerts or recorded metrics for `application`, `audit`, or `infrastructure` tenants. Users without administrator permissions can configure log-based alerts or recorded metrics for `application` tenants of the applications that they have access to.

Application, audit, and infrastructure alerts are sent by default to the {{ product_title }} monitoring stack Alertmanager in the `openshift-monitoring` namespace, unless you have disabled the local Alertmanager instance. If the Alertmanager that is used to monitor user-defined projects in the `openshift-user-workload-monitoring` namespace is enabled, application alerts are sent to the Alertmanager in this namespace by default.

{% leveloffset +1 %}{% include "./modules/configuring-logging-loki-ruler.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/loki-rbac-rules-permissions.md" %}{% endleveloffset %}

{% if openshift_enterprise %}

**Additional resources**
{._additional-resources}

*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac) {._additional-resources}
{% endif %}

{% leveloffset +1 %}{% include "./modules/logging-enabling-loki-alerts.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_custom-logging-alerts" ._additional-resources}
*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
{%- if openshift_enterprise %}
*   [Configuring alert notifications](/post_installation_configuration/configuring-alert-notifications#configuring-alert-notifications)
{%- endif %}