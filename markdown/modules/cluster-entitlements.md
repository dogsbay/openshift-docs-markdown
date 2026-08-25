{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if not openshift_origin %}
# Internet access for {{ product_title }} {id="cluster-entitlements_{{ context }}"}

In {{ product_title }} {{ product_version }}, you require access to the internet to
{%- if not restricted %}
install
{% endif %}
{% if restricted %}
obtain the images that are necessary to install
{%- endif %}
your cluster. {._abstract}

You must have internet access to perform the following actions:

*   Access {{ hybrid_console }} to download the installation program and perform subscription management. If the cluster has internet access and you do not disable Telemetry, that service automatically entitles your cluster.
*   Access Quay.io to obtain the packages that are required to install your cluster.
*   Obtain the packages that are required to perform cluster updates.
{%- if openshift_enterprise or openshift_webscale %}

{% if not restricted %}

:::important

If your cluster cannot have direct internet access, you can perform a restricted network installation on some types of infrastructure that you provision. During that process, you download the required content and use it to populate a mirror registry with the installation packages. With some installation types, the environment that you install your cluster in will not require internet access. Before you update the cluster, you update the content of the mirror registry.

:::

{% endif %}

{% endif %}
{% endif %}

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set restricted = false -%}
{% endif %}