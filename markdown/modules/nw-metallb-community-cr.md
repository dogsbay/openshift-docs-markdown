{%- set _mod_docs_content_type = "REFERENCE" %}
# About the community custom resource {id="nw-metallb-community-cr_{{ context }}"}

To simplify BGP configuration, define named aliases for community values by using the community custom resource. You can reference these aliases when advertising `ipAddressPools` with the `BGPAdvertisement` resource. {._abstract}

The fields for the `community` custom resource are described in the following table.


:::note

The `community` CRD applies only to BGPAdvertisement.

:::


***MetalLB community custom resource***

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
  <td>Specifies the name for the <code>community</code>.</td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>Specifies the namespace for the <code>community</code>.Specify the same namespace that the MetalLB Operator uses.</td>
</tr>
<tr>
  <td><code>spec.communities</code></td>
  <td><code>string</code></td>
  <td>Specifies a list of BGP community aliases that can be used in BGPAdvertisements. A community alias consists of a pair of name (alias) and value (number:number). Link the BGPAdvertisement to a community alias by referring to the alias name in its <code>spec.communities</code> field.</td>
</tr>
</tbody>
</table>

***CommunityAlias***

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
  <td><code>name</code></td>
  <td><code>string</code></td>
  <td>The name of the alias for the <code>community</code>.</td>
</tr>
<tr>
  <td><code>value</code></td>
  <td><code>string</code></td>
  <td>The BGP <code>community</code> value corresponding to the given name.</td>
</tr>
</tbody>
</table>