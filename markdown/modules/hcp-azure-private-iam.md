{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring IAM resources for a private hosted cluster {id="hcp-azure-private-iam_{{ context }}"}

Create Workload Identities so that your private clusters can manage private endpoints and private DNS zones. {._abstract}

**Prerequisites**

*   You have an {{ product_title }} management cluster on {{ azure_short }} that has the HyperShift Operator installed.
*   The {{ azure_short }} command-line interface (CLI) is installed and configured.
*   The {{ oc_first }} is installed.
*   If you are using external DNS, the `jq` command-line JSON processor is installed.
*   You configured an OIDC issuer. For more information, see "Setting up an OIDC issuer".

**Procedure**

1.  Set your environment variables:
    1.  Set your prefix by entering the following command:
        ```bash
        $ PREFIX="<my_prefix>"
        ```
    1.  Set the cluster name by entering the following command:
        ```bash
        $ CLUSTER_NAME="${PREFIX}-hc"
        ```
    1.  Set the resource group name by entering the following command:
        ```bash
        $ RESOURCE_GROUP_NAME="${CLUSTER_NAME}-${PREFIX}"
        ```
    1.  Set the location by entering the following command:
        ```bash
        $ LOCATION="<my_region>"
        ```
    1.  Set the variable for the path to the {{ azure_short }} credentials file by entering the following command:
        ```bash
        $ AZURE_CREDS="<path_to_azure_credentials_json>"
        ```
    1.  Set the variable for the OIDC issuer URL by entering the following command:
        ```bash
        $ OIDC_ISSUER_URL="<my_oidc_url_com>"
        ```
    1.  Set the path to the Workload Identities file by entering the following command:
        ```bash
        $ WORKLOAD_IDENTITIES_FILE="<path_to_workload_identities_file_json>"
        ```
1.  Create Workload Identities by entering the following command:
    ```terminal
    $ hcp create iam azure \
      --name "${CLUSTER_NAME}" \
      --infra-id "${PREFIX}" \
      --azure-creds "${AZURE_CREDS}" \
      --location "${LOCATION}" \
      --resource-group-name "${RESOURCE_GROUP_NAME}" \
      --oidc-issuer-url "${OIDC_ISSUER_URL}" \
      --output-file "${WORKLOAD_IDENTITIES_FILE}"
    ```

    The command creates 8 Workload Identities. For `Private` and `PublicAndPrivate` clusters, the Control Plane Operator identity is used to create and manage private endpoints, private DNS zones, {{ azure_short }} Virtual Network (VNet) links, and DNS A records. The Control Plane Identity is assigned the `Contributor` role by default. To use a more restrictive role, use the `--assign-custom-hcp-roles` flag.