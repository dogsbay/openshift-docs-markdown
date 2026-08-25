{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a new project by using the CLI {id="cloud-experts-deploying-application-deployment-creating-project-cli_{{ context }}"}

You can use the {{ oc_first }} tool to create your project for this tutorial. {._abstract}

**Procedure**

1.  Create a new project named `ostoy` in your cluster by running following command:
    ```terminal
    $ oc new-project ostoy
    ```

    ***Example output***
    ```terminal
    Now using project "ostoy" on server "https://api.myrosacluster.abcd.p1.openshiftapps.com:6443".
    ```
1.  **Optional**: Alternatively, create a unique project name by running the following command:
    ```terminal
    $ oc new-project ostoy-$(uuidgen | cut -d - -f 2 | tr '[:upper:]' '[:lower:]')
    ```