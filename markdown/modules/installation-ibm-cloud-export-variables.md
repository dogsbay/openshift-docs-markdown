{% if context == "installing-ibm-cloud-customizations" %}
{%- set ibm_vpc = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_vpc = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_vpc = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_vpc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exporting the API key {id="installation-ibm-cloud-export-variables_{{ context }}"}

You must set the API key you created as a global variable; the installation program ingests the variable during startup to set the API key. {._abstract}

**Prerequisites**

*   You have created either a user API key or service ID API key for your {{ ibm_cloud_name }} account.

**Procedure**

*   Export your API key for your account as a global variable:
    {%- if ibm_vpc %}
    ```terminal
    $ export IC_API_KEY=<api_key>
    ```
{% endif %}
{% if ibm_power_vs %}
    ```terminal
    $ export IBMCLOUD_API_KEY=<api_key>
    ```
{% endif %}


:::important

You must set the variable name exactly as specified; the installation program expects the variable name to be present during startup.

:::


{% if context == "installing-ibm-cloud-customizations" %}
{%- set ibm_vpc = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_vpc = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_vpc = false -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_vpc = false -%}
{% endif %}