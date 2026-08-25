{%- set _mod_docs_content_type = "REFERENCE" %}
# Storage fields {id="virt-storage-wizard-fields-web_{{ context }}"}

To optimize storage performance and ensure data availability for your workloads, configure the storage fields to define the source, size, and disk characteristics of your virtual machine (VM). {._abstract}

<table>
<tbody>
<tr>
  <td>Field</td>
  <td>Description</td>
</tr>
<tr>
  <td>Blank (creates PVC)</td>
  <td>Create an empty disk.</td>
</tr>
<tr>
  <td>Import via URL (creates PVC)</td>
  <td>Import content via URL (HTTP or HTTPS endpoint).</td>
</tr>
<tr>
  <td>Use an existing PVC</td>
  <td>Use a PVC that is already available in the cluster.</td>
</tr>
<tr>
  <td>Clone existing PVC (creates PVC)</td>
  <td>Select an existing PVC available in the cluster and clone it.</td>
</tr>
<tr>
  <td>Import via Registry (creates PVC)</td>
  <td>Import content via container registry.</td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Container (ephemeral)</td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Upload content from a container located in a registry accessible from the cluster. The container disk should be used only for read-only filesystems such as CD-ROMs or temporary virtual machines.</td>{% endif %}
</tr>
<tr>
  <td>Name</td>
  <td>Name of the disk. The name can contain lowercase letters (<code>a-z</code>), numbers (<code>0-9</code>), hyphens (<code>-</code>), and periods (<code>.</code>), up to a maximum of 253 characters. The first and last characters must be alphanumeric. The name must not contain uppercase letters, spaces, or special characters.</td>
</tr>
<tr>
  <td>Size</td>
  <td>Size of the disk in GiB.</td>
</tr>
<tr>
  <td>Type</td>
  <td>Type of disk. Example: Disk or CD-ROM</td>
</tr>
<tr>
  <td>Interface</td>
  <td>Type of disk device. Supported interfaces are <strong>virtIO</strong>, <strong>SATA</strong>, and <strong>SCSI</strong>.</td>
</tr>
<tr>
  <td>Storage Class</td>
  <td>The storage class that is used to create the disk.</td>
</tr>
</tbody>
</table>

## Advanced storage settings {id="virt-storage-wizard-fields-advanced-web_{{ context }}"}

The following advanced storage settings are optional and available for **Blank**, **Import via URL**, and **Clone existing PVC** disks.

If you do not specify these parameters, the system uses the default storage profile values.

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Option</th>
  <th>Parameter description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.2+</td>
  <td>Volume Mode</td>
  <td>Filesystem</td>
</tr>
<tr>
  <td>Stores the virtual disk on a file system-based volume.</td>
  <td>Block</td>
  <td>Stores the virtual disk directly on the block volume. Only use <code>Block</code> if the underlying storage supports it.<br><br>.3+</td>
</tr>
<tr>
  {% if not openshift_dedicated %}<td>Access Mode</td>{% endif %}
  {% if not openshift_dedicated %}<td>ReadWriteOnce (RWO)</td>{% endif %}
  {% if not openshift_dedicated %}<td>Volume can be mounted as read/write by a single node.</td>{% endif %}
</tr>
<tr>
  {% if not openshift_dedicated %}<td>ReadWriteMany (RWX)</td>{% endif %}
  {% if not openshift_dedicated %}<td>Volume can be mounted as read/write by many nodes at one time.<dl><dt>Note</dt><dd>This mode is required for live migration.</dd></dl></td>{% endif %}
  {% if not openshift_dedicated %}<td>ReadOnlyMany (ROX)</td>{% endif %}
</tr>
<tr>
  {% if not openshift_dedicated %}<td>Volume can be mounted as read only by many nodes.<br><br><dl><dt>Note</dt><dd><code>ReadWriteMany</code> access mode is required for live migration.</dd></dl>.2+</td>{% endif %}
  {% if openshift_dedicated %}<td>Access Mode</td>{% endif %}
  {% if openshift_dedicated %}<td>ReadWriteOnce (RWO)</td>{% endif %}
  {% if openshift_dedicated %}<td>Volume can be mounted as read-write by a single node.</td>{% endif %}
</tr>
<tr>
  {% if openshift_dedicated %}<td>ReadOnlyMany (ROX)</td>{% endif %}
  {% if openshift_dedicated %}<td>Volume can be mounted as read only by many nodes.</td>{% endif %}
</tr>
</tbody>
</table>