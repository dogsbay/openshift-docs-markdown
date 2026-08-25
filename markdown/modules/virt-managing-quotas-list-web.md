{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing virtual machine quotas using the list view {id="virt-managing-quotas-list-web_{{ context }}"}

The Application Aware Quota (AAQ) quotas page in the {{ product_title }} web console provides a centralized view of all quotas managed by the AAQ operator. From this page, you can view quota status, usage, and perform management actions such as editing and deleting quotas. {._abstract}

**Prerequisites**

*   You have cluster administrator privileges.
*   The Application Aware Quota operator is enabled in your cluster.
*   At least one Application Aware Quota exists in a namespace that matches the label selector configured in the HyperConverged Operator (HCO).

**Procedure**

1.  In the {{ product_title }} web console, click **Virtualization** -> **Quotas**.

    The quotas list view is displayed, showing all project-scoped AAQ quotas by default.
1.  Click the **Cluster-scoped quotas** tab to view cluster scoped quotas.

    This tab is displayed only if cluster-scoped quotas have been defined in your cluster.

    :::note

    Cluster-scoped quotas can only be created or edited using YAML. The form-based creation option is not available for cluster-scoped quotas due to their complexity.
    
    :::

1.  To view detailed information about a specific quota, click the quota name to open the quota details page.
1.  To edit a quota, click the Options menu {{ kebab }} at the end of the quota row
    1.  Select **Edit quota**.

        The edit form is displayed with the current quota configuration.
    1.  Click **Save** after you have completed modifying the resource limits.

        :::note

        If the quota was initially created with advanced settings via YAML, clicking **Edit quota** opens the YAML editor instead of the form.
        
        :::

1.  To delete a quota, click the Options menu {{ kebab }} at the end of the quota row and select **Delete quota**. A confirmation dialog is displayed.
    1.  Click **Delete** to remove the quota.

        :::warning

        Deleting a quota removes all resource enforcement for the quota. Virtual machines in the affected project are no longer subject to the quota limits.
        
        :::

1.  To create a new quota from the list view, click **Create quota**.
    1.  Select an option from the dropdown menu:
        *   **With form**: Opens the form-based creation experience for simple VM quota use cases.
        *   **With YAML**: Opens the YAML editor for advanced quota configurations that include pod limits or other resource types.