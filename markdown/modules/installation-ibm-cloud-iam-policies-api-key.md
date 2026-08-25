{% if context == "installing-ibm-cloud-account" %}
{%- set ibm_vpc = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-account-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ ibm_cloud_title }} IAM policies and API key {id="installation-ibm-cloud-iam-policies-api-key_{{ context }}"}

To install {{ product_title }} into your {{ ibm_cloud_name }} account, the installation program requires an IAM API key, which provides authentication and authorization to access {{ ibm_cloud_name }} service APIs. You can use an existing IAM API key that contains the required policies or create a new one. {._abstract}

For an {{ ibm_cloud_name }} IAM overview, see the "{{ ibm_cloud_name }} IAM overview" documentation.

{% if ibm_vpc %}
## Required access policies {id="required-access-policies-ibm-cloud_{{ context }}"}

You must assign the required access policies to your {{ ibm_cloud_name }} account.

**Required access policies**

| Service type | Service | Access policy scope | Platform access | Service access |
| --- | --- | --- | --- | --- |
| Account management | IAM Identity Service | All resources or a subset of resources | Editor, Operator, Viewer, Administrator | Service ID creator |
| Account management | Identity and Access Management | All resources | Editor, Operator, Viewer, Administrator |  |
| Account management | Resource group only | All resource groups in the account | Administrator |  |
| IAM services | Cloud Object Storage | All resources or a subset of resources | Editor, Operator, Viewer, Administrator | Reader, Writer, Manager, Content Reader, Object Reader, Object Writer |
| IAM services | Internet Services | All resources or a subset of resources | Editor, Operator, Viewer, Administrator | Reader, Writer, Manager |
| IAM services | DNS Services | All resources or a subset of resources | Editor, Operator, Viewer, Administrator | Reader, Writer, Manager |
| IAM services | VPC Infrastructure Services | All resources or a subset of resources | Editor, Operator, Viewer, Administrator | Reader, Writer, Manager |

where:


`All resources or a subset of resources`
:   The policy access scope should be set based on how granular you want to assign access. The scope can be set to **All resources** or **Resources based on selected attributes**.

`Identity and Access Management`
:   This access policy is optional. It is only required if you want the installation program to create a resource group. For more information about resource groups, see the "{{ ibm_name }} resource groups documentation".
{% endif %}

{% if ibm_power_vs %}
## Prerequisite permissions {id="pre-requisite-permissions-ibm-cloud_{{ context }}"}

**Prerequisite permissions**

| Role | Access |
| --- | --- |
| Viewer, Operator, Editor, Administrator, Reader, Writer, Manager | Internet Services service in &lt;resource_group> resource group |
| Viewer, Operator, Editor, Administrator, User API key creator, Service ID creator | IAM Identity Service service |
| Viewer, Operator, Administrator, Editor, Reader, Writer, Manager, Console Administrator | VPC Infrastructure Services service in &lt;resource_group> resource group |
| Viewer | Resource Group: Access to view the resource group itself. The resource type should equal `Resource group`, with a value of &lt;your_resource_group_name>. |

## Cluster-creation permissions {id="cluster-creation-permissions-ibm-cloud_{{ context }}"}

**Cluster-creation permissions**

| Role | Access |
| --- | --- |
| Viewer | &lt;resource_group> (Resource Group Created for Your Team) |
| Viewer, Operator, Editor, Reader, Writer, Manager | All Identity and IAM enabled services in Default resource group |
| Viewer, Reader | Internet Services service |
| Viewer, Operator, Reader, Writer, Manager, Content Reader, Object Reader, Object Writer, Editor | Cloud Object Storage service |
| Viewer | Default resource group: The resource type should equal `Resource group`, with a value of `Default`. If your account administrator changed your account’s default resource group to something other than Default, use that value instead. |
| Viewer, Operator, Editor, Reader, Manager | Workspace for {{ ibm_power_server_name }} service in &lt;resource_group> resource group |
| Viewer, Operator, Editor, Reader, Writer, Manager, Administrator | Internet Services service in &lt;resource_group> resource group: CIS functional scope string equals reliability |
| Viewer, Operator, Editor | Transit Gateway service |
| Viewer, Operator, Editor, Administrator, Reader, Writer, Manager, Console Administrator | VPC Infrastructure Services service &lt;resource_group> resource group |

{% endif %}

## Access policy assignment {id="access-policy-assignment-ibm-cloud_{{ context }}"}

{% if ibm_vpc %}
In {{ ibm_cloud_name }} IAM, access policies can be attached to different subjects:
{% endif %}
{% if ibm_power_vs %}
In {{ ibm_cloud_name }} IAM, access policies can be attached to different subjects:
{% endif %}

*   Access group (Recommended)
*   Service ID
*   User


:::note

The recommended method is to define IAM access policies in an access group. This helps organize all the access required for {{ product_title }} and enables you to onboard users and service IDs to this group. You can also assign access to users and service IDs directly, if desired.

For more information, see "Access groups" and "Users and service IDs".

:::


{% if context == "installing-ibm-cloud-account" %}
{%- set ibm_vpc = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-account-power-vs" %}
{%- set ibm_power_vs = "" -%}
{% endif %}