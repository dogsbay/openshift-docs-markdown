{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Dynamic Accelerator Slicer Operator using the web console {id="das-operator-uninstalling-web-console_{{ context }}"}

You can uninstall the Dynamic Accelerator Slicer (DAS) Operator using the {{ product_title }} web console.

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   The DAS Operator is installed in your cluster.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Locate the **Dynamic Accelerator Slicer** in the list of installed Operators.
1.  Click the **Options** menu {{ kebab }} for the DAS Operator and select **Uninstall Operator**.
1.  In the confirmation dialog, click **Uninstall** to confirm the removal.
1.  Navigate to **Home** -> **Projects**.
1.  Search for **das-operator** in the search box to locate the DAS Operator project.
1.  Click the **Options** menu {{ kebab }} next to the das-operator project, and select **Delete Project**.
1.  In the confirmation dialog, type `das-operator` in the dialog box, and click **Delete** to confirm the deletion.

**Verification**

1.  Navigate to the **Ecosystem** -> **Installed Operators** page.
1.  Verify that the Dynamic Accelerator Slicer (DAS) Operator is no longer listed.
1.  Optional. Verify that the `das-operator` namespace and its resources have been removed by running the following command:
    ```terminal
    $ oc get namespace das-operator
    ```

    The command should return an error indicating that the namespace is not found.


:::warning

Uninstalling the DAS Operator removes all GPU slice allocations and might cause running workloads that depend on GPU slices to fail. Ensure that no critical workloads are using GPU slices before proceeding with the uninstallation.

:::