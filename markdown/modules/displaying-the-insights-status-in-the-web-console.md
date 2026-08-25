{%- set _mod_docs_content_type = "PROCEDURE" %}
# Display the {{ red_hat_lightspeed }} advisor status in the web console {id="displaying-the-insights-status-in-the-web-console_{{ context }}"}

View the health status of your cluster and potential issues identified by the {{ red_hat_lightspeed }} advisor service in the {{ product_title }} web console. Issues are grouped by risk category with links to detailed reports in the {{ hybrid_console_second }}. {._abstract}

**Prerequisites**

*   Your cluster is registered with {{ cluster_manager }}.
*   Remote health reporting is enabled, which is the default.
*   You are logged in to the {{ product_title }} web console.

**Procedure**

1.  Navigate to **Home** → **Overview** in the {{ product_title }} web console.
1.  Click **Insights** on the **Status** card.

    A list of potential issues that are grouped by risk is displayed.
1.  Click **View all recommendations in {{ red_hat_lightspeed }} Advisor** or click a specific category to view detailed reports in the {{ hybrid_console_second }}.

**Additional resources**
{._additional-resources}

*   [{{ red_hat_lightspeed }} Advisor recommendations](https://console.redhat.com/openshift/insights/advisor/recommendations)