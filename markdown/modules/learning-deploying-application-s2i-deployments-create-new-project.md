{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a new project {id="learning-deploying-application-s2i-deployments-create-new-project_{{ context }}"}

You can use the {{ oc_first }} to create a new project within your cluster. To get started with the integrated Source-to-Image (S2I) deployment process, create a new project within your cluster by using the {{ oc_first }}. {._abstract}

**Procedure**

*   Create a new project from the CLI by running the following command:
    ```terminal
    $ oc new-project ostoy-s2i
    ```