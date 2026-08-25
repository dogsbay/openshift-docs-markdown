{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating infrastructure for a private hosted cluster {id="hcp-azure-private-infra_{{ context }}"}

Set up infrastructure so that you can create private hosted clusters. {._abstract}

**Prerequisites**

*   You have an {{ product_title }} management cluster on {{ azure_short }} that has the HyperShift Operator installed.
*   The {{ azure_short }} command-line interface (CLI) is installed and configured.
*   The {{ oc_first }} is installed.
*   If you are using external DNS, the `yq` command-line YAML processor is installed.
*   You configured an OIDC issuer. For more information, see "Setting up an OIDC issuer".

**Procedure**

1.  Set your environment variables:
    1.  Set the variable for the DNS zone resource group by entering the following command:
        ```bash
        $ DNS_ZONE_RG_NAME="os4-common"
        ```
    1.  Set the variable for the base domain of your DNS zone by entering the following command:
        ```bash
        $ PARENT_DNS_ZONE="<your_base_domain_com>"
        ```
    1.  Set the variable that points to the infrastructure output file by entering the following command:
        ```bash
        $ INFRA_OUTPUT_FILE="${PREFIX}-infra-output.json"
        ```
1.  Create infrastructure by entering the following command:
    ```terminal
    $ hcp create infra azure \
      --azure-creds "${AZURE_CREDS}" \
      --infra-id "${PREFIX}" \
      --name "${CLUSTER_NAME}" \
      --location "${LOCATION}" \
      --base-domain "${PARENT_DNS_ZONE}" \
      --dns-zone-rg-name "${DNS_ZONE_RG_NAME}" \
      --workload-identities-file "${WORKLOAD_IDENTITIES_FILE}" \
      --assign-identity-roles \
      --output-file "${INFRA_OUTPUT_FILE}"
    ```
1.  Read the infrastructure output to get the resource IDs that you created, as shown in the following example:
    1.  Read the resource group name by entering the following command:
        ```bash
        $ MANAGED_RG_NAME=$(yq -r -p yaml '.resourceGroupName' "${INFRA_OUTPUT_FILE}")
        ```
    1.  Read the VNet ID by entering the following command:
        ```bash
        $ VNET_ID=$(yq -r -p yaml '.vnetID' "${INFRA_OUTPUT_FILE}")
        ```
    1.  Read the subnet ID by entering the following command:
        ```bash
        $ SUBNET_ID=$(yq -r -p yaml '.subnetID' "${INFRA_OUTPUT_FILE}")
        ```
    1.  Read the network security group ID by entering the following command:
        ```bash
        $ NSG_ID=$(yq -r -p yaml '.securityGroupID' "${INFRA_OUTPUT_FILE}")
        ```

        Note the resource IDs because you need them to create the private hosted cluster.