{%- set _mod_docs_content_type = "CONCEPT" %}

# About the software catalog {id="olm-software-catalog-overview_{{ context }}"}

The _software catalog_ is the web console interface in {{ product_title }} that cluster administrators use to discover and install Operators. With one click, an Operator can be pulled from its off-cluster source, installed and subscribed on the cluster, and made ready for engineering teams to self-service manage the product across deployment environments using Operator Lifecycle Manager (OLM). {._abstract}

{% if not openshift_origin %}
Cluster administrators can choose from catalogs grouped into the following categories:

<table>
<thead>
<tr>
  <th>Category</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Red Hat Operators</td>
  <td>Red Hat products packaged and shipped by Red Hat. Supported by Red Hat.</td>
</tr>
<tr>
  <td>Certified Operators</td>
  <td>Products from leading independent software vendors (ISVs). Red Hat partners with ISVs to package and ship. Supported by the ISV.</td>
</tr>
<tr>
  <td>Community Operators</td>
  <td>Optionally-visible software maintained by relevant representatives in the community Operators GitHub repository. No official support.</td>
</tr>
<tr>
  <td>Custom Operators</td>
  <td>Operators you add to the cluster yourself. If you have not added any custom Operators, the <strong>Custom</strong> category does not appear in the web console software catalog.</td>
</tr>
</tbody>
</table>

{% endif %}

Operators in the software catalog are packaged to run on OLM. This includes a YAML file called a cluster service version (CSV) containing all of the CRDs, RBAC rules, deployments, and container images required to install and securely run the Operator. It also contains user-visible information like a description of its features and supported Kubernetes versions.