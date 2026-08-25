{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-sts-creating-a-cluster-with-customization" %}
{%- set custom_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}
{% if context == "rosa-hcp-sts-creating-a-cluster-quickly" %}
{%- set rosa_hcp = true -%}
{% endif %}
{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set rosa_standalone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS account association {id="rosa-sts-understanding-aws-account-association_{{ context }}"}

Before you can use {{ cluster_manager_first }} on the {{ hybrid_console_url }} to create
{%- if rosa_hcp %}
{{ hcp_title }}
{% endif %}
{% if not rosa_hcp %}
{{ product_title }} (ROSA)
{%- endif %}
clusters that use the AWS Security Token Service (STS), you must associate your AWS account with your Red&#160;Hat organization. You can associate your account by creating and linking the following IAM roles. {._abstract}


{{ cluster_manager }} role
:   Create an {{ cluster_manager }} IAM role and link it to your Red&#160;Hat organization.

    You can apply basic or administrative permissions to the {{ cluster_manager }} role. The basic permissions enable cluster maintenance using {{ cluster_manager }}. The administrative permissions enable automatic deployment of the cluster-specific Operator roles and the OpenID Connect (OIDC) provider using {{ cluster_manager }}.
{%- if quick_install %}

    You can use the administrative permissions with the {{ cluster_manager }} role to deploy a cluster quickly.
{% endif %}


User role
:   Create a user IAM role and link it to your Red&#160;Hat user account. The Red&#160;Hat user account must exist in the Red&#160;Hat organization that is linked to your {{ cluster_manager }} role.

    The user role is used by Red&#160;Hat to verify your AWS identity when you use the {{ cluster_manager }} {{ hybrid_console_second }} to install a cluster and the required STS resources.

{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-sts-creating-a-cluster-with-customization" %}
{%- set custom_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}
{% if context == "rosa-hcp-sts-creating-a-cluster-quickly" %}
{%- set rosa_hcp = true -%}
{% endif %}
{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set rosa_standalone = true -%}
{% endif %}