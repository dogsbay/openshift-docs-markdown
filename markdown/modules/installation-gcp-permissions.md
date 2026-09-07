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

Your {{ gcp_first }} service account requires specific roles to install and manage an {{ product_title }} cluster, which you can scope based on your organization’s security requirements. {._abstract}

When you attach the `Owner` role to the service account that you create, you grant that service account all permissions, including those that are required to install {{ product_title }}. If your organization’s security policies require a more restrictive set of permissions, you can create a service account with the following permissions. If you deploy your cluster into an existing virtual private cloud (VPC), the service account does not require certain networking permissions, which are noted in the following lists:

The installation program requires the following roles:

*   Compute Admin
*   Role Administrator
*   Security Admin
*   Service Account Admin
*   Service Account Key Admin
*   Service Account User
*   Storage Admin

Creating network resources during installation requires the following role:

*   DNS Administrator

Using the Cloud Credential Operator in passthrough mode requires the following roles:

*   Compute Load Balancer Admin
*   Tag User

{% if template %}
User-provisioned {{ gcp_short }} infrastructure requires the following role:

*   Cloud Infrastructure Manager Admin
{% endif %}

The following roles are applied to the service accounts that the control plane and compute machines use:

**{{ gcp_short }} service account roles**

<table>
<thead>
<tr>
  <th>Account</th>
  <th>Roles</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="5">Control Plane</td>
  <td><code>roles/compute.instanceAdmin</code></td>
</tr>
<tr>
  <td><code>roles/compute.networkAdmin</code></td>
</tr>
<tr>
  <td><code>roles/compute.securityAdmin</code></td>
</tr>
<tr>
  <td><code>roles/storage.admin</code></td>
</tr>
<tr>
  <td><code>roles/iam.serviceAccountUser</code></td>
</tr>
<tr>
  <td rowspan="3">Compute</td>
  <td><code>roles/compute.viewer</code></td>
</tr>
<tr>
  <td><code>roles/storage.admin</code></td>
</tr>
<tr>
  <td><code>roles/artifactregistry.reader</code></td>
</tr>
</tbody>
</table>

{% if context == "installing-gcp-user-infra" %}
{%- set template = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set template = "" -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set template = "" -%}
{% endif %}