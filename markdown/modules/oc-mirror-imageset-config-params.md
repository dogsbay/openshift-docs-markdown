{%- set _mod_docs_content_type = "REFERENCE" %}
# Image set configuration parameters {id="oc-mirror-imageset-config-params_{{ context }}"}

The oc-mirror plugin requires an image set configuration file that defines what images to mirror. {._abstract}

The following table lists the available parameters for the `ImageSetConfiguration` resource.

**`ImageSetConfiguration` parameters**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
  <th>Values</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>apiVersion</code></td>
  <td>The API version for the <code>ImageSetConfiguration</code> content.</td>
  <td>String. For example: <code>mirror.openshift.io/v1alpha2</code>.</td>
</tr>
<tr>
  {% if not microshift %}<td><code>archiveSize</code></td>{% endif %}
  {% if not microshift %}<td>The maximum size, in GiB, of each archive file within the image set.</td>{% endif %}
  {% if not microshift %}<td>Integer. For example: <code>4</code></td>{% endif %}
</tr>
<tr>
  <td><code>mirror</code></td>
  <td>The configuration of the image set.</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>mirror.additionalImages</code></td>
  <td>The additional images configuration of the image set.</td>
  <td>Array of objects. For example:<br><br><pre>additionalImages:&#10;  - name: registry.redhat.io/ubi8/ubi:latest</pre></td>
</tr>
<tr>
  <td><code>mirror.additionalImages.name</code></td>
  <td>The tag or digest of the image to mirror.</td>
  <td>String. For example: <code>registry.redhat.io/ubi8/ubi:latest</code></td>
</tr>
<tr>
  <td><code>mirror.blockedImages</code></td>
  <td>The full tag, digest, or pattern of images to block from mirroring.</td>
  <td>Array of strings. For example: <code>docker.io/library/alpine</code></td>
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm</code></td>{% endif %}
  {% if not microshift %}<td>The helm configuration of the image set. Note that the oc-mirror plugin supports only helm charts that do not require user input when rendered.</td>{% endif %}
  {% if not microshift %}<td>Object</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.local</code></td>{% endif %}
  {% if not microshift %}<td>The local helm charts to mirror.</td>{% endif %}
  {% if not microshift %}<td>Array of objects. For example:<br><br><pre>local:&#10;  - name: podinfo&#10;    path: /test/podinfo-5.0.0.tar.gz</pre></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.local.name</code></td>{% endif %}
  {% if not microshift %}<td>The name of the local helm chart to mirror.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>podinfo</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.local.path</code></td>{% endif %}
  {% if not microshift %}<td>The path of the local helm chart to mirror.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>/test/podinfo-5.0.0.tar.gz</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.repositories</code></td>{% endif %}
  {% if not microshift %}<td>The remote helm repositories to mirror from.</td>{% endif %}
  {% if not microshift %}<td>Array of objects. For example:<br><br><pre>repositories:&#10;  - name: podinfo&#10;    url: https://example.github.io/podinfo&#10;    charts:&#10;      - name: podinfo&#10;        version: 5.0.0</pre></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.repositories.name</code></td>{% endif %}
  {% if not microshift %}<td>The name of the helm repository to mirror from.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>podinfo</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.repositories.url</code></td>{% endif %}
  {% if not microshift %}<td>The URL of the helm repository to mirror from.</td>{% endif %}
  {% if not microshift %}<td>String. For example: [x-]<code>https://example.github.io/podinfo</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.repositories.charts</code></td>{% endif %}
  {% if not microshift %}<td>The remote helm charts to mirror.</td>{% endif %}
  {% if not microshift %}<td>Array of objects.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.repositories.charts.name</code></td>{% endif %}
  {% if not microshift %}<td>The name of the helm chart to mirror.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>podinfo</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.repositories.charts.version</code></td>{% endif %}
  {% if not microshift %}<td>The version of the named helm chart to mirror.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>5.0.0</code>.</td>{% endif %}
</tr>
<tr>
  <td><code>mirror.operators</code></td>
  <td>The Operators configuration of the image set.</td>
  <td>Array of objects. For example:<br><br><pre>operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v{product-version}&#10;    packages:&#10;      - name: elasticsearch-operator&#10;        minVersion: '2.4.0'</pre></td>
</tr>
<tr>
  <td><code>mirror.operators.catalog</code></td>
  <td>The Operator catalog to include in the image set.</td>
  <td>String. For example: <code>registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.full</code></td>
  <td>When <code>true</code>, downloads the full catalog, Operator package, or Operator channel.</td>
  <td>Boolean. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.packages</code></td>
  <td>The Operator packages configuration.</td>
  <td>Array of objects. For example:<br><br><pre>operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:v{product-version}&#10;    packages:&#10;      - name: elasticsearch-operator&#10;        minVersion: '5.2.3-31'</pre></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.name</code></td>
  <td>The Operator package name to include in the image set</td>
  <td>String. For example: <code>elasticsearch-operator</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels</code></td>
  <td>The Operator package channel configuration.</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels.name</code></td>
  <td>The Operator channel name, unique within a package, to include in the image set.</td>
  <td>String. For example: <code>fast</code> or <code>stable-v{{ product_version }}</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels.maxVersion</code></td>
  <td>The highest version of the Operator mirror across all channels in which it exists. See the following note for further information.</td>
  <td>String. For example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels.minBundle</code></td>
  <td>The name of the minimum bundle to include, plus all bundles in the update graph to the channel head. Set this field only if the named bundle has no semantic version metadata.</td>
  <td>String. For example: <code>bundleName</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels.minVersion</code></td>
  <td>The lowest version of the Operator to mirror across all channels in which it exists. See the following note for further information.</td>
  <td>String. For example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.maxVersion</code></td>
  <td>The highest version of the Operator to mirror across all channels in which it exists. See the following note for further information.</td>
  <td>String. For example: <code>5.2.3-31</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.packages.minVersion</code></td>
  <td>The lowest version of the Operator to mirror across all channels in which it exists. See the following note for further information.</td>
  <td>String. For example: <code>5.2.3-31</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.skipDependencies</code></td>
  <td>If <code>true</code>, dependencies of bundles are not included.</td>
  <td>Boolean. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.targetCatalog</code></td>
  <td>An alternative name and optional namespace hierarchy to mirror the referenced catalog as.</td>
  <td>String. For example: <code>my-namespace/my-operator-catalog</code></td>
</tr>
<tr>
  <td><code>mirror.operators.targetName</code></td>
  <td>An alternative name to mirror the referenced catalog as.<br><br>The <code>targetName</code> parameter is deprecated. Use the <code>targetCatalog</code> parameter instead.</td>
  <td>String. For example: <code>my-operator-catalog</code></td>
</tr>
<tr>
  <td><code>mirror.operators.targetTag</code></td>
  <td>An alternative tag to append to the <code>targetName</code> or <code>targetCatalog</code>.</td>
  <td>String. For example: <code>v1</code></td>
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform</code></td>{% endif %}
  {% if not microshift %}<td>The platform configuration of the image set.</td>{% endif %}
  {% if not microshift %}<td>Object</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.architectures</code></td>{% endif %}
  {% if not microshift %}<td>The architecture of the platform release payload to mirror.</td>{% endif %}
  {% if not microshift %}<td>Array of strings. For example:<br><br><pre>architectures:&#10;  - amd64&#10;  - arm64&#10;  - multi&#10;  - ppc64le&#10;  - s390x</pre><br><br>The default value is <code>amd64</code>. The value <code>multi</code> ensures that the mirroring is supported for all available architectures, eliminating the need to specify individual architectures.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels</code></td>{% endif %}
  {% if not microshift %}<td>The platform channel configuration of the image set.</td>{% endif %}
  {% if not microshift %}<td>Array of objects. For example:<br><br><pre>channels:&#10;  - name: stable-4.10&#10;  - name: stable-{product-version}</pre></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.full</code></td>{% endif %}
  {% if not microshift %}<td>When <code>true</code>, sets the <code>minVersion</code> to the first release in the channel and the <code>maxVersion</code> to the last release in the channel.</td>{% endif %}
  {% if not microshift %}<td>Boolean. The default value is <code>false</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.name</code></td>{% endif %}
  {% if not microshift %}<td>The name of the release channel.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>stable-{{ product_version }}</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.minVersion</code></td>{% endif %}
  {% if not microshift %}<td>The minimum version of the referenced platform to be mirrored.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>4.12.6</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.maxVersion</code></td>{% endif %}
  {% if not microshift %}<td>The highest version of the referenced platform to be mirrored.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>{{ product_version }}.1</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.shortestPath</code></td>{% endif %}
  {% if not microshift %}<td>Toggles shortest path mirroring or full range mirroring.</td>{% endif %}
  {% if not microshift %}<td>Boolean. The default value is <code>false</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.type</code></td>{% endif %}
  {% if not microshift %}<td>The type of the platform to be mirrored.</td>{% endif %}
  {% if not microshift %}<td>String. For example: <code>ocp</code> or <code>okd</code>. The default is <code>ocp</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.graph</code></td>{% endif %}
  {% if not microshift %}<td>Indicates whether the OSUS graph is added to the image set and subsequently published to the mirror.</td>{% endif %}
  {% if not microshift %}<td>Boolean. The default value is <code>false</code>.</td>{% endif %}
</tr>
<tr>
  <td><code>storageConfig</code></td>
  <td>The back-end configuration of the image set.</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>storageConfig.local</code></td>
  <td>The local back-end configuration of the image set.</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>storageConfig.local.path</code></td>
  <td>The path of the directory to contain the image set metadata.</td>
  <td>String. For example: <code>./path/to/dir/</code>.</td>
</tr>
<tr>
  <td><code>storageConfig.registry</code></td>
  <td>The registry back-end configuration of the image set.</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>storageConfig.registry.imageURL</code></td>
  <td>The back-end registry URI. Can optionally include a namespace reference in the URI.</td>
  <td>String. For example: <code>quay.io/myuser/imageset:metadata</code>.</td>
</tr>
<tr>
  <td><code>storageConfig.registry.skipTLS</code></td>
  <td>Optionally skip TLS verification of the referenced back-end registry.</td>
  <td>Boolean. The default value is <code>false</code>.</td>
</tr>
</tbody>
</table>


:::note

Using the `minVersion` and `maxVersion` properties to filter for a specific Operator version range can result in a multiple channel heads error. The error message states that there are `multiple channel heads`. This is because when the filter is applied, the update graph of the Operator is truncated.

Operator Lifecycle Manager requires that every Operator channel contains versions that form an update graph with exactly one end point, that is, the latest version of the Operator. When the filter range is applied, that graph can turn into two or more separate graphs or a graph that has more than one end point.

To avoid this error, do not filter out the latest version of an Operator. If you still run into the error, depending on the Operator, either the `maxVersion` property must be increased or the `minVersion` property must be decreased. Because every Operator graph can be different, you might need to adjust these values until the error resolves.

:::