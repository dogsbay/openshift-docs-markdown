{%- set _mod_docs_content_type = "REFERENCE" %}
# Required Azure permissions for user-provisioned infrastructure {id="minimum-required-permissions-upi-azure_{{ context }}"}

The installation program requires access to an Azure service principal or managed identity with the necessary permissions to deploy the cluster and to maintain its daily operation. These permissions must be granted to the Azure subscription that is associated with the identity. {._abstract}

The following options are available to you:

*   You can assign the identity the `Contributor` and `User Access Administrator` roles. Assigning these roles is the quickest way to grant all of the required permissions.

    For more information about assigning roles, see the Azure documentation for [managing access to Azure resources using the Azure portal](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal).
*   If your organization’s security policies require a more restrictive set of permissions, you can create a [custom role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) with the necessary permissions.

The following permissions are required for creating an {{ product_title }} cluster on Microsoft Azure.

<details>
<summary>Required permissions for creating authorization resources</summary>

*   `Microsoft.Authorization/policies/audit/action`
*   `Microsoft.Authorization/policies/auditIfNotExists/action`
*   `Microsoft.Authorization/roleAssignments/read`
*   `Microsoft.Authorization/roleAssignments/write`
</details>

<details>
<summary>Required permissions for creating compute resources</summary>

*   `Microsoft.Compute/images/read`
*   `Microsoft.Compute/images/write`
*   `Microsoft.Compute/images/delete`
*   `Microsoft.Compute/availabilitySets/read`
*   `Microsoft.Compute/disks/beginGetAccess/action`
*   `Microsoft.Compute/disks/delete`
*   `Microsoft.Compute/disks/read`
*   `Microsoft.Compute/disks/write`
*   `Microsoft.Compute/galleries/images/read`
*   `Microsoft.Compute/galleries/images/versions/read`
*   `Microsoft.Compute/galleries/images/versions/write`
*   `Microsoft.Compute/galleries/images/write`
*   `Microsoft.Compute/galleries/read`
*   `Microsoft.Compute/galleries/write`
*   `Microsoft.Compute/snapshots/read`
*   `Microsoft.Compute/snapshots/write`
*   `Microsoft.Compute/snapshots/delete`
*   `Microsoft.Compute/virtualMachines/delete`
*   `Microsoft.Compute/virtualMachines/powerOff/action`
*   `Microsoft.Compute/virtualMachines/read`
*   `Microsoft.Compute/virtualMachines/write`
*   `Microsoft.Compute/virtualMachines/deallocate/action`
</details>

<details>
<summary>Required permissions for creating identity management resources</summary>

*   `Microsoft.ManagedIdentity/userAssignedIdentities/assign/action`
*   `Microsoft.ManagedIdentity/userAssignedIdentities/read`
*   `Microsoft.ManagedIdentity/userAssignedIdentities/write`
</details>

<details>
<summary>Required permissions for creating network resources</summary>

*   `Microsoft.Network/dnsZones/A/write`
*   `Microsoft.Network/dnsZones/CNAME/write`
*   `Microsoft.Network/dnszones/CNAME/read`
*   `Microsoft.Network/dnszones/read`
*   `Microsoft.Network/loadBalancers/backendAddressPools/join/action`
*   `Microsoft.Network/loadBalancers/backendAddressPools/read`
*   `Microsoft.Network/loadBalancers/backendAddressPools/write`
*   `Microsoft.Network/loadBalancers/read`
*   `Microsoft.Network/loadBalancers/write`
*   `Microsoft.Network/networkInterfaces/delete`
*   `Microsoft.Network/networkInterfaces/join/action`
*   `Microsoft.Network/networkInterfaces/read`
*   `Microsoft.Network/networkInterfaces/write`
*   `Microsoft.Network/networkSecurityGroups/join/action`
*   `Microsoft.Network/networkSecurityGroups/read`
*   `Microsoft.Network/networkSecurityGroups/securityRules/delete`
*   `Microsoft.Network/networkSecurityGroups/securityRules/read`
*   `Microsoft.Network/networkSecurityGroups/securityRules/write`
*   `Microsoft.Network/networkSecurityGroups/write`
*   `Microsoft.Network/privateDnsZones/A/read`
*   `Microsoft.Network/privateDnsZones/A/write`
*   `Microsoft.Network/privateDnsZones/A/delete`
*   `Microsoft.Network/privateDnsZones/SOA/read`
*   `Microsoft.Network/privateDnsZones/read`
*   `Microsoft.Network/privateDnsZones/virtualNetworkLinks/read`
*   `Microsoft.Network/privateDnsZones/virtualNetworkLinks/write`
*   `Microsoft.Network/privateDnsZones/write`
*   `Microsoft.Network/publicIPAddresses/delete`
*   `Microsoft.Network/publicIPAddresses/join/action`
*   `Microsoft.Network/publicIPAddresses/read`
*   `Microsoft.Network/publicIPAddresses/write`
*   `Microsoft.Network/virtualNetworks/join/action`
*   `Microsoft.Network/virtualNetworks/read`
*   `Microsoft.Network/virtualNetworks/subnets/join/action`
*   `Microsoft.Network/virtualNetworks/subnets/read`
*   `Microsoft.Network/virtualNetworks/subnets/write`
*   `Microsoft.Network/virtualNetworks/write`
</details>

<details>
<summary>Required permissions for checking the health of resources</summary>

*   `Microsoft.Resourcehealth/healthevent/Activated/action`
*   `Microsoft.Resourcehealth/healthevent/InProgress/action`
*   `Microsoft.Resourcehealth/healthevent/Pending/action`
*   `Microsoft.Resourcehealth/healthevent/Resolved/action`
*   `Microsoft.Resourcehealth/healthevent/Updated/action`
</details>

<details>
<summary>Required permissions for creating a resource group</summary>

*   `Microsoft.Resources/subscriptions/resourceGroups/read`
*   `Microsoft.Resources/subscriptions/resourcegroups/write`
</details>

<details>
<summary>Required permissions for creating resource tags</summary>

*   `Microsoft.Resources/tags/write`
</details>

<details>
<summary>Required permissions for creating storage resources</summary>

*   `Microsoft.Storage/storageAccounts/blobServices/read`
*   `Microsoft.Storage/storageAccounts/blobServices/containers/write`
*   `Microsoft.Storage/storageAccounts/fileServices/read`
*   `Microsoft.Storage/storageAccounts/fileServices/shares/read`
*   `Microsoft.Storage/storageAccounts/fileServices/shares/write`
*   `Microsoft.Storage/storageAccounts/fileServices/shares/delete`
*   `Microsoft.Storage/storageAccounts/listKeys/action`
*   `Microsoft.Storage/storageAccounts/read`
*   `Microsoft.Storage/storageAccounts/write`
</details>

<details>
<summary>Required permissions for creating deployments</summary>

*   `Microsoft.Resources/deployments/read`
*   `Microsoft.Resources/deployments/write`
*   `Microsoft.Resources/deployments/validate/action`
*   `Microsoft.Resources/deployments/operationstatuses/read`
</details>

<details>
<summary>Optional permissions for creating compute resources</summary>

*   `Microsoft.Compute/availabilitySets/delete`
*   `Microsoft.Compute/availabilitySets/write`
</details>

<details>
<summary>Optional permissions for creating marketplace virtual machine resources</summary>

*   `Microsoft.MarketplaceOrdering/offertypes/publishers/offers/plans/agreements/read`
*   `Microsoft.MarketplaceOrdering/offertypes/publishers/offers/plans/agreements/write`
</details>

<details>
<summary>Optional permissions for enabling user-managed encryption</summary>

*   `Microsoft.Compute/diskEncryptionSets/read`
*   `Microsoft.Compute/diskEncryptionSets/write`
*   `Microsoft.Compute/diskEncryptionSets/delete`
*   `Microsoft.KeyVault/vaults/read`
*   `Microsoft.KeyVault/vaults/write`
*   `Microsoft.KeyVault/vaults/delete`
*   `Microsoft.KeyVault/vaults/deploy/action`
*   `Microsoft.KeyVault/vaults/keys/read`
*   `Microsoft.KeyVault/vaults/keys/write`
*   `Microsoft.Features/providers/features/register/action`
</details>

The following permissions are required for deleting an {{ product_title }} cluster on Microsoft Azure.

<details>
<summary>Required permissions for deleting authorization resources</summary>

*   `Microsoft.Authorization/roleAssignments/delete`
</details>

<details>
<summary>Required permissions for deleting compute resources</summary>

*   `Microsoft.Compute/disks/delete`
*   `Microsoft.Compute/galleries/delete`
*   `Microsoft.Compute/galleries/images/delete`
*   `Microsoft.Compute/galleries/images/versions/delete`
*   `Microsoft.Compute/virtualMachines/delete`
*   `Microsoft.Compute/images/delete`
</details>

<details>
<summary>Required permissions for deleting identity management resources</summary>

*   `Microsoft.ManagedIdentity/userAssignedIdentities/delete`
</details>

<details>
<summary>Required permissions for deleting network resources</summary>

*   `Microsoft.Network/dnszones/read`
*   `Microsoft.Network/dnsZones/A/read`
*   `Microsoft.Network/dnsZones/A/delete`
*   `Microsoft.Network/dnsZones/CNAME/read`
*   `Microsoft.Network/dnsZones/CNAME/delete`
*   `Microsoft.Network/loadBalancers/delete`
*   `Microsoft.Network/networkInterfaces/delete`
*   `Microsoft.Network/networkSecurityGroups/delete`
*   `Microsoft.Network/privateDnsZones/read`
*   `Microsoft.Network/privateDnsZones/A/read`
*   `Microsoft.Network/privateDnsZones/delete`
*   `Microsoft.Network/privateDnsZones/virtualNetworkLinks/delete`
*   `Microsoft.Network/publicIPAddresses/delete`
*   `Microsoft.Network/virtualNetworks/delete`
</details>

<details>
<summary>Required permissions for checking the health of resources</summary>

*   `Microsoft.Resourcehealth/healthevent/Activated/action`
*   `Microsoft.Resourcehealth/healthevent/Resolved/action`
*   `Microsoft.Resourcehealth/healthevent/Updated/action`
</details>

<details>
<summary>Required permissions for deleting a resource group</summary>

*   `Microsoft.Resources/subscriptions/resourcegroups/delete`
</details>

<details>
<summary>Required permissions for deleting storage resources</summary>

*   `Microsoft.Storage/storageAccounts/delete`
*   `Microsoft.Storage/storageAccounts/listKeys/action`
</details>


:::note

To install {{ product_title }} on Azure, you must scope the permissions related to resource group creation to your subscription. After the resource group is created, you can scope the rest of the permissions to the created resource group. If the public DNS zone is present in a different resource group, then the network DNS zone related permissions must always be applied to your subscription.

You can scope all the permissions to your subscription when deleting an {{ product_title }} cluster.

:::