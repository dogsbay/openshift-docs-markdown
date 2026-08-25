{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing supported API resources {id="cli-using-cli-list-api-resources_{{ context }}"}

Use the `oc api-resources` command to view the list of supported API resources on the server. {._abstract}

**Procedure**

*   View the supported API resources by running the following command:
    ```terminal
    $ oc api-resources
    ```
    ```terminal title="Example output"
    NAME                                  SHORTNAMES       APIGROUP                              NAMESPACED   KIND
    bindings                                                                                     true         Binding
    componentstatuses                     cs                                                     false        ComponentStatus
    configmaps                            cm                                                     true         ConfigMap
    ...
    ```