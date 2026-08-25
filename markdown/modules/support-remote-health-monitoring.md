{%- set _mod_docs_content_type = "CONCEPT" %}
# Remote health monitoring issues {id="support-remote-health-monitoring_{{ context }}"}

Use the Telemetry Client and the {{ insights_operator }} to collect cluster telemetry and configuration data. The Red Hat support team uses this diagnostic information to proactively identify and resolve potential infrastructure issues. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
Red Hat uses this data to understand and resolve issues in a _connected cluster_. Similar to connected clusters, you can use remote health monitoring in a restricted network. {{ product_title }} collects data and monitors health using the following:
{% endif %}

{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
Red&#160;Hat uses this data to understand and resolve issues in a _connected cluster_. {{ product_title }} collects data and monitors health using the following:
{%- endif %}

*   **Telemetry**: The Telemetry Client gathers and uploads the metrics values to Red Hat every four minutes and thirty seconds. Red Hat uses this data to:
    *   Monitor the clusters.
    *   Roll out {{ product_title }} upgrades.
    *   Improve the upgrade experience.
*   **{{ insights_operator }}**: By default, {{ product_title }} installs and enables the {{ insights_operator }}, which reports configuration and component failure status every two hours. The {{ insights_operator }} helps to:
    *   Identify potential cluster issues proactively.
    *   Provide a solution and preventive action in {{ cluster_manager_first }}.

You can review telemetry information.

{% if not (openshift_rosa or openshift_rosa_hcp) %}
If you have enabled remote health reporting, you can use {{ red_hat_lightspeed }} to identify issues with your cluster. You can optionally disable remote health reporting.
{% endif %}