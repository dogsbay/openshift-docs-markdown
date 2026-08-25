{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting {{ azure_short }} infrastructure {id="hcp-azure-infra-delete_{{ context }}"}

If you have {{ azure_short }} infrastructure without a hosted cluster, you can remove the infrastructure if you are not using it. {._abstract}

For example, this scenario can happen if you created the infrastructure standalone but never created a hosted cluster. Or, you might have manually deleted the hosted cluster or management cluster, but the infrastructure resources still exist.

You can delete the entire infrastructure, or delete cluster-specific resources but preserve the main resource group. Preserving the main resource group is helpful when you have other resources in the same resource group that you want to keep.

If you have a hosted cluster and want to delete infrastructure while you delete the hosted cluster, follow the steps in "Deleting a hosted cluster on {{ azure_short }}", but omit the `--preserve-resource-group` flag.

**Procedure**

*   To delete the infrastructure, enter one of the following commands:
    *   To delete the infrastructure, including the resource group, enter the following command:
        ```terminal
        $ hcp destroy infra azure \
          --name <my_cluster_name> \
          --infra-id <infra_id> \
          --azure-creds <azure_credentials_file>
        ```
        *   `--name` specifies your hosted cluster name.
        *   `--infra-id` specifies a unique name that identifies your infrastructure. This value is used to name and tag {{ azure_short }} resources. Typically, it is the name of your cluster with a suffix appended to it.
        *   `--azure-creds` specifies an {{ azure_short }} credentials file that has permission to create infrastructure resources, such as virtual networks, subnets, and load balancers.
    *   To preserve the resource group but delete only cluster-specific resources, enter the following command:
        ```terminal
        $ hcp destroy infra azure \
          --name <my_cluster_name> \
          --infra-id <infra_id> \
          --azure-creds <azure_credentials_file> \
          --preserve-resource-group
        ```
        *   `--name` specifies your hosted cluster name.
        *   `--infra-id` specifies a unique name that identifies your infrastructure. This value is used to name and tag {{ azure_short }} resources. Typically, it is the name of your cluster with a suffix appended to it.
        *   `--azure-creds` specifies an {{ azure_short }} credentials file that has permission to create infrastructure resources, such as virtual networks, subnets, and load balancers.
        *   `--preserve-resource-group` specifies that you want to preserve the resource group.