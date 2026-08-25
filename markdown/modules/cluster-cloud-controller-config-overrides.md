{%- set _mod_docs_content_type = "REFERENCE" %}
# Options that the Operator overrides {id="cluster-cloud-controller-config-overrides_{{ context }}"}

The CCM Operator overrides specific options, which you might recognize from configuring {{ rh_openstack }}. Do not configure these options. The options are for informational purposes only. {._abstract}

***Options overridden by the CCM Operator***

<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>auth-url</code></td>
  <td>The {{ rh_openstack }} Identity service URL. For example, <code>http://128.110.154.166/identity</code>.</td>
</tr>
<tr>
  <td><code>os-endpoint-type</code></td>
  <td>The type of endpoint to use from the service catalog.</td>
</tr>
<tr>
  <td><code>username</code></td>
  <td>The Identity service user name.</td>
</tr>
<tr>
  <td><code>password</code></td>
  <td>The Identity service user password.</td>
</tr>
<tr>
  <td><code>domain-id</code></td>
  <td>The Identity service user domain ID.</td>
</tr>
<tr>
  <td><code>domain-name</code></td>
  <td>The Identity service user domain name.</td>
</tr>
<tr>
  <td><code>tenant-id</code></td>
  <td>The Identity service project ID. Leave this option unset if you are using Identity service application credentials.</td>
</tr>
<tr>
  <td><code>tenant-name</code></td>
  <td>The Identity service project name.</td>
</tr>
<tr>
  <td><code>tenant-domain-id</code></td>
  <td>The Identity service project domain ID.</td>
</tr>
<tr>
  <td><code>tenant-domain-name</code></td>
  <td>The Identity service project domain name.</td>
</tr>
<tr>
  <td><code>user-domain-id</code></td>
  <td>The Identity service user domain ID.</td>
</tr>
<tr>
  <td><code>user-domain-name</code></td>
  <td>The Identity service user domain name.</td>
</tr>
<tr>
  <td><code>use-clouds</code></td>
  <td>Whether to fetch authorization credentials from a <code>clouds.yaml</code> file. Options set in this section are prioritized over values read from the <code>clouds.yaml</code> file.<br><br>The CCM Operator searches for the file in the following places:<br><br><ol><li>The value of the <code>clouds-file</code> option.</li><li>A file path stored in the environment variable <code>OS_CLIENT_CONFIG_FILE</code>.</li><li>The directory <code>pkg/openstack</code>.</li><li>The directory <code>~/.config/openstack</code>.</li><li>The directory <code>/etc/openstack</code>.</li></ol></td>
</tr>
<tr>
  <td><code>clouds-file</code></td>
  <td>The file path of a <code>clouds.yaml</code> file. It is used if the <code>use-clouds</code> option is set to <code>true</code>.</td>
</tr>
<tr>
  <td><code>cloud</code></td>
  <td>The named cloud in the <code>clouds.yaml</code> file that you want to use. It is used if the <code>use-clouds</code> option is set to <code>true</code>.</td>
</tr>
</tbody>
</table>