{% if context == "installing-gcp-user-infra" %}
{%- set template = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set template = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set template = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ gcp_short }} account limits {id="installation-gcp-limits_{{ context }}"}

The {{ product_title }} cluster uses a number of {{ gcp_first }}
components, but the default
[Quotas](https://cloud.google.com/docs/quota)
do not affect your ability to install a default {{ product_title }} cluster.

A default cluster, which contains three compute and three control plane machines,
uses the following resources. Note that some resources are required only during
the bootstrap process and are removed after the cluster deploys.

**{{ gcp_short }} resources used in a default cluster**

<table>
<thead>
<tr>
  <th>Service</th>
  <th>Component</th>
  <th>Location</th>
  <th>Total resources required</th>
  <th>Resources removed after bootstrap</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Service account</td>
  <td>IAM</td>
  <td>Global</td>
  <td>6</td>
  <td>1</td>
</tr>
<tr>
  <td>Firewall rules</td>
  <td>Compute</td>
  <td>Global</td>
  <td>11</td>
  <td>1</td>
</tr>
<tr>
  <td>Forwarding rules</td>
  <td>Compute</td>
  <td>Global</td>
  <td>2</td>
  <td>0</td>
</tr>
<tr>
  <td>In-use global IP addresses</td>
  <td>Compute</td>
  <td>Global</td>
  <td>4</td>
  <td>1</td>
</tr>
<tr>
  <td>Health checks</td>
  <td>Compute</td>
  <td>Global</td>
  <td>3</td>
  <td>0</td>
</tr>
<tr>
  <td>Images</td>
  <td>Compute</td>
  <td>Global</td>
  <td>1</td>
  <td>0</td>
</tr>
<tr>
  <td>Networks</td>
  <td>Compute</td>
  <td>Global</td>
  <td>2</td>
  <td>0</td>
</tr>
<tr>
  <td>Static IP addresses</td>
  <td>Compute</td>
  <td>Region</td>
  <td>4</td>
  <td>1</td>
</tr>
<tr>
  <td>Routers</td>
  <td>Compute</td>
  <td>Global</td>
  <td>1</td>
  <td>0</td>
</tr>
<tr>
  <td>Routes</td>
  <td>Compute</td>
  <td>Global</td>
  <td>2</td>
  <td>0</td>
</tr>
<tr>
  <td>Subnetworks</td>
  <td>Compute</td>
  <td>Global</td>
  <td>2</td>
  <td>0</td>
</tr>
<tr>
  <td>Target pools</td>
  <td>Compute</td>
  <td>Global</td>
  <td>3</td>
  <td>0</td>
</tr>
<tr>
  <td>CPUs</td>
  <td>Compute</td>
  <td>Region</td>
  <td>28</td>
  <td>4</td>
</tr>
<tr>
  <td>Persistent disk SSD (GB)</td>
  <td>Compute</td>
  <td>Region</td>
  <td>896</td>
  <td>128</td>
</tr>
<tr>
  {% if template %}<td>Service account</td>{% endif %}
  {% if template %}<td>IAM</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>6</td>{% endif %}
  {% if template %}<td>1</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Firewall rules</td>{% endif %}
  {% if template %}<td>Networking</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>11</td>{% endif %}
  {% if template %}<td>1</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Forwarding rules</td>{% endif %}
  {% if template %}<td>Compute</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>2</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Health checks</td>{% endif %}
  {% if template %}<td>Compute</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>2</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Images</td>{% endif %}
  {% if template %}<td>Compute</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>1</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Networks</td>{% endif %}
  {% if template %}<td>Networking</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>1</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Routers</td>{% endif %}
  {% if template %}<td>Networking</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>1</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Routes</td>{% endif %}
  {% if template %}<td>Networking</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>2</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Subnetworks</td>{% endif %}
  {% if template %}<td>Compute</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>2</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
<tr>
  {% if template %}<td>Target pools</td>{% endif %}
  {% if template %}<td>Networking</td>{% endif %}
  {% if template %}<td>Global</td>{% endif %}
  {% if template %}<td>2</td>{% endif %}
  {% if template %}<td>0</td>{% endif %}
</tr>
</tbody>
</table>


:::note

If any of the quotas are insufficient during installation, the installation program displays an error that states both which quota was exceeded and the region.

:::


Be sure to consider your actual cluster size, planned cluster growth, and any usage from other clusters that are associated with your account. The CPU, static IP addresses, and persistent disk SSD (storage) quotas are the ones that are most likely to be insufficient.

If you plan to deploy your cluster in one of the following regions, you will exceed the maximum storage quota and are likely to exceed the CPU quota limit:

*   `asia-east2`
*   `asia-northeast2`
*   `asia-south1`
*   `australia-southeast1`
*   `europe-north1`
*   `europe-west2`
*   `europe-west3`
*   `europe-west6`
*   `northamerica-northeast1`
*   `southamerica-east1`
*   `us-west2`

You can increase resource quotas from the [{{ gcp_short }} console](https://console.cloud.google.com/iam-admin/quotas), but you might need to file a support ticket. Be sure to plan your cluster size early so that you can allow time to resolve the support ticket before you install your {{ product_title }} cluster.

{% if context == "installing-gcp-user-infra" %}
{%- set template = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set template = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set template = false -%}
{% endif %}