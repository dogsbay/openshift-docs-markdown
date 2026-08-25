{%- set _mod_docs_content_type = "REFERENCE" %}
{% if context != "operator-reference" %}
# Component responsibilities {id="olm-architecture_{{ context }}"}

{% endif %}
{% if context == "operator-reference" %}
# CRDs {id="_crds"}

{% endif %}

Operator Lifecycle Manager (OLM) and the Catalog Operator manage the following custom resource definitions (CRDs) that form the basis of the Operator Framework. {._abstract}

**CRDs managed by OLM and Catalog Operators**

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Short name</th>
  <th>Owner</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>ClusterServiceVersion</code> (CSV)</td>
  <td><code>csv</code></td>
  <td>OLM</td>
  <td>Application metadata: name, version, icon, required resources, installation, and so on.</td>
</tr>
<tr>
  <td><code>InstallPlan</code></td>
  <td><code>ip</code></td>
  <td>Catalog</td>
  <td>Calculated list of resources to be created to automatically install or upgrade a CSV.</td>
</tr>
<tr>
  <td><code>CatalogSource</code></td>
  <td><code>catsrc</code></td>
  <td>Catalog</td>
  <td>A repository of CSVs, CRDs, and packages that define an application.</td>
</tr>
<tr>
  <td><code>Subscription</code></td>
  <td><code>sub</code></td>
  <td>Catalog</td>
  <td>Used to keep CSVs up to date by tracking a channel in a package.</td>
</tr>
<tr>
  <td><code>OperatorGroup</code></td>
  <td><code>og</code></td>
  <td>OLM</td>
  <td>Configures all Operators deployed in the same namespace as the <code>OperatorGroup</code> object to watch for their custom resource (CR) in a list of namespaces or cluster-wide.</td>
</tr>
</tbody>
</table>

Each of these Operators is also responsible for creating the following resources:

**Resources created by OLM and Catalog Operators**

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Owner</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Deployments</code></td>
  <td rowspan="4">OLM</td>
</tr>
<tr>
  <td><code>ServiceAccounts</code></td>
</tr>
<tr>
  <td><code>(Cluster)Roles</code></td>
</tr>
<tr>
  <td><code>(Cluster)RoleBindings</code></td>
</tr>
<tr>
  <td><code>CustomResourceDefinitions</code> (CRDs)</td>
  <td rowspan="2">Catalog</td>
</tr>
<tr>
  <td><code>ClusterServiceVersions</code></td>
</tr>
</tbody>
</table>