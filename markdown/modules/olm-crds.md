{%- set _mod_docs_content_type = "REFERENCE" %}
# OLM resources {id="olm-resources_{{ context }}"}

The following custom resource definitions (CRDs) are defined and managed by Operator Lifecycle Manager (OLM) in {{ product_title }}. Use these resources to configure catalog sources, subscriptions, install plans, cluster service versions (CSVs), and Operator groups. {._abstract}

***CRDs managed by OLM and Catalog Operators***

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Short name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>ClusterServiceVersion</code> (CSV)</td>
  <td><code>csv</code></td>
  <td>Application metadata. For example: name, version, icon, required resources.</td>
</tr>
<tr>
  <td><code>CatalogSource</code></td>
  <td><code>catsrc</code></td>
  <td>A repository of CSVs, CRDs, and packages that define an application.</td>
</tr>
<tr>
  <td><code>Subscription</code></td>
  <td><code>sub</code></td>
  <td>Keeps CSVs up to date by tracking a channel in a package.</td>
</tr>
<tr>
  <td><code>InstallPlan</code></td>
  <td><code>ip</code></td>
  <td>Calculated list of resources to be created to automatically install or upgrade a CSV.</td>
</tr>
<tr>
  <td><code>OperatorGroup</code></td>
  <td><code>og</code></td>
  <td>Configures all Operators deployed in the same namespace as the <code>OperatorGroup</code> object to watch for their custom resource (CR) in a list of namespaces or cluster-wide.</td>
</tr>
<tr>
  <td><code>OperatorConditions</code></td>
  <td>-</td>
  <td>Creates a communication channel between OLM and an Operator it manages. Operators can write to the <code>Status.Conditions</code> array to communicate complex states to OLM.</td>
</tr>
</tbody>
</table>