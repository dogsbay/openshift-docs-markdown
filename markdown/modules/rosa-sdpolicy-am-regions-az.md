{% if context == "rosa-hcp-service-definition" %}
{%- set rosa_with_hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Regions and availability zones {id="rosa-sdpolicy-regions-az_{{ context }}"}

The following AWS regions are currently available
{%- if openshift_rosa_hcp %}
for {{ hcp_title }}.
{%- endif %}
{%- if not openshift_rosa_hcp %}
for Red&#160;Hat OpenShift 4 and are supported for {{ product_title }}.
{%- endif %}


:::note

Regions in China are not supported, regardless of their support on OpenShift Container Platform.

:::



:::note

For GovCloud (US) regions, you must submit an [Access request for Red&#160;Hat OpenShift Service on AWS (ROSA) FedRAMP](https://console.redhat.com/openshift/create/rosa/govcloud).

The following AWS GovCloud regions are supported:

*   `us-gov-west-1`
*   `us-gov-east-1`

For more information about AWS GovCloud regions, see the [The AWS GovCloud (US) User Guide](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html).

:::


**AWS regions**

<table>
<thead>
<tr>
  <th>Region</th>
  <th>Location</th>
  <th>Minimum ROSA version required</th>
  <th>AWS opt-in required</th>
</tr>
</thead>
<tbody>
<tr>
  <td>us-east-1</td>
  <td>N. Virginia</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>us-east-2</td>
  <td>Ohio</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>us-west-1</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>N. California</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>4.14</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>No</td>{% endif %}
</tr>
<tr>
  <td>us-west-2</td>
  <td>Oregon</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>af-south-1</td>
  <td>Cape Town</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>ap-east-1</td>
  <td>Hong Kong</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>ap-south-2</td>
  <td>Hyderabad</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>ap-southeast-3</td>
  <td>Jakarta</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>ap-southeast-4</td>
  <td>Melbourne</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  {% if openshift_rosa_hcp %}<td>ap-southeast-5</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Malaysia</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>4.16.34; 4.17.15</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Yes</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa_hcp %}<td>ap-southeast-6</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Auckland</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>4.19.18</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Yes</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa_hcp %}<td>ap-southeast-7</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Thailand</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>4.18</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Yes</td>{% endif %}
</tr>
<tr>
  <td>ap-south-1</td>
  <td>Mumbai</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>ap-northeast-3</td>
  <td>Osaka</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>ap-northeast-2</td>
  <td>Seoul</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>ap-southeast-1</td>
  <td>Singapore</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>ap-southeast-2</td>
  <td>Sydney</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>ap-northeast-1</td>
  <td>Tokyo</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>ca-central-1</td>
  <td>Central Canada</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>eu-central-1</td>
  <td>Frankfurt</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  {% if openshift_rosa_hcp %}<td>mx-central-1</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Mexico</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>4.18</td>{% endif %}
  {% if openshift_rosa_hcp %}<td>Yes</td>{% endif %}
</tr>
<tr>
  <td>eu-north-1</td>
  <td>Stockholm</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>eu-west-1</td>
  <td>Ireland</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>eu-west-2</td>
  <td>London</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>eu-south-1</td>
  <td>Milan</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>eu-west-3</td>
  <td>Paris</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>eu-south-2</td>
  <td>Spain</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>eu-central-2</td>
  <td>Zurich</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>me-south-1</td>
  <td>Bahrain</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>me-central-1</td>
  <td>UAE</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  <td>sa-east-1</td>
  <td>São Paulo</td>
  <td>4.14</td>
  <td>No</td>
</tr>
<tr>
  <td>il-central-1</td>
  <td>Tel Aviv</td>
  <td>4.15</td>
  <td>Yes</td>
</tr>
<tr>
  <td>ca-west-1</td>
  <td>Calgary</td>
  <td>4.14</td>
  <td>Yes</td>
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>us-gov-east-1</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>AWS GovCloud - US-East</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>4.14</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>No</td>{% endif %}
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td>us-gov-west-1</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>AWS GovCloud - US-West</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>4.14</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>No</td>{% endif %}
</tr>
</tbody>
</table>

Clusters can only be deployed in regions with at least 3 availability zones. For more information, see the [Regions and Availability Zones](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/) section in the AWS documentation.

Each new
{%- if not openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
{%- if openshift_rosa_hcp %}
{{ hcp_title }}
{%- endif %}
cluster is installed within
{%- if openshift_rosa_hcp %}
a
{%- endif %}
{%- if not openshift_rosa_hcp %}
an installer-created or
{%- endif %}
preexisting Virtual Private Cloud (VPC) in a single region, with the option to deploy
{%- if not openshift_rosa_hcp %}
into a single availability zone (Single-AZ) or across multiple availability zones (Multi-AZ).
{%- endif %}
{%- if openshift_rosa_hcp %}
up to the total number of availability zones for the given region.
{%- endif %}
This provides cluster-level network and resource isolation, and enables cloud-provider VPC settings, such as VPN connections and VPC Peering. Persistent volumes (PVs) are backed by Amazon Elastic Block Storage (Amazon EBS), and are specific to the availability zone in which they are provisioned. Persistent volume claims (PVCs) do not bind to a volume until the associated pod resource is assigned into a specific availability zone to prevent unschedulable pods. Availability zone-specific resources are only usable by resources in the same availability zone.


:::warning

The region
{%- if not openshift_rosa_hcp %}
and the choice of single or multiple availability zone
{%- endif %}
cannot be changed after a cluster has been deployed.

:::


{% if context == "rosa-hcp-service-definition" %}
{%- set rosa_with_hcp = "" -%}
{% endif %}