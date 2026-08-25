{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a Limit Range {id="nodes-cluster-limit-ranges-deleting_{{ context }}"}

You can remove any active `LimitRange` object so that it no longer enforces the limits in a project. {._abstract}

**Procedure**

*   Run the following command:
    ```terminal
    $ oc delete limits <limit_name>
    ```