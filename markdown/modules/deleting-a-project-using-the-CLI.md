{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a project by using the CLI {id="deleting-a-project-using-the-CLI_{{ context }}"}

You can delete a project by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have created a project.
*   You have the required permissions to delete the project.

**Procedure**

*   Delete your project by entering the following command:
    ```terminal
    $ oc delete project <project_name>
    ```
    *   Replace `<project_name>` with the name of the project that you want to delete.