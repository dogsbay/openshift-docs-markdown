{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a private hosted cluster on {{ azure_short }} {id="hcp-azure-delete-private_{{ context }}"}

If you are no longer using a private hosted cluster on {{ azure_short }}, you can delete it. {._abstract}

The deletion process automatically cleans up Private Link resources in the following order:

1.  The Control Plane Operator removes the private endpoint, private DNS zones, VNet links, and A records.
1.  The `hcp destroy` command removes role-based access control (RBAC) role assignments.
1.  The HyperShift Operator removes Private Link.

**Procedure**

*   To delete a private hosted cluster, enter the following command:
    ```terminal
    $ hcp destroy cluster azure \
      --name ${CLUSTER_NAME} \
      --azure-creds ${AZURE_CREDS} \
      --resource-group-name ${MANAGED_RG_NAME} \
      --dns-zone-rg-name ${DNS_ZONE_RG_NAME}
    ```
    *   `--name` specifies your hosted cluster name.
    *   `--azure-creds` specifies an {{ azure_short }} credentials file that has permission to create infrastructure resources, such as virtual networks, subnets, and load balancers. This flag is required because the `hcp destroy cluster azure` command cleans up RBAC role assignments before it deletes infrastructure.
    *   `--resource-group-name` specifies the name of the resource group where you created identities.
    *   `--dns-zone-rg-name` specifies the name of the resource group that contains your DNS zone.