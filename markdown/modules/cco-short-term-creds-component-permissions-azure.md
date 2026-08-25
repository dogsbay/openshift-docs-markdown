{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ azure_short }} component secret permissions requirements {id="cco-short-term-creds-component-permissions-azure_{{ context }}"}

You should familiarize yourself with the permissions required by the {{ product_title }} components. These values are in the `CredentialsRequest` custom resource (CR) for each component. {._abstract}

<table>
<tbody>
<tr>
  <td>Component</td>
  <td>Custom resource</td>
  <td>Required permissions for services</td>
</tr>
<tr>
  <td>Cloud Controller Manager Operator</td>
  <td><code>openshift-azure-cloud-controller-manager</code></td>
  <td><ul><li><code>Microsoft.Compute/virtualMachines/read</code></li><li><code>Microsoft.Network/loadBalancers/read</code></li><li><code>Microsoft.Network/loadBalancers/write</code></li><li><code>Microsoft.Network/networkInterfaces/read</code></li><li><code>Microsoft.Network/networkSecurityGroups/read</code></li><li><code>Microsoft.Network/networkSecurityGroups/write</code></li><li><code>Microsoft.Network/publicIPAddresses/join/action</code></li><li><code>Microsoft.Network/publicIPAddresses/read</code></li><li><code>Microsoft.Network/publicIPAddresses/write</code></li></ul></td>
</tr>
<tr>
  <td>{{ cluster_capi_operator }}</td>
  <td><code>openshift-cluster-api-azure</code></td>
  <td>role: <code>Contributor</code> <sup>[1]</sup></td>
</tr>
<tr>
  <td>Machine API Operator</td>
  <td><code>openshift-machine-api-azure</code></td>
  <td><ul><li><code>Microsoft.Compute/availabilitySets/delete</code></li><li><code>Microsoft.Compute/availabilitySets/read</code></li><li><code>Microsoft.Compute/availabilitySets/write</code></li><li><code>Microsoft.Compute/diskEncryptionSets/read</code></li><li><code>Microsoft.Compute/disks/delete</code></li><li><code>Microsoft.Compute/galleries/images/versions/read</code></li><li><code>Microsoft.Compute/skus/read</code></li><li><code>Microsoft.Compute/virtualMachines/delete</code></li><li><code>Microsoft.Compute/virtualMachines/extensions/delete</code></li><li><code>Microsoft.Compute/virtualMachines/extensions/read</code></li><li><code>Microsoft.Compute/virtualMachines/extensions/write</code></li><li><code>Microsoft.Compute/virtualMachines/read</code></li><li><code>Microsoft.Compute/virtualMachines/write</code></li><li><code>Microsoft.ManagedIdentity/userAssignedIdentities/assign/action</code></li><li><code>Microsoft.Network/applicationSecurityGroups/read</code></li><li><code>Microsoft.Network/loadBalancers/backendAddressPools/join/action</code></li><li><code>Microsoft.Network/loadBalancers/read</code></li><li><code>Microsoft.Network/loadBalancers/write</code></li><li><code>Microsoft.Network/networkInterfaces/delete</code></li><li><code>Microsoft.Network/networkInterfaces/join/action</code></li><li><code>Microsoft.Network/networkInterfaces/loadBalancers/read</code></li><li><code>Microsoft.Network/networkInterfaces/read</code></li><li><code>Microsoft.Network/networkInterfaces/write</code></li><li><code>Microsoft.Network/networkSecurityGroups/read</code></li><li><code>Microsoft.Network/networkSecurityGroups/write</code></li><li><code>Microsoft.Network/publicIPAddresses/delete</code></li><li><code>Microsoft.Network/publicIPAddresses/join/action</code></li><li><code>Microsoft.Network/publicIPAddresses/read</code></li><li><code>Microsoft.Network/publicIPAddresses/write</code></li><li><code>Microsoft.Network/routeTables/read</code></li><li><code>Microsoft.Network/virtualNetworks/delete</code></li><li><code>Microsoft.Network/virtualNetworks/read</code></li><li><code>Microsoft.Network/virtualNetworks/subnets/join/action</code></li><li><code>Microsoft.Network/virtualNetworks/subnets/read</code></li><li><code>Microsoft.Resources/subscriptions/resourceGroups/read</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Image Registry Operator</td>
  <td><code>openshift-image-registry-azure</code></td>
  <td><strong>Data permissions</strong><br><br><ul><li><code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/delete</code></li><li><code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write</code></li><li><code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read</code></li><li><code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/add/action</code></li><li><code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/move/action</code></li></ul><strong>General permissions</strong><br><br><ul><li><code>Microsoft.Storage/storageAccounts/blobServices/read</code></li><li><code>Microsoft.Storage/storageAccounts/blobServices/containers/read</code></li><li><code>Microsoft.Storage/storageAccounts/blobServices/containers/write</code></li><li><code>Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action</code></li><li><code>Microsoft.Storage/storageAccounts/read</code></li><li><code>Microsoft.Storage/storageAccounts/write</code></li><li><code>Microsoft.Storage/storageAccounts/delete</code></li><li><code>Microsoft.Storage/storageAccounts/listKeys/action</code></li><li><code>Microsoft.Resources/tags/write</code></li></ul></td>
</tr>
<tr>
  <td>Ingress Operator</td>
  <td><code>openshift-ingress-azure</code></td>
  <td><ul><li><code>Microsoft.Network/dnsZones/A/delete</code></li><li><code>Microsoft.Network/dnsZones/A/write</code></li><li><code>Microsoft.Network/privateDnsZones/A/delete</code></li><li><code>Microsoft.Network/privateDnsZones/A/write</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Network Operator</td>
  <td><code>openshift-cloud-network-config-controller-azure</code></td>
  <td><ul><li><code>Microsoft.Network/networkInterfaces/read</code></li><li><code>Microsoft.Network/networkInterfaces/write</code></li><li><code>Microsoft.Compute/virtualMachines/read</code></li><li><code>Microsoft.Network/virtualNetworks/read</code></li><li><code>Microsoft.Network/virtualNetworks/subnets/join/action</code></li><li><code>Microsoft.Network/loadBalancers/backendAddressPools/join/action</code></li></ul></td>
</tr>
<tr>
  <td>Azure File CSI Driver Operator</td>
  <td><code>azure-file-csi-driver-operator</code></td>
  <td><ul><li><code>Microsoft.Network/networkSecurityGroups/join/action</code></li><li><code>Microsoft.Network/virtualNetworks/subnets/read</code></li><li><code>Microsoft.Network/virtualNetworks/subnets/write</code></li><li><code>Microsoft.Storage/storageAccounts/delete</code></li><li><code>Microsoft.Storage/storageAccounts/fileServices/read</code></li><li><code>Microsoft.Storage/storageAccounts/fileServices/shares/delete</code></li><li><code>Microsoft.Storage/storageAccounts/fileServices/shares/read</code></li><li><code>Microsoft.Storage/storageAccounts/fileServices/shares/write</code></li><li><code>Microsoft.Storage/storageAccounts/listKeys/action</code></li><li><code>Microsoft.Storage/storageAccounts/read</code></li><li><code>Microsoft.Storage/storageAccounts/write</code></li></ul></td>
</tr>
<tr>
  <td>Azure Disk CSI Driver Operator</td>
  <td><code>azure-disk-csi-driver-operator</code></td>
  <td><ul><li><code>Microsoft.Compute/disks/*</code></li><li><code>Microsoft.Compute/snapshots/*</code></li><li><code>Microsoft.Compute/virtualMachineScaleSets/*/read</code></li><li><code>Microsoft.Compute/virtualMachineScaleSets/read</code></li><li><code>Microsoft.Compute/virtualMachineScaleSets/virtualMachines/write</code></li><li><code>Microsoft.Compute/virtualMachines/*/read</code></li><li><code>Microsoft.Compute/virtualMachines/write</code></li><li><code>Microsoft.Resources/subscriptions/resourceGroups/read</code></li></ul></td>
</tr>
</tbody>
</table>

1.  This component requires a role rather than a set of permissions.