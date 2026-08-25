{%- set _mod_docs_content_type = "REFERENCE" %}
# ImageClusterInstall resource API specifications {id="ibi-image-cluster-install-api-spec_{{ context }}"}

The following content describes the API specifications for the `ImageClusterInstall` resource. This resource is the endpoint for the Image Based Install Operator. {._abstract}

**Required specifications**

<table>
<tbody>
<tr>
  <td>Specification</td>
  <td>Type</td>
  <td>Description</td>
</tr>
<tr>
  <td><code>imageSetRef</code></td>
  <td><code>string</code></td>
  <td>Specify the name of the <code>ClusterImageSet</code> resource that defines the release images for the deployment.</td>
</tr>
<tr>
  <td><code>hostname</code></td>
  <td><code>string</code></td>
  <td>Specify the hostname for the cluster.</td>
</tr>
<tr>
  <td><code>sshKey</code></td>
  <td><code>string</code></td>
  <td>Specify your SSH key to provide SSH access to the target host.</td>
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
  <td><code>clusterDeploymentRef</code></td>
  <td><code>string</code></td>
  <td>Specify the name of the <code>ClusterDeployment</code> resource that you want to use for the image-based installation of the target host.</td>
</tr>
<tr>
  <td><code>clusterMetadata</code></td>
  <td><code>string</code></td>
  <td>After the deployment completes, this specification is automatically populated with metadata information about the cluster, including the <code>cluster-admin</code> kubeconfig credentials for logging in to the cluster.</td>
</tr>
<tr>
  <td><code>imageDigestSources</code></td>
  <td><code>string</code></td>
  <td>Specifies the sources or repositories for the release-image content, for example:</td>
</tr>
<tr>
  <td><code>extraManifestsRefs</code></td>
  <td><code>string</code></td>
  <td>Specify a <code>ConfigMap</code> resource containing additional manifests to be applied to the target cluster.</td>
</tr>
<tr>
  <td><code>bareMetalHostRef</code></td>
  <td><code>string</code></td>
  <td>Specify the <code>bareMetalHost</code> resource to use for the cluster deployment</td>
</tr>
<tr>
  <td><code>machineNetworks</code></td>
  <td><code>string</code></td>
  <td>Specify the public Classless Inter-Domain Routing (CIDR) of the external network. For dual-stack networking, you can specify both IPv4 and IPv6 CIDRs using a list format. The first CIDR in the list is the primary address family and must match the primary address family of the seed cluster.</td>
</tr>
<tr>
  <td><code>proxy</code></td>
  <td><code>string</code></td>
  <td>Specifies proxy settings for the cluster, for example:</td>
</tr>
<tr>
  <td><code>caBundleRef</code></td>
  <td><code>string</code></td>
  <td>Specify a <code>ConfigMap</code> resource containing the new bundle of trusted certificates for the host.</td>
</tr>
</tbody>
</table>