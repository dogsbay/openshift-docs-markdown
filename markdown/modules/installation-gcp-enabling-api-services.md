{% if context == "installing-gcp-user-infra" %}
{%- set template = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set template = true -%}
{% endif %}
{% if context == "installing-gcp-restricted-networks" %}
{%- set template = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling API services in {{ gcp_short }} {id="installation-gcp-enabling-api-services_{{ context }}"}

Your {{ gcp_first }} project requires access to several API services
to complete {{ product_title }} installation.

**Prerequisites**

*   You created a project to host your cluster.

**Procedure**

*   Enable the following required API services in the project that hosts your
cluster. You may also enable optional API services which are not required for installation. See
[Enabling services](https://cloud.google.com/service-usage/docs/enable-disable#enabling)
in the {{ gcp_short }} documentation.

    **Required API services**

<table>
<thead>
<tr>
  <th>API service</th>
  <th>Console service name</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Compute Engine API</td>
  <td><code>compute.googleapis.com</code></td>
</tr>
<tr>
  <td>Cloud Resource Manager API</td>
  <td><code>cloudresourcemanager.googleapis.com</code></td>
</tr>
<tr>
  <td>Cloud DNS API</td>
  <td><code>dns.googleapis.com</code></td>
</tr>
<tr>
  <td>IAM Service Account Credentials API</td>
  <td><code>iamcredentials.googleapis.com</code></td>
</tr>
<tr>
  <td>Identity and Access Management (IAM) API</td>
  <td><code>iam.googleapis.com</code></td>
</tr>
<tr>
  <td>Service Usage API</td>
  <td><code>serviceusage.googleapis.com</code></td>
</tr>
</tbody>
</table>


    **Optional API services**

<table>
<thead>
<tr>
  <th>API service</th>
  <th>Console service name</th>
</tr>
</thead>
<tbody>
<tr>
  {% if template %}<td>Cloud Deployment Manager V2 API</td>{% endif %}
  {% if template %}<td><code>deploymentmanager.googleapis.com</code></td>{% endif %}
</tr>
<tr>
  <td>{{ gcp_full }} APIs</td>
  <td><code>cloudapis.googleapis.com</code></td>
</tr>
<tr>
  <td>Service Management API</td>
  <td><code>servicemanagement.googleapis.com</code></td>
</tr>
<tr>
  <td>{{ gcp_full }} Storage JSON API</td>
  <td><code>storage-api.googleapis.com</code></td>
</tr>
<tr>
  <td>Cloud Storage</td>
  <td><code>storage-component.googleapis.com</code></td>
</tr>
</tbody>
</table>

{% if context == "installing-gcp-user-infra" %}
{%- set template = "" -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set template = "" -%}
{% endif %}
{% if context == "installing-gcp-restricted-networks" %}
{%- set template = "" -%}
{% endif %}