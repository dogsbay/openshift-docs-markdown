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
:   Specifies the tag or version of the catalog, such as `v{{ product_version }}`{minja} or `latest`.

`jq_request`
:   Specifies the query you want to run on the catalog.

:::details{title="Example command"}
```terminal {minja}
$ opm render \
  registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }} \
  | jq -cs '[.[] | select(.schema == "olm.bundle" and (.properties[] \
  | select(.type == "olm.csv.metadata").value.installModes[] \
  | select(.type == "AllNamespaces" and .supported == true)) \
  and .spec.webhookdefinitions == null) \
  | .package] | unique[]'
```
:::

**Common package queries**

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
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .schema == "olm.package")'</pre></td>
</tr>
<tr>
  <td>Packages that support <code>AllNamespaces</code> install mode and do not use webhooks</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -cs '[.[] | select(.schema == "olm.bundle" and (.properties[] \&#10;  | select(.type == "olm.csv.metadata").value.installModes[] \&#10;  | select(.type == "AllNamespaces" and .supported == true)) \&#10;  and .spec.webhookdefinitions == null) \&#10;  | .package] | unique[]'</pre></td>
</tr>
<tr>
  <td>Package metadata</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .schema == "olm.package") \&#10;  | select( .name == "&lt;package_name&gt;")'</pre></td>
</tr>
<tr>
  <td>Catalog blobs in a package</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .package == "&lt;package_name&gt;")'</pre></td>
</tr>
</tbody>
</table>

**Common channel queries**

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
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .schema == "olm.channel" ) \&#10;  | select( .package == "&lt;package_name&gt;") | .name'</pre></td>
</tr>
<tr>
  <td>Versions in a channel</td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .package == "&lt;package_name&gt;" ) \&#10;  | select( .schema == "olm.channel" ) \&#10;  | select( .name == "&lt;channel_name&gt;" ) .entries \&#10;  | .[] | .name'</pre></td>
</tr>
<tr>
  <td><ul><li>Latest version in a channel</li><li>Upgrade path</li></ul></td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .schema == "olm.channel" ) \&#10;  | select ( .name == "&lt;channel_name&gt;") \&#10;  | select( .package == "&lt;package_name&gt;")'</pre></td>
</tr>
</tbody>
</table>

**Common bundle queries**

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
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .schema == "olm.bundle" ) \&#10;  | select( .package == "&lt;package_name&gt;") | .name'</pre></td>
</tr>
<tr>
  <td><ul><li>Bundle dependencies</li><li>Available APIs</li></ul></td>
  <td><pre>$ opm render &lt;catalog_registry_url&gt;:&lt;tag&gt; \&#10;  | jq -s '.[] | select( .schema == "olm.bundle" ) \&#10;  | select ( .name == "&lt;bundle_name&gt;") \&#10;  | select( .package == "&lt;package_name&gt;")'</pre></td>
</tr>
</tbody>
</table>