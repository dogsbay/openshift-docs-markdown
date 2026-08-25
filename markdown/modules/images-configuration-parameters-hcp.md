{%- set _mod_docs_content_type = "REFERENCE" %}
# Image controller configuration parameters for {{ product_title }} {id="images-configuration-parameters-hcp_{{ context }}"}

The `image.config.openshift.io/cluster` resource holds cluster-wide information about how to handle images. The resource exists, but it is read only and can only be changed through supported tools such as the ROSA CLI (`rosa`). The canonical and only valid name is `cluster`. It can be configured in {{ product_title }} through `rosa` commands. {._abstract}


:::note

Parameters such as `DisableScheduledImport`, `MaxImagesBulkImportedPerRepository`, `MaxScheduledImportsPerMinute`, `ScheduledImageImportMinimumIntervalSeconds`, `InternalRegistryHostname` are not configurable.

:::


<table>
<thead>
<tr>
  <th>Parameters for ROSA CLI</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>registry-config-allowed-registries</code></td>
  <td>Registries for which image pull and push actions are allowed. To specify all subdomains, add the asterisk (<code>\<strong></code>) wildcard character as a prefix to the domain name. For example, <code></strong>.example.com</code>. You can specify an individual repository within a registry. For example, <code>reg1.io/myrepo/myapp:latest</code>. All other registries are blocked. The format should be a comma-separated list of allowed registries. For example, <code>allowed.io, allowed.io2</code>.</td>
</tr>
<tr>
  <td><code>registry-config-insecure-registries</code></td>
  <td>Registries which do not have a valid TLS certificate or only support HTTP connections. To specify all subdomains, add the asterisk (<code>\<strong></code>) wildcard character as a prefix to the domain name. For example, <code></strong>.example.com</code>. You can specify an individual repository within a registry. For example, <code>reg1.io/myrepo/myapp:latest</code>. The format should be a comma-separated list of insecure registries. For example, <code>insecure.io, insecure.io2</code>.</td>
</tr>
<tr>
  <td><code>registry-config-blocked-registries</code></td>
  <td>Registries for which image pull and push actions are denied. To specify all subdomains, add the asterisk (<code>\<strong></code>) wildcard character as a prefix to the domain name. For example, <code></strong>.example.com</code>. You can specify an individual repository within a registry. For example, <code>reg1.io/myrepo/myapp:latest</code>. All other registries are allowed. The format should be a comma-separated list of blocked registries. For example, <code>blocked.io, blocked.io2</code>.</td>
</tr>
<tr>
  <td><code>registry-config-allowed-registries-for-import</code></td>
  <td>Specifies configuration that determines how the container runtime should treat individual registries when accessing images for builds and pods. For example, whether or not to allow insecure access. It does not contain configuration for the internal cluster registry. Limits the container image registries from which normal users can import images. The format should be a comma-separated list of <code>domainName:insecure</code>. <code>domainName</code> specifies a domain name for the registry. <code>insecure</code> indicates whether the registry is secure or insecure.</td>
</tr>
<tr>
  <td><code>registry-config-additional-trusted-ca</code></td>
  <td>A JSON file containing the registry hostname as the key, and the Privacy Enhanced Mail (PEM)-encoded certificate as the value, for each additional registry CA to trust.</td>
</tr>
</tbody>
</table>


:::warning

When the `allowedRegistries` parameter is defined, all registries are blocked unless explicitly listed. To prevent pod failure, a list of Red&#160;Hat registries is automatically allowlisted, as they are required by payload images within your environment. The current list consists of `image-registry.openshift-image-registry.svc:5000,quay.io,registry.redhat.io` and it is also visible when running the `rosa describe cluster` command.

:::