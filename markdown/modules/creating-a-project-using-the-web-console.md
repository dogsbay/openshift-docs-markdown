{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project by using the web console {id="creating-a-project-using-the-web-console_{{ context }}"}

You can use the {{ product_title }} web console to create a project in your cluster. {._abstract}


:::note

Projects starting with `openshift-` and `kube-` are considered critical by {{ product_title }}. As such, {{ product_title }} does not allow you to create projects starting with `openshift-` using the web console.

:::


**Prerequisites**

*   You have the appropriate roles and permissions to create projects, applications, and other workloads in {{ product_title }}.

**Procedure**

*   If you are using the **Administrator** perspective:
    1.  Navigate to **Home** -> **Projects**.
    1.  Click **Create Project**:
        1.  In the **Create Project** dialog box, enter a unique name, such as `myproject`, in the **Name** field.
        1.  Optional: Add the **Display name** and **Description** details for the project.
        1.  Click **Create**.

            The dashboard for your project is displayed.
    1.  Optional: Select the **Details** tab to view the project details.
    1.  Optional: If you have adequate permissions for a project, you can use the **Project Access** tab to provide or revoke `admin`, `edit`, and `view` privileges for the project.
*   If you are using the **Developer** perspective:
    1.  Click the **Project** menu and select **Create Project**:
        **Figure 1. Create project**

        ![Web console image showing the Create project option](/_assets/images/odc_create_project.png)
        1.  In the **Create Project** dialog box, enter a unique name, such as `myproject`, in the **Name** field.
        1.  Optional: Add the **Display name** and **Description** details for the project.
        1.  Click **Create**.
    1.  Optional: Use the left navigation panel to navigate to the **Project** view and see the dashboard for your project.
    1.  Optional: In the project dashboard, select the **Details** tab to view the project details.
    1.  Optional: If you have adequate permissions for a project, you can use the **Project Access** tab of the project dashboard to provide or revoke admin, edit, and view privileges for the project.