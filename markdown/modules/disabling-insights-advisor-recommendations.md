{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling {{ red_hat_lightspeed }} advisor service recommendations {id="disabling-insights-advisor-recommendations_{{ context }}"}

You can disable specific recommendations that affect your clusters, so that they no longer show in your reports. You can disable a recommendation for a single cluster or all of your clusters. {._abstract}


:::note

Disabling a recommendation for all of your clusters also applies to any future clusters.

:::


**Prerequisites**

*   Remote health reporting is enabled, which is the default.
*   Your cluster is registered on {{ cluster_manager_url }}.
*   You are logged in to {{ cluster_manager_url }}.

**Procedure**

1.  Navigate to **Advisor** → **Recommendations** on {{ cluster_manager_url }}.
1.  Optional: Use the **Clusters Impacted** and **Status** filters as needed.
1.  Disable an alert by using one of the following methods:
    *   To disable an alert:
        1.  Click the **Options** menu {{ kebab }} for that alert, and then click **Disable recommendation**.
        1.  Enter a justification note and click **Save**.
    *   To view the clusters affected by this alert before disabling the alert:
        1.  Click the name of the recommendation to disable. You are directed to the single recommendation page.
        1.  Review the list of clusters in the **Affected clusters** section.
        1.  Click **Actions** → **Disable recommendation** to disable the alert for all of your clusters.
        1.  Enter a justification note and click **Save**.