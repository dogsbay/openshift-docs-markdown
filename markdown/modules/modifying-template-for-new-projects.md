{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying the template for new projects {id="modifying-template-for-new-projects_{{ context }}"}

To modify the default project template to customize the resources and settings applied when users create new projects, you can create a custom project template. {._abstract}

As a cluster administrator, you can modify the default project template so that new projects are created using your custom requirements.

To create your own custom project template:

**Prerequisites**

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to a {{ product_title }} cluster using an account with `dedicated-admin` permissions.
{%- endif %}

**Procedure**

1.  Log in as a user with `cluster-admin` privileges.
1.  Generate the default project template:
    ```terminal
    $ oc adm create-bootstrap-project-template -o yaml > template.yaml
    ```
1.  Use a text editor to modify the generated `template.yaml` file by adding
objects or modifying existing objects.
1.  The project template must be created in the `openshift-config` namespace. Load
your modified template:
    ```terminal
    $ oc create -f template.yaml -n openshift-config
    ```
1.  Edit the project configuration resource using the web console or CLI.
    *   Using the web console, complete the following tasks:
        1.  Navigate to the **Administration** → **Cluster Settings** page.
        1.  Click **Configuration** to view all configuration resources.
        1.  Find the entry for **Project** and click **Edit YAML**.
    *   Using the CLI, complete the following tasks:
        1.  Edit the `project.config.openshift.io/cluster` resource:
            ```terminal
            $ oc edit project.config.openshift.io/cluster
            ```
1.  Update the `spec` section to include the `projectRequestTemplate` and `name` parameters. 
Ensure you set the name of your uploaded project template.
The default name is `project-request`.
    ```yaml title="Project configuration resource with custom project template"
    apiVersion: config.openshift.io/v1
    kind: Project
    metadata:
    # ...
    spec:
      projectRequestTemplate:
        name: <template_name>
    # ...
    ```
1.  After you save your changes, create a new project to verify that your changes
were successfully applied.