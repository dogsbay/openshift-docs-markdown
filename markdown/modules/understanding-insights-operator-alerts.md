{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing {{ insights_operator }} alerts {id="understanding-insights-operator-alerts_{{ context }}"}

The {{ insights_operator }} declares alerts through the Prometheus monitoring system to the Alertmanager. You can view these alerts in the Alerting UI in the {{ product_title }} web console. {._abstract}

Currently, {{ insights_operator }} sends the following alerts when the conditions are met:

**{{ insights_operator }} alerts**

| Alert | Description |
| --- | --- |
| `InsightsDisabled` | {{ insights_operator }} is disabled. |
| `SimpleContentAccessNotAvailable` | Simple content access is not enabled in Red Hat Subscription Management. |
| `InsightsRecommendationActive` | {{ red_hat_lightspeed }} has an active recommendation for the cluster. |

**Procedure**

*   To view these alerts in the Alerting UI in the {{ product_title }} web console, choose one of the following methods:
    *   In the **Administrator** perspective, click **Observe** -> **Alerting**.
    *   In the **Developer** perspective, click **Observe** -> &lt;project_name> -> **Alerts** tab.