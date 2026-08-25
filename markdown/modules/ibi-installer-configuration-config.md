{%- set _mod_docs_content_type = "REFERENCE" %}
# Reference specifications for the image-based-config.yaml manifest {id="ibi-installer-configuration-config_{{ context }}"}

The following content describes the specifications for the `image-based-config.yaml` manifest.  {._abstract}

The `openshift-install` program uses the `image-based-config.yaml` manifest to create a site-specific configuration ISO for image-based deployments of {{ sno }}. 

**Required specifications**

<table>
<tbody>
<tr>
  <td>Specification</td>
  <td>Type</td>
  <td>Description</td>
</tr>
<tr>
  <td><code>hostname</code></td>
  <td><code>string</code></td>
  <td>Define the name of the node for the {{ sno }} cluster.</td>
</tr>
</tbody>
</table>

**Optional specifications**

<table>
<tbody>
<tr>
  <td>Specification</td>
  <td>Type</td>
  <td>Description</td>
</tr>
<tr>
  <td><code>networkConfig</code></td>
  <td><code>string</code></td>
  <td>Specifies networking configurations for the host, for example:</td>
</tr>
<tr>
  <td><code>additionalNTPSources</code></td>
  <td><code>string</code></td>
  <td>Specifies a list of NTP sources for all cluster hosts. These NTP sources are added to any existing NTP sources in the cluster. You can use the hostname or IP address for the NTP source.</td>
</tr>
<tr>
  <td><code>releaseRegistry</code></td>
  <td><code>string</code></td>
  <td>Specifies the container image registry that you used for the release image of the seed cluster.</td>
</tr>
<tr>
  <td><code>nodeLabels</code></td>
  <td><code>map[string]string</code></td>
  <td>Specifies custom node labels for the {{ sno }} node, for example:</td>
</tr>
</tbody>
</table>