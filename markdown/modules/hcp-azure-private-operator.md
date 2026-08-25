{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the HyperShift Operator with private platform support {id="hcp-azure-private-operator_{{ context }}"}

To set up an environment that supports private clusters, you must install the HyperShift Operator with flags that configure {{ azure_short }} Private Link management. {._abstract}


:::note

If you already installed the HyperShift Operator but you did not include the `--private-platform Azure` setting, you must run the `hcp install` command again with the private platform flags before you can create private clusters.

:::


**Prerequisites**

*   You have an {{ product_title }} management cluster on {{ azure_short }}.
*   The {{ azure_short }} command-line interface (CLI) is installed and configured.
*   The {{ oc_first }} is installed.
*   If you are using external DNS, the `jq` command-line JSON processor is installed.
*   You configured an OIDC issuer. For more information, see "Setting up an OIDC issuer".

**Procedure**

1.  Obtain credentials so that the Operator can manage Private Link resources.
    1.  Obtain the credentials file for Private Link management as shown in the following example:
        ```bash
        $ AZURE_PRIVATE_CREDS="<path_to_azure_private_credentials_json>"
        ```
    1.  Obtain the infrastructure resource group of the management cluster as shown in the following example:
        ```bash
        $ MGMT_INFRA_RG=$(oc get infrastructure cluster -o jsonpath='{.status.platformStatus.azure.resourceGroupName}')
        ```
1.  Set the external DNS configuration variables as shown in the following examples:
    ```bash
    $ SERVICE_PRINCIPAL_FILEPATH="<path_to_azure_mgmt_json_file>"
    ```
    ```bash
    $ DNS_ZONE_NAME="<my_subdomain_my_parent_dns_zone_com>"
    ```
1.  Install the HyperShift Operator with private platform support as shown in the following example:
    ```terminal
    $ hcp install \
      --pull-secret ${PULL_SECRET} \
      --private-platform Azure \
      --azure-private-creds ${AZURE_PRIVATE_CREDS} \
      --azure-pls-resource-group ${MGMT_INFRA_RG} \
      --external-dns-provider=azure \
      --external-dns-credentials ${SERVICE_PRINCIPAL_FILEPATH} \
      --external-dns-domain-filter ${DNS_ZONE_NAME}
    ```
    *   `--private-platform Azure` specifies that {{ azure_short }} Private Link management is to be enabled in the Operator.
    *   `--azure-private-creds` specifies the path to the {{ azure_short }} credentials file that is used for Private Link operations.

        :::note

        Besides using the `--azure-private-creds` flag, you can use one of the following authentication methods. Be sure to use only one authentication method.

        *   `--azure-private-secret` specifies an existing Kubernetes secret that has {{ azure_short }} credentials. This flag has a companion flag, `--azure-private-secret-key`. Its default value is `credentials`, but you can customize it for secrets that have non-standard key names.
        *   `--azure-pls-managed-identity-client-id` specifies the client ID of a managed identity for Private Link operations through Workload Identity federation. If you specify this flag, you must also include the `--azure-pls-subscription-id` flag, which specifies the {{ azure_short }} subscription ID for Private Link operations.
        
        :::

    *   `--azure-pls-resource-group` specifies the resource group where the Private Link resources are to be created. This resource group is the same as the resource group of the infrastructure for the management cluster.
    *   `--external-dns-credentials` specifies the path to a file that contains DNS credentials. If preferred, you can use the `--external-dns-secret` flag instead to specify a Kubernetes secret that has DNS credentials.