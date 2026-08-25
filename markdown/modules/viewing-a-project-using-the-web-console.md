{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a project by using the web console {id="viewing-a-project-using-the-web-console_{{ context }}"}

You can view the projects that you have access to by using the {{ product_title }} web console. {._abstract}

{% include "./snippets/snip-unified-perspective-web-console.md" %}

**Procedure**

*   If you are logged in as an administrator, complete the following steps:
    1.  Navigate to **Home** → **Projects** in the navigation menu.
    1.  Select a project to view. The **Overview** tab includes a dashboard for your project.
    1.  Select the **Details** tab to view the project details.
    1.  Select the **YAML** tab to view and update the YAML configuration for the project resource.
    1.  Select the **Workloads** tab to see workloads in the project.
    1.  Select the **RoleBindings** tab to view and create role bindings for your project.
*   If you are logged in as a developer, complete the following steps:
    1.  Navigate to the **Project** page in the navigation menu.
    1.  Select **All Projects** from the **Project** drop-down menu at the top of the screen to list all of the projects in your cluster.
    1.  Select a project to view.
    1.  Select the **Details** tab to view the project details.
    1.  If you have adequate permissions for a project, select the **Project access** tab to view and update the privileges for the project.