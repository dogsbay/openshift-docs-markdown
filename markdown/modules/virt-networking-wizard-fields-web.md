{%- set _mod_docs_content_type = "REFERENCE" %}
# Networking fields {id="virt-networking-wizard-fields-web_{{ context }}"}

Information about networking fields in the virtual machine wizard. {._abstract}

<table>
<thead>
<tr>
  <th>Name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Name</td>
  <td>Name for the network interface controller.</td>
</tr>
<tr>
  <td>Model</td>
  <td>Indicates the model of the network interface controller. Supported values are <strong>e1000e</strong> and <strong>virtio</strong>.</td>
</tr>
<tr>
  <td>Network</td>
  <td>List of available network attachment definitions.</td>
</tr>
<tr>
  <td>Type</td>
  <td>List of available binding methods. Select the binding method suitable for the network interface:<br><br><ul><li>Default pod network: <code>masquerade</code></li><li>Linux bridge network: <code>bridge</code></li><li>SR-IOV network: <code>SR-IOV</code></li></ul>+On {{ ibm_z_name }}, <code>SR-IOV</code> is not supported.</td>
</tr>
<tr>
  <td>MAC Address</td>
  <td>MAC address for the network interface controller. If a MAC address is not specified, one is assigned automatically.</td>
</tr>
</tbody>
</table>