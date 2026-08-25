{%- set _mod_docs_content_type = "CONCEPT" %}
# Storage for {{ hcp }} on {{ VirtProductName }} {id="hcp-virt-storage_{{ context }}"}

If you do not provide any advanced storage configuration, the default storage class is used for the KubeVirt virtual machine (VM) images, the KubeVirt Container Storage Interface (CSI) mapping, and the etcd volumes. {._abstract}

The following table lists the capabilities that the infrastructure must provide to support persistent storage in a hosted cluster:

***Persistent storage modes in a hosted cluster***

<table>
<thead>
<tr>
  <th>Infrastructure CSI provider</th>
  <th>Hosted cluster CSI provider</th>
  <th>Hosted cluster capabilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Any RWX <code>Block</code> CSI provider</td>
  <td><code>kubevirt-csi</code></td>
  <td>--<ul><li>Basic RWO <code>Block</code> and <code>File</code></li><li>Basic RWX <code>Block</code> and <code>Snapshot</code></li><li>CSI volume cloning</li></ul>--</td>
</tr>
<tr>
  <td>Any RWX <code>Block</code> CSI provider</td>
  <td>{{ rh_storage_first }}</td>
  <td>{{ rh_storage_first }} feature set. External mode has a smaller footprint and uses a standalone Red&#160;Hat Ceph Storage. Internal mode has a larger footprint, but is self-contained and suitable for use cases that require expanded capabilities such as RWX <code>File</code>.</td>
</tr>
</tbody>
</table>


:::note

{{ VirtProductName }} handles storage on hosted clusters, which especially helps customers whose requirements are limited to block storage.

:::