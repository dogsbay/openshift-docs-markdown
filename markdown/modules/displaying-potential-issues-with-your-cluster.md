{%- set _mod_docs_content_type = "PROCEDURE" %}
# Displaying potential issues with your cluster {id="displaying-potential-issues-with-your-cluster_{{ context }}"}

You can display a {{ red_hat_lightspeed }} report in **{{ red_hat_lightspeed }} Advisor** on {{ cluster_manager_url }}. {._abstract}

Note that {{ red_hat_lightspeed }} repeatedly analyzes your cluster and shows the latest results. These results can change, for example, if you fix an issue or a new issue has been detected.

**Prerequisites**

*   Your cluster is registered on {{ cluster_manager_url }}.
*   Remote health reporting is enabled, which is the default.
*   You are logged in to {{ cluster_manager_url }}.

**Procedure**

1.  Navigate to **Advisor** -> **Recommendations** on {{ cluster_manager_url }}.

    Depending on the result, the {{ red_hat_lightspeed }} advisor service displays one of the following:
    *   **No matching recommendations found**, if {{ red_hat_lightspeed }} did not identify any issues.
    *   A list of issues {{ red_hat_lightspeed }} has detected, grouped by risk (low, moderate, important, and critical).
    *   **No clusters yet**, if {{ red_hat_lightspeed }} has not yet analyzed the cluster. The analysis starts shortly after the cluster has been installed, registered, and connected to the internet.
1.  If any issues are displayed, click the **>** icon in front of the entry for more details.

    Depending on the issue, the details can also contain a link to more information from Red Hat about the issue.