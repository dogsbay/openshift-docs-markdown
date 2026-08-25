{%- set _mod_docs_content_type = "CONCEPT" %}
# Network connectivity requirements when IPsec is enabled {id="network-connectivity-requirements-ipsec_{{ context }}"}

When IPsec is enabled in {{ product_title }}, you must configure the network connectivity between machines to allow cluster components to communicate. Each machine must be able to resolve the hostnames of all other machines in the cluster. {._abstract}

***Ports used for all-machine to all-machine communications***

<table>
<thead>
<tr>
  <th>Protocol</th>
  <th>Port</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.2+</td>
  <td>UDP</td>
  <td><code>500</code></td>
</tr>
<tr>
  <td>IPsec IKE packets</td>
  <td><code>4500</code></td>
  <td>IPsec NAT-T packets</td>
</tr>
<tr>
  <td>ESP</td>
  <td>N/A</td>
  <td>IPsec Encapsulating Security Payload (ESP)</td>
</tr>
</tbody>
</table>