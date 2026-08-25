{% if context == "installing-ibm-cloud-account" %}
{%- set ibm_vpc = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-account-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" -%}
{% if ibm_vpc %}
# Supported {{ ibm_cloud_title }} regions {id="installation-ibm-cloud-regions_{{ context }}"}
{% endif %}
{% if ibm_power_vs %}
# Supported {{ ibm_power_server_title }} regions and zones {id="installation-ibm-power-vs-regions_{{ context }}"}
{% endif %}

When installing {{ product_title }}, you must choose a supported region or zone for your cloud provider deployment. {._abstract}

You can deploy an {{ product_title }} cluster to the following regions:

{% if ibm_vpc %}

*   `au-syd` (Sydney, Australia)
*   `br-sao` (Sao Paulo, Brazil)
*   `ca-tor` (Toronto, Canada)
*   `eu-de` (Frankfurt, Germany)
*   `eu-gb` (London, United Kingdom)
*   `eu-es` (Madrid, Spain)
*   `jp-osa` (Osaka, Japan)
*   `jp-tok` (Tokyo, Japan)
*   `us-east` (Washington DC, United States)
*   `us-south` (Dallas, United States)


:::note

Deploying your cluster in the `eu-es` (Madrid, Spain) region is not supported for {{ product_title }} 4.14.6 and earlier versions.

:::

{% endif %}
{% if ibm_power_vs %}

*   `tor` (Toronto, Canada)
    *   `tor01`
*   `dal` (Dallas, USA)
    *   `dal10`
    *   `dal12`
*   `eu-de` (Frankfurt, Germany)
    *   `eu-de-1`
    *   `eu-de-2`
*   `lon` (London, UK)
    *   `lon04`
    *   `lon06`
*   `mad` (Madrid, Spain)
    *   `mad02`
    *   `mad04`
*   `osa` (Osaka, Japan)
    *   `osa21`
*   `sao` (Sao Paulo, Brazil)
    *   `sao01`
    *   `sao04`
*   `syd` (Sydney, Australia)
    *   `syd04`
    *   `syd05`
*   `wdc` (Washington DC, USA)
    *   `wdc06`
    *   `wdc07`
*   `us-east` (Washington DC, United States)
    *   `us-east`
*   `us-south` (Dallas, United States)
    *   `us-south`

You might optionally specify the {{ ibm_cloud_name }} region in which the installation program creates any VPC components.


:::note

If you do not specify the region, the installation program selects the region closest to {{ ibm_power_server_title }} zone you are deploying to.

:::


{{ ibm_cloud_name }} supports the following regions:

*   `us-east`
*   `us-south`
*   `eu-de`
*   `eu-es`
*   `eu-gb`
*   `jp-osa`
*   `au-syd`
*   `br-sao`
*   `ca-tor`
*   `jp-tok`
{% endif %}

{% if context == "installing-ibm-cloud-account" %}
{%- set ibm_vpc = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-account-power-vs" %}
{%- set ibm_power_vs = "" -%}
{% endif %}