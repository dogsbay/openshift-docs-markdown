{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ConfigMap {id="configmap-create_{{ context }}"}

You can use the following command to create a ConfigMap from
directories, specific files, or literal values.

**Procedure**

*   Create a ConfigMap:

```
$ oc create configmap <configmap_name> [options]
```