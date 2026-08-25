{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a config map by using the CLI {id="nodes-pods-configmap-create_{{ context }}"}

To provide configuration data to your pods, you can use the {{ oc_first }} to create a config map from directories, specific files, or literal values. {._abstract}

**Procedure**

*   Create a config map:
    ```terminal
    $ oc create configmap <configmap_name> [options]
    ```