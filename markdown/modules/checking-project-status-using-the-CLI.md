{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking project status by using the CLI {id="checking-project-status-using-the-CLI_{{ context }}"}

You can review the status of your project by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have created a project.

**Procedure**

1.  Switch to your project:
    ```terminal
    $ oc project <project_name>
    ```
    *   Replace `<project_name>` with the name of your project.
1.  Obtain a high-level overview of the project:
    ```terminal
    $ oc status
    ```