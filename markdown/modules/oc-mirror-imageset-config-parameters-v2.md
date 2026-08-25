{%- set _mod_docs_content_type = "REFERENCE" %}
# ImageSet configuration parameters for oc-mirror plugin v2 {id="oc-mirror-imageset-config-parameters-v2_{{ context }}"}

The oc-mirror plugin v2 requires an image set configuration file that defines what images to mirror. {._abstract}

The following table lists the available parameters for the `ImageSetConfiguration resource.


:::note

*   When selecting bundles for mirroring, the oc-mirror plugin v2 does not automatically detect group/version/kind (GVK) and bundle dependencies. You must explicitly specify the required Operators, their channels, and the Operator versions in the `ImageSetConfiguration` file. For more information, see "opm CLI reference".
*   Using the `minVersion` and `maxVersion` properties to filter for a specific Operator version range can result in a multiple channel heads error. The error message states that there are `multiple channel heads`. This is because when the filter is applied, the update graph of the Operator is truncated.
*   OLM requires that every Operator channel contains versions that form an update graph with exactly one end point, that is, the latest version of the Operator. When the filter range is applied, that graph can turn into two or more separate graphs or a graph that has more than one end point.
*   To avoid this error, do not filter out the latest version of an Operator. If you still run into the error, depending on the Operator, either the `maxVersion` property must be increased or the `minVersion` property must be decreased. Because every Operator graph can be different, you might need to adjust these values until the error resolves.

:::


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
  <td>The API version of the <code>ImageSetConfiguration</code> content.</td>
  <td>String Example: <code>mirror.openshift.io/v2alpha1</code></td>
</tr>
<tr>
  {% if not microshift %}<td><code>archiveSize</code></td>{% endif %}
  {% if not microshift %}<td>The maximum size, in GiB, of each archive file within the image set.</td>{% endif %}
  {% if not microshift %}<td>Integer Example: <code>4</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>kubeVirtContainer</code></td>{% endif %}
  {% if not microshift %}<td>When set to <code>true</code>, includes images from the HyperShift KubeVirt CoreOS container.</td>{% endif %}
  {% if not microshift %}<td>Boolean Example <code>ImageSetConfiguration</code> file:<pre>apiVersion: mirror.openshift.io/v2alpha1&#10;kind: ImageSetConfiguration&#10;mirror:&#10;  platform:&#10;    channels:&#10;    - name: stable-4.16&#10;      minVersion: 4.16.0&#10;      maxVersion: 4.16.0&#10;    kubeVirtContainer: true</pre></td>{% endif %}
</tr>
<tr>
  <td><code>mirror</code></td>
  <td>The configuration of the image set.</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>mirror.additionalImages</code></td>
  <td>The additional images configuration of the image set.</td>
  <td>Array of objects<br><br>Example:<pre>additionalImages:&#10;  - name: registry.redhat.io/ubi8/ubi:latest</pre></td>
</tr>
<tr>
  <td><code>mirror.additionalImages.name</code></td>
  <td>The tag or digest of the image to mirror.</td>
  <td>String Example: <code>registry.redhat.io/ubi8/ubi:latest</code></td>
</tr>
<tr>
  <td><code>mirror.additionalImages.targetRepo</code></td>
  <td>Optional. Specifies the custom repository path and URL for the target image on the disconnected registry. This value overrides the default repository path.</td>
  <td>String</td>
</tr>
<tr>
  <td><code>mirror.additionalImages.targetTag</code></td>
  <td>Optional. Specifies the tag applied to the mirrored image. If you do not configure this field, the image is mirrored using the tag provided in the <code>name</code> field. If no tag is provided in the <code>name</code> field, <code>oc-mirror</code> calculates and applies a tag based on the image's partial digest.</td>
  <td>String</td>
</tr>
<tr>
  <td><code>mirror.blockedImages</code></td>
  <td>List of images with a tag or digest (SHA) to block from mirroring.</td>
  <td>Array of strings Example: <code>docker.io/library/alpine</code></td>
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm</code></td>{% endif %}
  {% if not microshift %}<td>The helm configuration of the image set. The oc-mirror plugin does not support helm charts with manually modified <code>values.yaml</code> files.</td>{% endif %}
  {% if not microshift %}<td>Object</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.local</code></td>{% endif %}
  {% if not microshift %}<td>The local helm charts to mirror.</td>{% endif %}
  {% if not microshift %}<td>Array of objects. For example:<br><br><pre>local:&#10;  - name: podinfo&#10;    path: /test/podinfo-5.0.0.tar.gz</pre></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.helm.local.charts.imagePaths</code></td>{% endif %}
  {% if not microshift %}<td>The custom path of a container image inside of the local helm chart.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd><code>oc-mirror</code> detects and mirrors container images from the helm chart by searching well-known paths. You can also specify custom paths using this field.</dd></dl><br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Operand images, dynamically deployed by Operator controllers at runtime, are typically referenced by environment variables within the controller's deployment template. Before {{ product_title }} 4.20, while <code>oc-mirror</code> could access these environment variables, it attempted to mirror all values, including non-image references, for example, log levels, leading to failures. With this update, you can mirror only the container images referenced in these environment variables.</dd></dl></td>{% endif %}
  {% if not microshift %}<td>Array of string. For example:  <code>"- {.spec.template.spec.custom[*].image}"</code>.</td>{% endif %}
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
  {% if not microshift %}<td>Array of objects. For example:<br><br><pre>repositories:&#10;  - name: podinfo&#10;    url: https://example.github.io/podinfo&#10;    charts:&#10;      - name: podinfo&#10;        version: 5.0.0&#10;         imagePaths:&#10;         - "{.spec.template.spec.custom[*].image}"</pre></td>{% endif %}
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
  {% if not microshift %}<td><code>mirror.helm.repositories.charts.imagePaths</code></td>{% endif %}
  {% if not microshift %}<td>The custom path of a container image inside of the helm chart.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd><code>oc-mirror</code> detects and mirrors container images from the helm chart by searching well-known paths. You can also specify custom paths using this field.</dd></dl><br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Operand images, dynamically deployed by Operator controllers at runtime, are typically referenced by environment variables within the controller's deployment template. Before {{ product_title }} 4.20, while <code>oc-mirror</code> could access these environment variables, it attempted to mirror all values, including non-image references, for example, log levels, leading to failures. With this update, you can mirror only the container images referenced in these environment variables.</dd></dl></td>{% endif %}
  {% if not microshift %}<td>Array of string. For example:  <code>"- {.spec.template.spec.custom[*].image}"</code>.</td>{% endif %}
</tr>
<tr>
  <td><code>mirror.operators</code></td>
  <td>The Operators configuration of the image set.</td>
  <td>Array of objects<br><br>Example:<pre>operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:{product-version}&#10;    packages:&#10;      - name: elasticsearch-operator&#10;        minVersion: '2.4.0'</pre></td>
</tr>
<tr>
  <td><code>mirror.operators.catalog</code></td>
  <td>The Operator catalog to include in the image set.</td>
  <td>String Example: <code>registry.redhat.io/redhat/redhat-operator-index:v4.15</code></td>
</tr>
<tr>
  <td><code>mirror.operators.full</code></td>
  <td>When <code>true</code>, downloads the full catalog, Operator package, or Operator channel.</td>
  <td>Boolean The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>mirror.operators.packages</code></td>
  <td>The Operator packages configuration.</td>
  <td>Array of objects<br><br>Example:<pre>operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:{product-version}&#10;    packages:&#10;      - name: elasticsearch-operator&#10;        minVersion: '5.2.3-31'</pre></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.name</code></td>
  <td>The Operator package name to include in the image set.</td>
  <td>String Example: <code>elasticsearch-operator</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels</code></td>
  <td>Operator package channel configuration</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels.name</code></td>
  <td>The Operator channel name, unique within a package, to include in the image set.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>You must use explicit registry hostnames for all images listed under <code>additionalImages</code>. Without explicit hostnames, the plugin mirrors the images to unexpected target paths.</dd></dl></td>
  <td>String Example: <code>fast</code> or <code>stable-v4.15</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels.maxVersion</code></td>
  <td>The highest version of the Operator mirror across all channels in which it exists.</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.channels.minVersion</code></td>
  <td>The lowest version of the Operator to mirror across all channels in which it exists</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.maxVersion</code></td>
  <td>The highest version of the Operator to mirror across all channels in which it exists.</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>mirror.operators.packages.minVersion</code></td>
  <td>The lowest version of the Operator to mirror across all channels in which it exists.</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>mirror.operators.targetCatalog</code></td>
  <td>An alternative name and optional namespace hierarchy to mirror the referenced catalog as</td>
  <td>String Example: <code>my-namespace/my-operator-catalog</code></td>
</tr>
<tr>
  <td><code>mirror.operators.targetCatalogSourceTemplate</code></td>
  <td>Path on disk for a template to use to complete catalogSource custom resource generated by oc-mirror plugin v2.</td>
  <td>String Example: <code>/tmp/catalog-source_template.yaml</code> Example of a template file:<pre>apiVersion: operators.coreos.com/v1alpha1&#10;kind: CatalogSource&#10;metadata:&#10;  name: discarded&#10;  namespace: openshift-marketplace&#10;spec:&#10;  image: discarded&#10;  sourceType: grpc&#10;  updateStrategy:&#10;    registryPoll:&#10;      interval: 30m0s</pre></td>
</tr>
<tr>
  <td><code>mirror.operators.targetTag</code></td>
  <td>An alternative tag to append to the <code>targetName</code> or <code>targetCatalog</code>.</td>
  <td>String Example: <code>v1</code></td>
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform</code></td>{% endif %}
  {% if not microshift %}<td>The platform configuration of the image set.</td>{% endif %}
  {% if not microshift %}<td>Object</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.architectures</code></td>{% endif %}
  {% if not microshift %}<td>The architecture of the platform release payload to mirror.</td>{% endif %}
  {% if not microshift %}<td>Array of strings Example:<pre>architectures:&#10;  - amd64&#10;  - arm64&#10;  - multi&#10;  - ppc64le&#10;  - s390x</pre><br><br>The default value is <code>amd64</code>. The value <code>multi</code> ensures that the mirroring is supported for all available architectures, eliminating the need to specify individual architectures</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels</code></td>{% endif %}
  {% if not microshift %}<td>The platform channel configuration of the image set.</td>{% endif %}
  {% if not microshift %}<td>Array of objects Example:<pre>channels:&#10;  - name: stable-4.12&#10;  - name: stable-{product-version}</pre></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.full</code></td>{% endif %}
  {% if not microshift %}<td>When <code>true</code>, sets the <code>minVersion</code> to the first release in the channel and the <code>maxVersion</code> to the last release in the channel.</td>{% endif %}
  {% if not microshift %}<td>Boolean The default value is <code>false</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.name</code></td>{% endif %}
  {% if not microshift %}<td>Name of the release channel</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>stable-4.15</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.minVersion</code></td>{% endif %}
  {% if not microshift %}<td>The minimum version of the referenced platform to be mirrored.</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>4.12.6</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.maxVersion</code></td>{% endif %}
  {% if not microshift %}<td>The highest version of the referenced platform to be mirrored.</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>4.15.1</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.shortestPath</code></td>{% endif %}
  {% if not microshift %}<td>Toggles shortest path mirroring or full range mirroring.</td>{% endif %}
  {% if not microshift %}<td>Boolean The default value is <code>false</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.channels.type</code></td>{% endif %}
  {% if not microshift %}<td>Type of the platform to be mirrored</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>ocp</code> or <code>okd</code>. The default is <code>ocp</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.platform.graph</code></td>{% endif %}
  {% if not microshift %}<td>Indicates whether the OSUS graph is added to the image set and subsequently published to the mirror.</td>{% endif %}
  {% if not microshift %}<td>Boolean The default value is <code>false</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>mirror.operators.packages.defaultChannel</code></td>{% endif %}
  {% if not microshift %}<td>Must be defined when excluding the default channel from the filtering.</td>{% endif %}
  {% if not microshift %}<td>Array of objects. For example:<br><br><pre> mirror:&#10;  operators:&#10;    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.22&#10;      packages:&#10;        - name: rhods-operator&#10;          defaultChannel: fast&#10;          channels:&#10;            - name: fast</pre></td>{% endif %}
</tr>
</tbody>
</table>

## DeleteImageSetConfiguration parameters {id="delete-imagset-config-parameters_{{ context }}"}

To remove images with the oc-mirror plugin v2, you must use a `DeleteImageSetConfiguration.yaml` configuration file that defines which images to delete from the mirror registry. The following table lists the available parameters for the `DeleteImageSetConfiguration` resource.

**`DeleteImageSetConfiguration` parameters**

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
  <td>The API version for the <code>DeleteImageSetConfiguration</code> content.</td>
  <td>String Example: <code>mirror.openshift.io/v2alpha1</code></td>
</tr>
<tr>
  <td><code>delete</code></td>
  <td>The configuration of the image set to delete.</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>delete.additionalImages</code></td>
  <td>The additional images configuration of the delete image set.</td>
  <td>Array of objects Example:<pre>additionalImages:&#10;  - name: registry.redhat.io/ubi8/ubi:latest</pre></td>
</tr>
<tr>
  <td><code>delete.additionalImages.name</code></td>
  <td>The tag or digest of the image to delete.</td>
  <td>String Example: <code>registry.redhat.io/ubi8/ubi:latest</code></td>
</tr>
<tr>
  <td><code>delete.additionalImages.targetRepo</code></td>
  <td>Specifies the repository path and URL of the image you want to delete.</td>
  <td>String</td>
</tr>
<tr>
  <td><code>delete.additionalImages.targetTag</code></td>
  <td>Specifies the tag applied to the image you want to delete.</td>
  <td>String</td>
</tr>
<tr>
  <td><code>delete.operators</code></td>
  <td>The Operators configuration of the delete image set.</td>
  <td>Array of objects Example:<pre>operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:{product-version}&#10;    packages:&#10;      - name: elasticsearch-operator&#10;        minVersion: '2.4.0'</pre></td>
</tr>
<tr>
  <td><code>delete.operators.catalog</code></td>
  <td>The Operator catalog to include in the delete image set.</td>
  <td>String Example: <code>registry.redhat.io/redhat/redhat-operator-index:v4.15</code></td>
</tr>
<tr>
  <td><code>delete.operators.full</code></td>
  <td>When true, deletes the full catalog, Operator package, or Operator channel.</td>
  <td>Boolean The default value is <code>false</code></td>
</tr>
<tr>
  <td><code>delete.operators.packages</code></td>
  <td>Operator packages configuration</td>
  <td>Array of objects Example:<pre>operators:&#10;  - catalog: registry.redhat.io/redhat/redhat-operator-index:{product-version}&#10;    packages:&#10;      - name: elasticsearch-operator&#10;        minVersion: '5.2.3-31'</pre></td>
</tr>
<tr>
  <td><code>delete.operators.packages.name</code></td>
  <td>The Operator package name to include in the delete image set.</td>
  <td>String Example: <code>elasticsearch-operator</code></td>
</tr>
<tr>
  <td><code>delete.operators.packages.channels</code></td>
  <td>Operator package channel configuration</td>
  <td>Object</td>
</tr>
<tr>
  <td><code>delete.operators.packages.channels.name</code></td>
  <td>The Operator channel name, unique within a package, to include in the delete image set.</td>
  <td>String Example: <code>fast</code> or <code>stable-v4.15</code></td>
</tr>
<tr>
  <td><code>delete.operators.packages.channels.maxVersion</code></td>
  <td>The highest version of the Operator to delete within the selected channel.</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>delete.operators.packages.channels.minVersion</code></td>
  <td>The lowest version of the Operator to delete within the selection in which it exists.</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>delete.operators.packages.maxVersion</code></td>
  <td>The highest version of the Operator to delete across all channels in which it exists.</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  <td><code>delete.operators.packages.minVersion</code></td>
  <td>The lowest version of the Operator to delete across all channels in which it exists.</td>
  <td>String Example: <code>5.2.3-31</code></td>
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform</code></td>{% endif %}
  {% if not microshift %}<td>The platform configuration of the image set</td>{% endif %}
  {% if not microshift %}<td>Object</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.architectures</code></td>{% endif %}
  {% if not microshift %}<td>The architecture of the platform release payload to delete.</td>{% endif %}
  {% if not microshift %}<td>Array of strings Example:<pre>architectures:&#10;  - amd64&#10;  - arm64&#10;  - multi&#10;  - ppc64le&#10;  - s390x</pre><br><br>The default value is <code>amd64</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.channels</code></td>{% endif %}
  {% if not microshift %}<td>The platform channel configuration of the image set.</td>{% endif %}
  {% if not microshift %}<td>Array of objects<br><br>Example:<pre>channels:&#10;  - name: stable-4.12&#10;  - name: stable-{product-version}</pre></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.channels.full</code></td>{% endif %}
  {% if not microshift %}<td>When <code>true</code>, sets the <code>minVersion</code> to the first release in the channel and the <code>maxVersion</code> to the last release in the channel.</td>{% endif %}
  {% if not microshift %}<td>Boolean The default value is <code>false</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.channels.name</code></td>{% endif %}
  {% if not microshift %}<td>Name of the release channel</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>stable-4.15</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.channels.minVersion</code></td>{% endif %}
  {% if not microshift %}<td>The minimum version of the referenced platform to be deleted.</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>4.12.6</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.channels.maxVersion</code></td>{% endif %}
  {% if not microshift %}<td>The highest version of the referenced platform to be deleted.</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>4.15.1</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.channels.shortestPath</code></td>{% endif %}
  {% if not microshift %}<td>Toggles between deleting the shortest path and deleting the full range.</td>{% endif %}
  {% if not microshift %}<td>Boolean The default value is <code>false</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.channels.type</code></td>{% endif %}
  {% if not microshift %}<td>Type of the platform to be deleted</td>{% endif %}
  {% if not microshift %}<td>String Example: <code>ocp</code> or <code>okd</code> The default is <code>ocp</code></td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>delete.platform.graph</code></td>{% endif %}
  {% if not microshift %}<td>Determines whether the OSUS graph is deleted as well on the mirror registry as well.</td>{% endif %}
  {% if not microshift %}<td>Boolean The default value is <code>false</code></td>{% endif %}
</tr>
</tbody>
</table>