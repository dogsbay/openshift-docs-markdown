{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Default logging alerts {id="default-logging-alerts"}
{%- set context = "default-logging-alerts" %}

Logging alerts are installed as part of the {{ clo }} installation. Alerts depend on metrics exported by the log collection and log storage backends. These metrics are enabled if you selected the option to **Enable Operator recommended cluster monitoring on this namespace** when installing the {{ clo }}.

Default logging alerts are sent to the {{ product_title }} monitoring stack Alertmanager in the `openshift-monitoring` namespace, unless you have disabled the local Alertmanager instance.

{% leveloffset +1 %}{% include "./modules/monitoring-accessing-the-alerting-ui.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-collector-alerts.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-vector-collector-alerts.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-fluentd-collector-alerts.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-rules.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_default-logging-alerts" ._additional-resources}
*   [Modifying core platform alerting rules](/observability/monitoring/managing-alerts/managing-alerts-as-an-administrator#modifying-core-platform-alerting-rules_managing-alerts-as-an-administrator)
{% endif %}