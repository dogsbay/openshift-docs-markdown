{%- set _mod_docs_content_type = "PROCEDURE" %}
# Displaying all {{ red_hat_lightspeed }} advisor service recommendations {id="displaying-all-insights-advisor-recommendations_{{ context }}"}

The **Recommendations** view, by default, only displays the recommendations that are detected on your clusters. However, you can view all of the recommendations in the archive of the service. {._abstract}

**Prerequisites**

*   Remote health reporting is enabled, which is the default.
*   Your cluster is [registered](https://console.redhat.com/openshift/register) on {{ hybrid_console }}.
*   You are logged in to {{ cluster_manager_url }}.

**Procedure**

1.  Navigate to **Advisor** -> **Recommendations** on {{ cluster_manager_url }}.
1.  Click the **X** icons next to the **Clusters Impacted** and **Status** filters.

    You can now browse through all of the potential recommendations for your cluster.