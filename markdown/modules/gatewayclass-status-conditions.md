{%- set _mod_docs_content_type = "REFERENCE" %}
# GatewayClass status conditions reference {id="gatewayclass-status-conditions_{{ context }}"}

To verify that your `GatewayClass` custom resource (CR) is valid and ready to provision gateways, review its `status` conditions. A healthy `GatewayClass` CR reports a status of `True` for core conditions like `Accepted` and `SupportedVersion`. {._abstract}

**`GatewayClass` CR status conditions**

<table>
<thead>
<tr>
  <th>Condition</th>
  <th>Status</th>
  <th>Description and common reasons</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Accepted</code></td>
  <td><code>True</code></td>
  <td>The <code>GatewayClass</code> CR is valid and the controller has claimed it.</td>
</tr>
<tr>
  <td><code>Accepted</code></td>
  <td><code>False</code></td>
  <td>The configuration has errors or was rejected. Common reasons include:<br><br><ul><li><code>InvalidParameters</code>: Referenced parameters are invalid or not found.</li><li><code>Pending</code>: The controller has not processed the resource yet.</li><li><code>Unknown</code>: An unsupported <code>controllerName</code> was provided.</li></ul></td>
</tr>
<tr>
  <td><code>Accepted</code></td>
  <td><code>Unknown</code></td>
  <td>The <code>GatewayClass</code> CR is waiting for the controller to process it.</td>
</tr>
<tr>
  <td><code>SupportedVersion</code></td>
  <td><code>True</code></td>
  <td>The installed Gateway API version is compatible with the controller.</td>
</tr>
<tr>
  <td><code>SupportedVersion</code></td>
  <td><code>False</code></td>
  <td>There is a version mismatch. A common reason is <code>UnsupportedVersion</code>, which indicates that the custom resource definition (CRD) version does not match the controller requirements.</td>
</tr>
<tr>
  <td><code>ControllerInstalled</code></td>
  <td><code>True</code></td>
  <td>The Cluster Ingress Operator successfully installed the controller for Gateway API.</td>
</tr>
<tr>
  <td><code>ControllerInstalled</code></td>
  <td><code>False</code></td>
  <td>The installation failed.</td>
</tr>
<tr>
  <td><code>ControllerInstalled</code></td>
  <td><code>Unknown</code></td>
  <td>The controller has not started the installation yet.</td>
</tr>
<tr>
  <td><code>CRDsReady</code></td>
  <td><code>True</code></td>
  <td>The Istio CRDs are installed and actively managed by either the Cluster Ingress Operator or OLM.</td>
</tr>
<tr>
  <td><code>CRDsReady</code></td>
  <td><code>False</code></td>
  <td>The CRDs were installed by a third party or have mixed ownership, preventing the controller from managing them.</td>
</tr>
<tr>
  <td><code>CRDsReady</code></td>
  <td><code>Unknown</code></td>
  <td>The CRDs are not installed yet.</td>
</tr>
</tbody>
</table>