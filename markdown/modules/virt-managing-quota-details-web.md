{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing virtual machine quota details using the web console {id="virt-managing-quota-details-web_{{ context }}"}

The quota details page in the {{ product_title }} web console provides information about an Application Aware Quota (AAQ), including resource limits, current usage, and visualizations of how quota capacity is being consumed. {._abstract}


:::note

Cluster scoped quotas show only the YAML definition due to the complexity that these quotas require.

:::


**Prerequisites**

*   You have cluster administrator privileges.
*   The Application Aware Quota operator is enabled in your cluster.
*   An Application Aware Quota exists in your cluster.

**Procedure**

1.  In the {{ product_title }} web console, click **Virtualization** -> **Quotas**.
1.  Click the quota name to open the **Quota details** view.

    The **Quota details** view displays visual indicators, quota metadata, and tabulated data:
    *   Circular utilization charts visually represent resource consumption in your project
    *   The **Details** element provides metadata such as the Quota name, scope, applied labels and project.
    *   The **Quota details** element provides a tabulated views that display the current and maximum utilization of each resource type.

        :::note

        If a Kubernetes `ResourceQuota` also exists in the same project as this AAQ quota, an alert is displayed at the top of the details page with a link to view the ResourceQuota. Both quotas apply simultaneously to the project.
        
        :::

1.  Optional: Click the **YAML** tab to review the resource configuration of the quota.
1.  Optional: Use the **Actions** panel to edit or delete the quota.