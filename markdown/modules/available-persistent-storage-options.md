{%- set _mod_docs_content_type = "REFERENCE" %}
# Available persistent storage options {id="available-persistent-storage-options_{{ context }}"}

To optimize your {{ product_title }} environment, review the available persistent storage options. By understanding these choices, you can select the appropriate storage configuration to meet your specific workload requirements. {._abstract}

**Available storage options**

<table>
<thead>
<tr>
  <th>Storage type</th>
  <th>Description</th>
  <th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Block</td>
  <td><ul><li>Presented to the operating system (OS) as a block device</li><li>Suitable for applications that need full control of storage and operate at a low level on files bypassing the file system.</li><li>Also referred to as a Storage Area Network (SAN).</li><li>Non-shareable, which means that only one client at a time can mount an endpoint of this type.</li></ul></td>
  <td>AWS EBS and VMware vSphere support dynamic persistent volume (PV) provisioning natively in {{ product_title }}.</td>
</tr>
<tr>
  <td>File</td>
  <td><ul><li>Presented to the OS as a file system export to be mounted</li><li>Also referred to as Network Attached Storage (NAS).</li><li>Concurrency, latency, file locking mechanisms, and other capabilities vary widely between protocols, implementations, vendors, and scales.</li></ul></td>
  <td>RHEL NFS, NetApp NFS, and Vendor NFS.</td>
</tr>
<tr>
  <td>Object</td>
  <td><ul><li>Accessible through a REST API endpoint.</li><li>Configurable for use in the {{ product_registry }}</li><li>Applications must build their drivers into the application and/or container.</li></ul></td>
  <td>AWS S3.</td>
</tr>
</tbody>
</table>

*   `File`: NetApp NFS supports dynamic PV provisioning when using the Trident plugin.