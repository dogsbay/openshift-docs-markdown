{%- set _mod_docs_content_type = "REFERENCE" %}
# Data to collect before you contact support {id="virt-data-to-collect-for-support_{{ context }}"}

Collect this data before you open a support case. A complete set gathered at the outset minimizes the time that Red&#160;Hat Support needs to analyze the issue and determine its root cause. {._abstract}

Collect data at two levels: the cluster environment and the virtual machines (VMs) that the issue affects.

**Environment data**

<table>
<thead>
<tr>
  <th>Data</th>
  <th>Details</th>
</tr>
</thead>
<tbody>
<tr>
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td><code>must-gather</code> data for the cluster</td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td>Collect for the cluster as a whole.</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td><code>must-gather</code> data for {{ rh_storage_first }}</td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td>Collect only if the issue involves storage.</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td><code>must-gather</code> data for {{ VirtProductName }}</td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td>Collect in addition to the cluster data.</td>{% endif %}
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>Prometheus metrics for the cluster</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>Requires a metrics retention time of at least seven days.</td>{% endif %}
</tr>
<tr>
  <td>Number of affected nodes and VMs</td>
  <td>Record the exact count, not an estimate.</td>
</tr>
</tbody>
</table>

**Virtual machine data**

<table>
<thead>
<tr>
  <th>Data</th>
  <th>Details</th>
</tr>
</thead>
<tbody>
<tr>
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td><code>must-gather</code> data for the VMs</td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}<td>Collect by using the <code>/usr/bin/gather</code> script.</td>{% endif %}
</tr>
<tr>
  <td>Screenshots of crashed VMs</td>
  <td>Capture before you restart the VM.</td>
</tr>
<tr>
  <td>VM memory dumps</td>
  <td>Capture before you try any remediation.</td>
</tr>
<tr>
  <td>Factors common to the affected VMs</td>
  <td>For example, the VMs share a host or a network.</td>
</tr>
<tr>
  <td>Windows patch update details</td>
  <td>Record for Windows VMs only.</td>
</tr>
</tbody>
</table>


:::important

Restarting a VM or attempting remediation discards the state that Red&#160;Hat Support needs. Capture screenshots and memory dumps first.

:::


Put the following configuration in place before an issue occurs. You cannot reconstruct this data afterward.

**Required configuration**

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Required configuration</th>
</tr>
</thead>
<tbody>
<tr>
  {% if not openshift_rosa_hcp %}<td>Prometheus</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>Retain metrics data for at least seven days.</td>{% endif %}
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>Alertmanager</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>Capture relevant alerts and send notifications to a dedicated mailbox, so that they persist outside the cluster.</td>{% endif %}
</tr>
<tr>
  <td>Linux VMs</td>
  <td>Run the latest QEMU guest agent.</td>
</tr>
<tr>
  <td>Windows VMs</td>
  <td>Run the latest VirtIO drivers and the latest QEMU guest agent.</td>
</tr>
<tr>
  <td>Windows VMs with Remote Desktop Protocol (RDP) enabled</td>
  <td>Connect by using the desktop viewer to establish whether the connection software is the source of the problem.</td>
</tr>
</tbody>
</table>