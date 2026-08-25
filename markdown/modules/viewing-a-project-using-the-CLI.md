{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a project using the CLI {id="viewing-a-project-using-the-CLI_{{ context }}"}

When viewing projects, you are restricted to seeing only the projects you have
access to view based on the authorization policy. {._abstract}

**Procedure**

1.  To view a list of projects, enter the following command:
    ```terminal
    $ oc get projects
    ```
1.  To change from the current project to a different project for CLI operations, enter the following command. 
The specified project is then used in all subsequent operations that manipulate project-scoped content.
    ```terminal
    $ oc project <project_name>
    ```