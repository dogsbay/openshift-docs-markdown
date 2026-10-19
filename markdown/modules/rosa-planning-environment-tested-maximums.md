{%- set _mod_docs_content_type = "REFERENCE" %}
# Tested cluster maximums for {{ product_title }} {id="rosa-planning-environment-tested-maximums_{{ context }}"}

These tested maximums apply to {{ product_title }} clusters. Use the table to plan worker nodes, namespaces, pods, and related objects within validated scale ranges. {._abstract}

<table>
<thead>
<tr>
  <th>Maximum type</th>
  <th>{{ product_title }} tested maximum</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Number of compute (worker) nodes</td>
  <td> {% if openshift_rosa %}249{% endif %} {% if openshift_rosa_hcp %}501{% endif %}</td>
</tr>
<tr>
  <td>Number of pods</td>
  <td> {% if openshift_rosa %}60,000{% endif %} {% if openshift_rosa_hcp %}105,205{% endif %}</td>
</tr>
<tr>
  <td>Number of pods per node</td>
  <td>250</td>
</tr>
<tr>
  <td>Number of deployments</td>
  <td> {% if openshift_rosa %}11,200{% endif %} {% if openshift_rosa_hcp %}22,600{% endif %}</td>
</tr>
<tr>
  <td>Number of namespaces</td>
  <td> {% if openshift_rosa %}2,250{% endif %} {% if openshift_rosa_hcp %}4,500{% endif %}</td>
</tr>
<tr>
  <td>Number of routes</td>
  <td> {% if openshift_rosa %}4,500{% endif %} {% if openshift_rosa_hcp %}9,000{% endif %}</td>
</tr>
<tr>
  <td>Number of secrets</td>
  <td> {% if openshift_rosa %}29,000{% endif %} {% if openshift_rosa_hcp %}59,000{% endif %}</td>
</tr>
<tr>
  <td>Number of config maps</td>
  <td> {% if openshift_rosa %}34,000{% endif %} {% if openshift_rosa_hcp %}68,000{% endif %}</td>
</tr>
<tr>
  <td>Number of services</td>
  <td> {% if openshift_rosa %}22,000{% endif %} {% if openshift_rosa_hcp %}38,000{% endif %}</td>
</tr>
<tr>
  <td>Number of pods per namespace</td>
  <td>2,000</td>
</tr>
<tr>
  <td>Number of services per namespace</td>
  <td>1,000</td>
</tr>
<tr>
  <td>Number of deployments per namespace</td>
  <td>2,000</td>
</tr>
</tbody>
</table>