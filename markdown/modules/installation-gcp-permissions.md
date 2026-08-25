{% if context == "installing-gcp-user-infra" %}
{%- set template = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set template = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set template = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Required {{ gcp_short }} roles {id="installation-gcp-permissions_{{ context }}"}

When you attach the `Owner` role to the service account that you create, you grant that service account all permissions, including those that are required to install {{ product_title }}. If your organization’s security policies require a more restrictive set of permissions, you can create a service account with the following permissions. If you deploy your cluster into an existing virtual private cloud (VPC), the service account does not require certain networking permissions, which are noted in the following lists:

**Required roles for the installation program**

*   Compute Admin
*   Role Administrator
*   Security Admin
*   Service Account Admin
*   Service Account Key Admin
*   Service Account User
*   Storage Admin

**Required roles for creating network resources during installation**

*   DNS Administrator

**Required roles for using the Cloud Credential Operator in passthrough mode**

*   Compute Load Balancer Admin
*   Tag User

{% if template %}
**Required roles for user-provisioned {{ gcp_short }} infrastructure**

*   Cloud Infrastructure Manager Admin
{% endif %}

The following roles are applied to the service accounts that the control plane and compute machines use:

***{{ gcp_short }} service account roles***

<table>
<thead>
<tr>
  <th>Account</th>
  <th>Roles</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.5+</td>
  <td>Control Plane</td>
</tr>
<tr>
  <td><code>roles/compute.instanceAdmin</code></td>
  <td><code>roles/compute.networkAdmin</code></td>
</tr>
<tr>
  <td><code>roles/compute.securityAdmin</code></td>
  <td><code>roles/storage.admin</code></td>
</tr>
<tr>
  <td><code>roles/iam.serviceAccountUser</code>.3+</td>
  <td>Compute</td>
</tr>
<tr>
  <td><code>roles/compute.viewer</code></td>
  <td><code>roles/storage.admin</code></td>
</tr>
<tr>
  <td><code>roles/artifactregistry.reader</code></td>
</tr>
</tbody>
</table>

{% if context == "installing-gcp-user-infra" %}
{%- set template = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set template = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set template = false -%}
{% endif %}