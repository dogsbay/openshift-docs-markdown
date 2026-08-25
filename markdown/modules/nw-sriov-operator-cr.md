{%- set _mod_docs_content_type = "REFERENCE" %}
# SR-IOV Network Operator config custom resource {id="nw-sriov-operator-cr_{{ context }}"}

To customize the SR-IOV Network Operator, configure the `sriovoperatorconfig` custom resource. {._abstract}

The following table describes the `sriovoperatorconfig` CR fields:

***SR-IOV Network Operator config custom resource***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td><code>string</code></td>
  <td>Specifies the name of the SR-IOV Network Operator instance. The default value is <code>default</code>. Do not set a different value.</td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>Specifies the namespace of the SR-IOV Network Operator instance. The default value is <code>openshift-sriov-network-operator</code>. Do not set a different value.</td>
</tr>
<tr>
  <td><code>spec.configDaemonNodeSelector</code></td>
  <td><code>string</code></td>
  <td>Specifies the node selection to control scheduling the SR-IOV Network Config Daemon on selected nodes. By default, this field is not set and the Operator deploys the SR-IOV Network Config daemon set on compute nodes.</td>
</tr>
<tr>
  <td><code>spec.disableDrain</code></td>
  <td><code>boolean</code></td>
  <td>Specifies whether to disable the node draining process or enable the node draining process when you apply a new policy to configure the NIC on a node. Setting this field to <code>true</code> facilitates software development and installing {{ product_title }} on a single node. By default, this field is not set. For single-node clusters, set this field to <code>true</code> after installing the Operator. This field must remain set to <code>true</code>.</td>
</tr>
<tr>
  <td><code>spec.enableInjector</code></td>
  <td><code>boolean</code></td>
  <td>Specifies whether to enable or disable the Network Resources Injector daemon set.</td>
</tr>
<tr>
  <td><code>spec.enableOperatorWebhook</code></td>
  <td><code>boolean</code></td>
  <td>Specifies whether to enable or disable the Operator Admission Controller webhook daemon set.</td>
</tr>
<tr>
  <td><code>spec.logLevel</code></td>
  <td><code>integer</code></td>
  <td>Specifies the log verbosity level of the Operator. By default, this field is set to <code>0</code>, which shows only basic logs. Set to <code>2</code> to show all the available logs.</td>
</tr>
<tr>
  <td><code>spec.featureGates</code></td>
  <td><code>map[string]bool</code></td>
  <td>Specifies whether to enable or disable the optional features. For example, <code>metricsExporter</code>.</td>
</tr>
<tr>
  <td><code>spec.featureGates.metricsExporter</code></td>
  <td><code>boolean</code></td>
  <td>Specifies whether to enable or disable the SR-IOV Network Operator metrics. By default, this field is set to <code>false</code>.</td>
</tr>
<tr>
  <td><code>spec.featureGates.mellanoxFirmwareReset</code></td>
  <td><code>boolean</code></td>
  <td>Specifies whether to reset the firmware on virtual function (VF) changes in the SR-IOV Network Operator. Some chipsets, such as the Intel C740 Series, do not completely power off the PCI-E devices, which is required to configure VFs on NVIDIA/Mellanox NICs. By default, this field is set to <code>false</code>.<br><br>{%- set FeatureName = "The `spec.featureGates.mellanoxFirmwareReset` parameter" %}{% include "./snippets/technology-preview.md" %}</td>
</tr>
</tbody>
</table>