{%- set _mod_docs_content_type = "REFERENCE" %}

# Common catalog queries {id="olmv1-catalog-queries_{{ context }}"}

You can query catalogs by using the `opm` and `jq` CLI tools to help you install, update, and manage the lifecycle of extensions. {._abstract}

The following examples show common catalog queries for extensions:

```terminal title="Command syntax"
$ opm render <catalog_registry_url>:<tag> | <jq_request>
```
where:


`catalog_registry_url`
:   Specifies the URL of the catalog registry, such as `registry.redhat.io/redhat/redhat-operator-index`.

`tag`
:   Specifies the tag or version of the catalog, such as `v{{ product_version }}` or `latest`.

`jq_request`
:   Specifies the query you want to run on the catalog.

<details>
<summary>Example command</summary>

```terminal
$ opm render \
  registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }} \
  | jq -cs '[.[] | select(.schema == "olm.bundle" and (.properties[] \
  | select(.type == "olm.csv.metadata").value.installModes[] \
  | select(.type == "AllNamespaces" and .supported == true)) \
  and .spec.webhookdefinitions == null) \
  | .package] | unique[]'
```
</details>

***Common package queries***

<table>
<thead>
<tr>
  <th>Query</th>
  <th>Request</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Available packages in a catalog</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
</tr>
<tr>
  <td>select( .schema == "olm.package")' ----</td>
  <td>Packages that support <code>AllNamespaces</code> install mode and do not use webhooks</td>
</tr>
<tr>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -cs '[.[] \</pre></td>
  <td>select(.schema == "olm.bundle" and (.properties[] \</td>
</tr>
<tr>
  <td>\</td>
  <td>select(.type == "olm.csv.metadata").value.installModes[] \</td>
</tr>
<tr>
  <td>\</td>
  <td>select(.type == "AllNamespaces" and .supported == true)) \</td>
</tr>
<tr>
  <td>\</td>
  <td>.package] \</td>
</tr>
<tr>
  <td>unique[]' ----</td>
  <td>Package metadata</td>
</tr>
<tr>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
  <td>select( .schema == "olm.package") \</td>
</tr>
<tr>
  <td>\</td>
  <td>select( .name == "<package_name>")'</td>
</tr>
<tr>
  <td>Catalog blobs in a package</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
</tr>
<tr>
  <td>select( .package == "<package_name>")' ----</td>
</tr>
</tbody>
</table>

***Common channel queries***

<table>
<thead>
<tr>
  <th>Query</th>
  <th>Request</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Channels in a package</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
</tr>
<tr>
  <td>select( .schema == "olm.channel" ) \ \</td>
  <td>select( .package == "<package_name>") \</td>
</tr>
<tr>
  <td>.name' ----</td>
  <td>Versions in a channel</td>
</tr>
<tr>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
  <td>select( .package == "<package_name>" ) \</td>
</tr>
<tr>
  <td>\</td>
  <td>select( .schema == "olm.channel" ) \</td>
</tr>
<tr>
  <td>\</td>
  <td>select( .name == "<channel_name>" ) .entries \</td>
</tr>
<tr>
  <td>\</td>
  <td>.[] \</td>
</tr>
<tr>
  <td>.name' ----</td>
  <td><ul><li>Latest version in a channel</li><li>Upgrade path</li></ul></td>
</tr>
<tr>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
  <td>select( .schema == "olm.channel" ) \</td>
</tr>
<tr>
  <td>\</td>
  <td>select ( .name == "<channel_name>") \</td>
</tr>
<tr>
  <td>\</td>
  <td>select( .package == "<package_name>")'</td>
</tr>
</tbody>
</table>

***Common bundle queries***

<table>
<thead>
<tr>
  <th>Query</th>
  <th>Request</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Bundles in a package</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
</tr>
<tr>
  <td>select( .schema == "olm.bundle" ) \ \</td>
  <td>select( .package == "<package_name>") \</td>
</tr>
<tr>
  <td>.name' ----</td>
  <td><ul><li>Bundle dependencies</li><li>Available APIs</li></ul></td>
</tr>
<tr>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;\| jq -s '.[] \</pre></td>
  <td>select( .schema == "olm.bundle" ) \</td>
</tr>
<tr>
  <td>\</td>
  <td>select ( .name == "<bundle_name>") \</td>
</tr>
<tr>
  <td>\</td>
  <td>select( .package == "<package_name>")'</td>
</tr>
</tbody>
</table>