{%- set _mod_docs_content_type = "REFERENCE" %}
# Image Registry Operator configuration parameters for {{ rh_openstack }} Swift {id="registry-operator-configuration-resource-overview-openstack-swift_{{ context }}"}

The following parameters are available for you to configure your {{ rh_openstack_first }} Swift
registry storage. {._abstract}

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>authURL</code></td>
  <td>Defines the URL for obtaining the authentication token. This value is optional.</td>
</tr>
<tr>
  <td><code>authVersion</code></td>
  <td>Specifies the Auth version of {{ rh_openstack }}, for example, <code>authVersion: "3"</code>. This value is optional.</td>
</tr>
<tr>
  <td><code>container</code></td>
  <td>Defines the name of a Swift container for storing registry data. This value is optional.</td>
</tr>
<tr>
  <td><code>domain</code></td>
  <td>Specifies the {{ rh_openstack }} domain name for the Identity v3 API. This value is optional.</td>
</tr>
<tr>
  <td><code>domainID</code></td>
  <td>Specifies the {{ rh_openstack }} domain ID for the Identity v3 API. This value is optional.</td>
</tr>
<tr>
  <td><code>tenant</code></td>
  <td>Defines the {{ rh_openstack }} tenant name to be used by the registry. This value is optional.</td>
</tr>
<tr>
  <td><code>tenantID</code></td>
  <td>Defines the {{ rh_openstack }} tenant ID to be used by the registry. This value is optional.</td>
</tr>
<tr>
  <td><code>regionName</code></td>
  <td>Defines the {{ rh_openstack }} region in which the container exists. This value is optional.</td>
</tr>
</tbody>
</table>