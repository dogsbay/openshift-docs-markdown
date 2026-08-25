{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project {id="cli-using-cli-project_{{ context }}"}

Use the `oc new-project` command to create a new project. {._abstract}

**Procedure**

*   Create a new project by running the following command:
    ```terminal
    $ oc new-project my-project
    ```
    ```terminal title="Example output"
    Now using project "my-project" on server "https://openshift.example.com:6443".
    ```