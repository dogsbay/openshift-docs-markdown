{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project by using the Developer perspective in the web console {id="odc-creating-projects-using-developer-perspective_{{ context }}"}

You can use the **Developer** perspective in the {{ product_title }} web console to create a project in your cluster.


:::note

Projects starting with `openshift-` and `kube-` are considered critical by {{ product_title }}. As such, {{ product_title }} does not allow you to create projects starting with `openshift-` or `kube-` using the **Developer** perspective.
{%- if not (openshift_rosa or openshift_dedicated) %}
Cluster administrators can create these projects using the `oc adm new-project` command.
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
For {{ product_title }} clusters that use the Customer Cloud Subscription (CCS) model, users with `cluster-admin` privileges can create these projects using the `oc adm new-project` command.
{%- endif %}

:::


**Prerequisites**

*   Ensure that you have the appropriate roles and permissions to create projects, applications, and other workloads in {{ product_title }}.

**Procedure**

You can create a project using the **Developer** perspective, as follows:

1.  Click the **Project** menu and select **Create Project**:

    **Figure 1. Create project**

    ![odc_create_project](/images/odc_create_project.png)
    1.  In the **Create Project** dialog box, enter a unique name, such as `myproject`, in the **Name** field.
    1.  Optional: Add the **Display name** and **Description** details for the project.
    1.  Click **Create**.
1.  Optional: Use the navigation panel to navigate to the **Project** view and see the dashboard for your project.
1.  Optional: In the project dashboard, select the **Details** tab to view the project details.
1.  Optional: If you have adequate permissions for a project, you can use the **Project Access** tab of the project dashboard to provide or revoke admin, edit, and view privileges for the project.