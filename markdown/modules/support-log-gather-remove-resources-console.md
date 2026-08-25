{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing {{ support_log_gather }} resources {id="support-log-gather-remove-resources-console_{{ context }}"}

Once you have uninstalled the {{ support_log_gather }}, you can remove the associated resources from your cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Delete the component deployments in the must-gather-operator namespace.:
    1.  Click the **Project** drop-down menu to view the list of all available projects, and select the **must-gather-operator** project.
    1.  Navigate to **Workloads** -> **Deployments**.
    1.  Select the deployment that you want to delete.
    1.  Click the **Actions** drop-down menu, and select **Delete Deployment**.
    1.  In the confirmation dialog box, click **Delete** to delete the deployment.
    1.  Alternatively, delete deployments of the components present in the `must-gather-operator` namespace by using the command-line interface (CLI).
        ```terminal
        $ oc delete deployment -n must-gather-operator -l operators.coreos.com/support-log-gather-operator.must-gather-operator
        ```
1.  Optional: Remove the custom resource definitions (CRDs) that were installed by the {{ support_log_gather }}:
    1.  Navigate to **Administration** -> **CustomResourceDefinitions**.
    1.  Enter `MustGather` in the **Name** field to filter the CRDs.
    1.  Click the Options menu {{ kebab }} next to each of the following CRDs, and select **Delete Custom Resource Definition**:
        *   `MustGather`
1.  Optional: Remove the `must-gather-operator` namespace.
    1.  Navigate to **Administration** -> **Namespaces**.
    1.  Click the Options menu {{ kebab }} next to the **must-gather-operator** and select **Delete Namespace**.
    1.  In the confirmation dialog box, enter `must-gather-operator` and click **Delete**.