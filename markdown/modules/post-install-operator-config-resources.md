{%- set _mod_docs_content_type = "REFERENCE" %}
# Operator configuration resources {id="operator-configuration-resources_{{ context }}"}

Review the cluster-scoped Operator configuration resources that control the behavior of specific {{ product_title }} components. {._abstract}

These configuration resources are cluster-scoped instances, named `cluster`, which control the behavior of a specific component as
owned by a particular Operator.

<table>
<thead>
<tr>
  <th>Resource name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>consoles.operator.openshift.io</code></td>
  <td>Controls console appearance such as branding customizations</td>
</tr>
<tr>
  <td><code>config.imageregistry.operator.openshift.io</code></td>
  <td>Configures <a href="/registry/configuring-registry-operator#registry-operator-configuration-resource-overview_configuring-registry-operator">{{ product_registry }} settings</a> such as public routing, log levels, proxy settings, resource constraints, replica counts, and storage type.</td>
</tr>
<tr>
  <td><code>config.samples.operator.openshift.io</code></td>
  <td>Configures the<a href="/openshift_images/configuring-samples-operator#configuring-samples-operator">Samples Operator</a>to control which example image streams and templates are installed on the cluster.</td>
</tr>
</tbody>
</table>