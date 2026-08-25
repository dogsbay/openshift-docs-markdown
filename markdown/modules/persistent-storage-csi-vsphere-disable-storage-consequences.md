{%- set _mod_docs_content_type = "CONCEPT" %}
# Consequences of disabling and enabling storage on vSphere {id="persistent-storage-csi-vsphere-disable-storage-consequences_{{ context }}"}

Before disabling or re-enabling vSphere storage, understand the impact on persistent volumes, pods, storage classes, and the Container Storage Interface (CSI) driver components. {._abstract}

The consequences of disabling and enabling storage on vSphere are described in the following table.

***Consequences of disabling/enabling storage on vSphere***

<table>
<thead>
<tr>
  <th>Disabling</th>
  <th>Enabling</th>
</tr>
</thead>
<tbody>
<tr>
  <td><ul><li>vSphere CSI Driver Operator un-installs the CSI driver.</li><li>Storage container orchestration (CO) should be healthy.</li><li>vSphere-problem-detector continues running, but does not emit alerts or events, and checks less frequently (once per 24 hours).</li><li>All existing persistent volumes (PVs), persistent volume claims (PVCs), and vSphere storage policies are unchanged:<ul><li>vSphere PVs cannot be used in new pods.</li><li>vSphere PVs stay mounted and attached forever to existing nodes for existing pods. These pods remain in terminating state indefinitely after deletion.</li></ul></li><li>Storage classes are removed</li></ul></td>
  <td>* vSphere CSI Driver Operator re-installs the CSI driver.</td>
</tr>
</tbody>
</table>