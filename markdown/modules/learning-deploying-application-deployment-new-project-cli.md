{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a new project using the CLI {id="learning-deploying-application-deployment-new-project-cli_{{ context }}"}

You can use {{ oc_first }} to create a new project. {._abstract}

**Procedure**

*   Create a new project named `ostoy` in your cluster by running following command:
    ```terminal
    $ oc new-project ostoy
    ```

    **For example**:
    ```terminal
    Now using project "ostoy" on server "https://api.myrosacluster.abcd.p1.openshiftapps.com:6443".
    ```
    *   **Optional**: Create a unique project name by running the following command:
        ```terminal
        $ oc new-project ostoy-$(uuidgen | cut -d - -f 2 | tr '[:upper:]' '[:lower:]')
        ```