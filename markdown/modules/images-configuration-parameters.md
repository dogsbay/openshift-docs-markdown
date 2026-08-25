{%- set _mod_docs_content_type = "REFERENCE" %}
# Image controller configuration parameters {id="images-configuration-parameters_{{ context }}"}

You can configure certain parameters that handle images cluster-wide in the `spec` of the `image.config.openshift.io/cluster` resource. {._abstract}


:::note

The following non-configurable parameters are not listed in the table:

*   `DisableScheduledImport`
*   `MaxImagesBulkImportedPerRepository`
*   `MaxScheduledImportsPerMinute`
*   `ScheduledImageImportMinimumIntervalSeconds`
*   `InternalRegistryHostname`

:::


***Image controller configuration parameters***

<table>
<thead>
<tr>
  <th>Field name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>kind.Image</code></td>
  <td>Holds cluster-wide information about how to handle images. The canonical, and only valid name for this CR is <code>cluster</code>.</td>
</tr>
<tr>
  <td><code>allowedRegistriesForImport</code></td>
  <td>Limits the container image registries from which normal users can import images. Set this list to the registries that you trust to contain valid images, and that you want applications to be able to import from. Users with permission to create images or <code>ImageStreamMappings</code> from the API are not affected by this policy. Typically only cluster administrators have the appropriate permissions.<br><br>Every element of this list contains a location of the registry specified by the registry domain name.<br><br><code>domainName</code>: Specifies a domain name for the registry. If the registry uses a non-standard <code>80</code> or <code>443</code> port, the port should be included in the domain name as well.<br><br><code>insecure</code>: Insecure indicates whether the registry is secure or insecure. By default, if not otherwise specified, the registry is assumed to be secure.</td>
</tr>
<tr>
  <td><code>additionalTrustedCA</code></td>
  <td>A reference to a config map containing additional CAs that should be trusted during <code>image stream import</code>, <code>pod image pull</code>, <code>openshift-image-registry pullthrough</code>, and builds.<br><br>The namespace for this config map is <code>openshift-config</code>. The format of the config map is to use the registry hostname as the key, and the PEM-encoded certificate as the value, for each additional registry CA to trust.</td>
</tr>
<tr>
  <td><code>externalRegistryHostnames</code></td>
  <td>Provides the hostnames for the default external image registry. The external hostname should be set only when the image registry is exposed externally. The first value is used in <code>publicDockerImageRepository</code> field in image streams. The value must be in <code>hostname[:port]</code> format.</td>
</tr>
<tr>
  <td><code>registrySources</code></td>
  <td>Contains configuration that determines how the container runtime should treat individual registries when accessing images for builds and pods. For example, whether or not to allow insecure access. It does not contain configuration for the internal cluster registry.<br><br><code>insecureRegistries</code>: Registries that do not have a valid TLS certificate or only support HTTP connections. To specify all subdomains, add the asterisk (<code>\<strong></code>) wildcard character as a prefix to the domain name. For example, <code></strong>.example.com</code>. You can specify an individual repository within a registry. For example: <code>reg1.io/myrepo/myapp:latest</code>.<br><br><code>blockedRegistries</code>: Registries for which image pull and push actions are denied. To specify all subdomains, add the asterisk (<code>\<strong></code>) wildcard character as a prefix to the domain name. For example, <code></strong>.example.com</code>. You can specify an individual repository within a registry. For example: <code>reg1.io/myrepo/myapp:latest</code>. All other registries are allowed.<br><br><code>allowedRegistries</code>: Registries for which image pull and push actions are allowed. To specify all subdomains, add the asterisk (<code>\<strong></code>) wildcard character as a prefix to the domain name. For example, <code></strong>.example.com</code>. You can specify an individual repository within a registry. For example: <code>reg1.io/myrepo/myapp:latest</code>. All other registries are blocked.<br><br><code>containerRuntimeSearchRegistries</code>: Registries for which image pull and push actions are allowed using image short names. All other registries are blocked.<br><br>You can set either <code>blockedRegistries</code> or <code>allowedRegistries</code>, but not both.</td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>imageStreamImportMode</code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Controls the import mode behavior of image streams.<br><br>You must enable the <code>TechPreviewNoUpgrade</code> feature set in the <code>FeatureGate</code> custom resource (CR) to enable the <code>imageStreamImportMode</code> feature.For more information about feature gates, see "Understanding feature gates".<br><br>You can set the <code>imageStreamImportMode</code> field to either of the following values:<br><br><ul><li><code>Legacy</code>: Indicates that the legacy behavior must be used. The legacy behavior discards the manifest list and imports a single sub-manifest. In this case, the platform is chosen in the following order of priority:</li></ul><ol><li>Tag annotations: Determining the platform by using the platform-specific annotations in the image tags.</li><li>Control plane architecture or the operating system: Selecting the platform based on the architecture or the operating system of the control plane.</li><li><code>linux/amd64</code>: If no platform is selected by the preceeding methods, the <code>linux/amd64</code> platform is selected.</li><li>The first manifest in the list is selected.</li></ol><ul><li><code>PreserveOriginal</code>: Indicates that the original manifest is preserved. The manifest list and its sub-manifests are imported.</li></ul>If you specify a value for this field, the value is applied to the newly created image stream tags that do not already have this value manually set.<br><br>If you do not configure this field, the behavior is decided based on the payload type advertised by the <code>ClusterVersion</code> status. In this case, the platform is chosen as follows:<br><br><ul><li>The single architecture payload implies that the <code>Legacy</code> mode is applicable.</li><li>The multi payload implies that the <code>PreserveOriginal</code> mode is applicable.</li></ul>For information about importing manifest lists, see "Working with manifest lists".<br><br>{%- set FeatureName = "`imageStreamImportMode`" %}{% include "./snippets/technology-preview.md" %}</td>{% endif %}
</tr>
</tbody>
</table>

{% leveloffset +1 %}{% include "./snippets/allowed-registries-warning.md" %}{% endleveloffset %}

The `status` field of the `image.config.openshift.io/cluster` resource holds observed values from the cluster.

***Image controller status field parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>internalRegistryHostname</code></td>
  <td>Set by the Image Registry Operator, which controls the <code>internalRegistryHostname</code>. It sets the hostname for the default {{ product_registry }}. The value must be in <code>hostname[:port]</code> format. For backward compatibility, you can still use the <code>OPENSHIFT_DEFAULT_REGISTRY</code> environment variable, but this setting overrides the environment variable.</td>
</tr>
<tr>
  <td><code>externalRegistryHostnames</code></td>
  <td>Set by the Image Registry Operator, provides the external hostnames for the image registry when it is exposed externally. The first value is used in <code>publicDockerImageRepository</code> field in image streams. The values must be in <code>hostname[:port]</code> format.</td>
</tr>
</tbody>
</table>