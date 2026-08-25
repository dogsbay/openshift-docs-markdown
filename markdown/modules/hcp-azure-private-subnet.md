{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing a subnet for a private hosted cluster on {{ azure_short }} {id="hcp-azure-private-subnet_{{ context }}"}

{{ azure_short }} Private Link requires a dedicated subnet for network address translator (NAT) IP address allocation. You can manually create the subnet, or it can be automatically created during cluster creation.  {._abstract}

By manually creating the subnet, you have control over classless inter-domain routing (CIDR) allocation and naming. The following steps apply to manually creating the subnet. If you want the subnet to be automatically created, skip this procedure.


:::note

{{ azure_short }} Private Link, the NAT subnet, and the internal load balancer of the management cluster must all be in the same {{ azure_short }} region. Private Link is automatically created in the location where the hosted cluster is created. {{ azure_short }} rejects the creation of Private Link if the NAT subnet is in a different region.

:::


**Prerequisites**

*   You have an {{ product_title }} management cluster on {{ azure_short }}. For more information, see "Configuring an {{ azure_short }} management cluster for {{ hcp }}".
*   The {{ azure_short }} command-line interface (CLI) is installed and configured.
*   The {{ oc_first }} is installed.
*   If you are using external DNS, the `jq` command-line JSON processor is installed.
*   You configured an OIDC issuer. For more information, see "Setting up an OIDC issuer".

**Procedure**

1.  Identify the {{ azure_short }} Virtual Network (VNet) of the management cluster.
    1.  Obtain the infrastructure resource group of the management cluster as shown in the following example:
        ```bash
        $ MGMT_INFRA_RG=$(oc get infrastructure cluster -o jsonpath='{.status.platformStatus.azure.resourceGroupName}')
        ```
    1.  Find the VNet in the infrastructure resource group as shown in the following example:
        ```bash
        $ MGMT_VNET_NAME=$(az network vnet list --resource-group "${MGMT_INFRA_RG}" --query "[0].name" -o tsv)
        ```
    1.  Set the environment variable for the VNet by entering the following command:
        ```bash
        $ MGMT_VNET_RG="${MGMT_INFRA_RG}"
        ```
1.  Create the NAT subnet.
    1.  Check the existing address space and subnets to ensure that you do not choose an overlapping classless inter-domain routing (CIDR) range. Enter the following command:
        ```terminal
        $ az network vnet show \
          --resource-group "${MGMT_VNET_RG}" \
          --name "${MGMT_VNET_NAME}" \
          --query '{addressSpace: addressSpace.addressPrefixes, subnets: subnets[].{name: name, prefix: addressPrefix}}' \
          -o json
        ```
    1.  Create the subnet as shown in the following example:
        ```terminal
        $ az network vnet subnet create \
          --resource-group "${MGMT_VNET_RG}" \
          --vnet-name "${MGMT_VNET_NAME}" \
          --name "${NAT_SUBNET_NAME}" \
          --address-prefixes 10.1.64.0/24 \
          --disable-private-link-service-network-policies true
        ```
        *   The NAT subnet must be in the VNet of the management cluster because Private Link is created alongside the internal load balancer of the management cluster.
        *   The `10.1.64.0/24` address prefix is an example only. Replace it with a CIDR range that does not overlap with any other subnet in the VNet of the management cluster. If the VNet uses `10.0.0.0/16`, the NAT subnet must fall within that range, or you must expand the address space of the VNet.
        *   The `--disable-private-link-service-network-policies` flag is required and must be set to `true`. Otherwise, {{ azure_short }} rejects the creation of Private Link on the subnet.
1.  Obtain the NAT subnet resource ID for later use as shown in the following example:
    ```bash
    $ NAT_SUBNET_ID=$(az network vnet subnet show \
      --resource-group "${MGMT_VNET_RG}" \
      --vnet-name "${MGMT_VNET_NAME}" \
      --name "${NAT_SUBNET_NAME}" \
      --query id -o tsv)
    ```