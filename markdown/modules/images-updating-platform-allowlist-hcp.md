{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating platform allowlist for {{ product_title }} {id="images-updating-platform-allowlist-hcp_{{ context }}"}

A list of Red&#160;Hat registries is automatically allowed and it is visible when running rosa describe cluster. This list can be periodically updated to ensure platform can be operated correctly. Impacted clusters will receive a notification with the new allowlist ID. In such cases, the user must use this parameter to update from the previous expected ID to the newly expected ID. {._abstract}

**Procedure**

*   Update or edit the image registry for the cluster by running the following command:
    ```terminal
    $ rosa edit cluster --cluster=<cluster_name> --registry-config-platform-allowlist <newID>
    ```