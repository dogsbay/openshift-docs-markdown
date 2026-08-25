{%- set _mod_docs_content_type = "REFERENCE" %}
# Metrics for the {{ operator_name }} {id="vsphere-problem-detector-operator-metrics_{{ context }}"}

The {{ operator_name }} exposes the following metrics for use by the {{ product_title }} monitoring stack. {._abstract}

***Metrics exposed by the {{ operator_name }}***

<table>
<thead>
<tr>
  <th>Name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>vsphere_cluster_check_total</code></td>
  <td>Cumulative number of cluster-level checks that the {{ operator_name }} performed. This count includes both successes and failures.</td>
</tr>
<tr>
  <td><code>vsphere_cluster_check_errors</code></td>
  <td>Number of failed cluster-level checks that the {{ operator_name }} performed. For example, a value of <code>1</code> indicates that one cluster-level check failed.</td>
</tr>
<tr>
  <td><code>vsphere_esxi_version_total</code></td>
  <td>Counts the number of ESXi hosts with a specific version. Note that if a host runs more than one node, the {{ operator_name }} counts the host only once.</td>
</tr>
<tr>
  <td><code>vsphere_node_check_total</code></td>
  <td>Cumulative number of node-level checks that the {{ operator_name }} performed. This count includes both successes and failures.</td>
</tr>
<tr>
  <td><code>vsphere_node_check_errors</code></td>
  <td>Counts the number of failed node-level checks that the {{ operator_name }} performed. For example, a value of <code>1</code> indicates that one node-level check failed.</td>
</tr>
<tr>
  <td><code>vsphere_node_hw_version_total</code></td>
  <td>Number of {{ vmw_short }} nodes with a specific hardware version.</td>
</tr>
<tr>
  <td><code>vsphere_vcenter_info</code></td>
  <td>Information about the {{ vmw_short }} vCenter Server.</td>
</tr>
</tbody>
</table>