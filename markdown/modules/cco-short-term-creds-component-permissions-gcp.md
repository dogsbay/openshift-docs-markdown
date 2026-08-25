{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ gcp_short }} component secret permissions requirements {id="cco-short-term-creds-component-permissions-gcp_{{ context }}"}

{{ product_title }} components require the following permissions. These values are in the `CredentialsRequest` custom resource (CR) for each component. {._abstract}


:::note

These permissions apply to all resources. Unless specified, there are no request conditions on these permissions.

:::


<table>
<tbody>
<tr>
  <td>Component</td>
  <td>Custom resource</td>
  <td>Required permissions for services</td>
</tr>
<tr>
  <td>Cloud Controller Manager Operator</td>
  <td><code>openshift-gcp-ccm</code></td>
  <td>Compute Engine<br><br><ul><li><code>compute.addresses.create</code></li><li><code>compute.addresses.delete</code></li><li><code>compute.addresses.get</code></li><li><code>compute.addresses.list</code></li><li><code>compute.firewalls.create</code></li><li><code>compute.firewalls.delete</code></li><li><code>compute.firewalls.get</code></li><li><code>compute.firewalls.update</code></li><li><code>compute.forwardingRules.create</code></li><li><code>compute.forwardingRules.delete</code></li><li><code>compute.forwardingRules.get</code></li><li><code>compute.healthChecks.create</code></li><li><code>compute.healthChecks.delete</code></li><li><code>compute.healthChecks.get</code></li><li><code>compute.healthChecks.update</code></li><li><code>compute.httpHealthChecks.create</code></li><li><code>compute.httpHealthChecks.delete</code></li><li><code>compute.httpHealthChecks.get</code></li><li><code>compute.httpHealthChecks.update</code></li><li><code>compute.instanceGroups.create</code></li><li><code>compute.instanceGroups.delete</code></li><li><code>compute.instanceGroups.get</code></li><li><code>compute.instanceGroups.update</code></li><li><code>compute.instances.get</code></li><li><code>compute.instances.use</code></li><li><code>compute.regionBackendServices.create</code></li><li><code>compute.regionBackendServices.delete</code></li><li><code>compute.regionBackendServices.get</code></li><li><code>compute.regionBackendServices.update</code></li><li><code>compute.targetPools.addInstance</code></li><li><code>compute.targetPools.create</code></li><li><code>compute.targetPools.delete</code></li><li><code>compute.targetPools.get</code></li><li><code>compute.targetPools.removeInstance</code></li><li><code>compute.zones.list</code></li></ul></td>
</tr>
<tr>
  <td>Cloud Credential Operator</td>
  <td><code>cloud-credential-operator-gcp-ro-creds</code></td>
  <td>Identity and Access Management (IAM)<br><br><ul><li><code>iam.roles.get</code></li><li><code>iam.serviceAccountKeys.list</code></li><li><code>iam.serviceAccounts.get</code></li></ul>Resource Manager<br><br><ul><li><code>resourcemanager.projects.get</code></li><li><code>resourcemanager.projects.getIamPolicy</code></li></ul>Service Usage<br><br><ul><li><code>serviceusage.services.list</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Image Registry Operator</td>
  <td><code>openshift-image-registry-gcs</code></td>
  <td>Cloud Storage<br><br><ul><li><code>storage.buckets.create</code></li><li><code>storage.buckets.createTagBinding</code></li><li><code>storage.buckets.delete</code></li><li><code>storage.buckets.get</code></li><li><code>storage.buckets.list</code></li><li><code>storage.buckets.listEffectiveTags</code></li><li><code>storage.objects.create</code></li><li><code>storage.objects.delete</code></li><li><code>storage.objects.get</code></li><li><code>storage.objects.list</code></li></ul>Resource Manager<br><br><ul><li><code>resourcemanager.tagValueBindings.create</code></li><li><code>resourcemanager.tagValues.get</code></li><li><code>resourcemanager.tagValues.list</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Ingress Operator</td>
  <td><code>openshift-ingress-gcp</code></td>
  <td>Cloud DNS<br><br><ul><li><code>dns.changes.create</code></li><li><code>dns.resourceRecordSets.create</code></li><li><code>dns.resourceRecordSets.delete</code></li><li><code>dns.resourceRecordSets.list</code></li><li><code>dns.resourceRecordSets.update</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Network Operator</td>
  <td><code>openshift-cloud-network-config-controller-gcp</code></td>
  <td>Compute Engine<br><br><ul><li><code>compute.instances.get</code></li><li><code>compute.instances.updateNetworkInterface</code></li><li><code>compute.subnetworks.get</code></li><li><code>compute.subnetworks.use</code></li><li><code>compute.zoneOperations.get</code></li></ul></td>
</tr>
<tr>
  <td>Cluster Storage Operator</td>
  <td><code>openshift-gcp-pd-csi-driver-operator</code></td>
  <td>Compute Engine<br><br><ul><li><code>compute.instances.attachDisk</code></li><li><code>compute.instances.detachDisk</code></li><li><code>compute.instances.get</code></li></ul>This component also requires the following {{ gcp_short }} predefined roles:<br><br><ul><li><code>roles/compute.storageAdmin</code></li><li><code>roles/iam.serviceAccountUser</code></li><li><code>roles/resourcemanager.tagUser</code></li></ul></td>
</tr>
<tr>
  <td>Machine API Operator</td>
  <td><code>openshift-machine-api-gcp</code></td>
  <td>Compute Engine<br><br><ul><li><code>compute.acceleratorTypes.get</code></li><li><code>compute.acceleratorTypes.list</code></li><li><code>compute.disks.create</code></li><li><code>compute.disks.createTagBinding</code></li><li><code>compute.disks.setLabels</code></li><li><code>compute.globalOperations.get</code></li><li><code>compute.globalOperations.list</code></li><li><code>compute.healthChecks.useReadOnly</code></li><li><code>compute.images.get</code></li><li><code>compute.images.getFromFamily</code></li><li><code>compute.images.useReadOnly</code></li><li><code>compute.instanceGroups.create</code></li><li><code>compute.instanceGroups.delete</code></li><li><code>compute.instanceGroups.get</code></li><li><code>compute.instanceGroups.list</code></li><li><code>compute.instanceGroups.update</code></li><li><code>compute.instances.create</code></li><li><code>compute.instances.createTagBinding</code></li><li><code>compute.instances.delete</code></li><li><code>compute.instances.get</code></li><li><code>compute.instances.list</code></li><li><code>compute.instances.setLabels</code></li><li><code>compute.instances.setMetadata</code></li><li><code>compute.instances.setServiceAccount</code></li><li><code>compute.instances.setTags</code></li><li><code>compute.instances.update</code></li><li><code>compute.instances.use</code></li><li><code>compute.machineTypes.get</code></li><li><code>compute.machineTypes.list</code></li><li><code>compute.projects.get</code></li><li><code>compute.regionBackendServices.create</code></li><li><code>compute.regionBackendServices.get</code></li><li><code>compute.regionBackendServices.update</code></li><li><code>compute.regions.get</code></li><li><code>compute.regions.list</code></li><li><code>compute.subnetworks.use</code></li><li><code>compute.subnetworks.useExternalIp</code></li><li><code>compute.targetPools.addInstance</code></li><li><code>compute.targetPools.delete</code></li><li><code>compute.targetPools.get</code></li><li><code>compute.targetPools.removeInstance</code></li><li><code>compute.zoneOperations.get</code></li><li><code>compute.zoneOperations.list</code></li><li><code>compute.zones.get</code></li><li><code>compute.zones.list</code></li></ul>Identity and Access Management (IAM)<br><br><ul><li><code>iam.serviceAccounts.actAs</code></li><li><code>iam.serviceAccounts.get</code></li><li><code>iam.serviceAccounts.list</code></li></ul>Resource Manager<br><br><ul><li><code>resourcemanager.tagValues.get</code></li><li><code>resourcemanager.tagValues.list</code></li></ul>Service Usage<br><br><ul><li><code>serviceusage.quotas.get</code></li><li><code>serviceusage.services.get</code></li><li><code>serviceusage.services.list</code></li></ul></td>
</tr>
</tbody>
</table>