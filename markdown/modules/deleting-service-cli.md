{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an add-on service using the CLI {id="deleting-service-cli_{{ context }}"}

You can delete an add-on service from your {{ product_title }} cluster by using the {{ cluster_manager_first }} CLI (`ocm`).

**Procedure**

*   To delete the add-on service from your cluster through {{ cluster_manager }} CLI, enter the following command:
    ```terminal
    $ ocm delete api/clusters_mgmt/v1/clusters/<cluster_id>/addons/<addon_id>
    ```