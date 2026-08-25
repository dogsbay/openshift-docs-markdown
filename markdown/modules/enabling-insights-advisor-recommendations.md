{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling a previously disabled {{ red_hat_lightspeed }} advisor service recommendation {id="enabling-insights-advisor-recommendations_{{ context }}"}

When a recommendation is disabled for all clusters, you no longer see the recommendation in the {{ red_hat_lightspeed }} advisor service. You can change this behavior. {._abstract}

**Prerequisites**

*   Remote health reporting is enabled, which is the default.
*   Your cluster is registered on {{ cluster_manager_url }}.
*   You are logged in to {{ cluster_manager_url }}.

**Procedure**

1.  Navigate to **Advisor** → **Recommendations** on {{ cluster_manager_url }}.
1.  Filter the recommendations to display on the disabled recommendations:
    1.  From the **Status** drop-down menu, select **Status**.
    1.  From the **Filter by status** drop-down menu, select **Disabled**.
    1.  Optional: Clear the **Clusters impacted** filter.
1.  Locate the recommendation to enable.
1.  Click the Options menu {{ kebab }}, and then click **Enable recommendation**.