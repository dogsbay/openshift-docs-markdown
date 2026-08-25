{%- set _mod_docs_content_type = "CONCEPT" %}
# OADP plugins {id="oadp-plugins_{{ context }}"}

Review the default Velero plugins provided by {{ oadp_first }} that integrate with storage providers to support backup and snapshot operations. This helps you to select and configure the right plugins for your cloud environment. {._abstract}

{{ oadp_short }} also provides plugins for {{ product_title }} resource backups, OpenShift Virtualization resource backups, and Container Storage Interface (CSI) snapshots.

**OADP plugins**

<table>
<thead>
<tr>
  <th>OADP plugin</th>
  <th>Function</th>
  <th>Storage location</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="2"><code>aws</code></td>
  <td>Backs up and restores Kubernetes objects.</td>
  <td>AWS S3</td>
</tr>
<tr>
  <td>Backs up and restores volumes with snapshots.</td>
  <td>AWS EBS</td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td rowspan="2"><code>azure</code></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Backs up and restores Kubernetes objects.</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Microsoft Azure Blob storage</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Backs up and restores volumes with snapshots.</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Microsoft Azure Managed Disks</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td rowspan="2"><code>gcp</code></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Backs up and restores Kubernetes objects.</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>{{ gcp_full }} Storage</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Backs up and restores volumes with snapshots.</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Google Compute Engine Disks</td>{% endif %}
</tr>
<tr>
  <td><code>openshift</code></td>
  <td>Backs up and restores {{ product_title }} resources. <sup>[1]</sup></td>
  <td>Object store</td>
</tr>
<tr>
  <td><code>kubevirt</code></td>
  <td>Backs up and restores OpenShift Virtualization resources. <sup>[2]</sup></td>
  <td>Object store</td>
</tr>
<tr>
  <td><code>csi</code></td>
  <td>Backs up and restores volumes with CSI snapshots. <sup>[3]</sup></td>
  <td>Cloud storage that supports CSI snapshots</td>
</tr>
<tr>
  <td><code>hypershift</code></td>
  <td>Backs up and restores HyperShift hosted cluster resources. <sup>[4]</sup></td>
  <td>Object store</td>
</tr>
</tbody>
</table>

1.  Mandatory.
1.  Virtual machine disks are backed up with CSI snapshots or Restic.
1.  The `csi` plugin uses the Kubernetes CSI snapshot API.
    *   OADP 1.1 or later uses `snapshot.storage.k8s.io/v1`
    *   OADP 1.0 uses `snapshot.storage.k8s.io/v1beta1`
1.  Do not add the `hypershift` plugin in the `DataProtectionApplication` custom resource if the cluster is not a HyperShift hosted cluster. 

**Additional resources**
{._additional-resources}

*   [Custom plugins](https://{{ velero_domain }}/docs/v{{ velero_version }}/custom-plugins/)