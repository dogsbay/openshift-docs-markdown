{%- set _mod_docs_content_type = "REFERENCE" %}
# Management of default Ingress Controller functions {id="sd-ingress-responsibility-matrix_{{ context }}"}

The following table details the components of the `default` Ingress Controller managed by the Ingress Operator and whether Red Hat Site Reliability Engineering (SRE) maintains this component on {{ product_title }} clusters. {._abstract}

**Ingress Operator Responsibility Chart**

<table>
<thead>
<tr>
  <th>Ingress component</th>
  <th>Managed by</th>
  <th>Default configuration?</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Scaling Ingress Controller</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Ingress Operator thread count</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Ingress Controller access logging</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Ingress Controller sharding</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Ingress Controller route admission policy</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Ingress Controller wildcard routes</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Ingress Controller X-Forwarded headers</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Ingress Controller route compression</td>
  <td>SRE</td>
  <td>Yes</td>
</tr>
</tbody>
</table>