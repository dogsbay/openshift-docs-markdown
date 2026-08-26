{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set secretregion = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Tested instance types for AWS {id="installation-aws-tested-machine-types_{{ context }}"}

To ensure cluster stability and performance, use one of the tested {{ aws_first }} instance types for your {{ product_title }} machines. {._abstract}

The following {{ aws_short }} instance types have been tested with
{%- if not (local_zone or wavelength_zone) %}
{{ product_title }}.
{%- endif %}
{%- if local_zone %}
{{ product_title }} for use with {{ aws_short }} Local Zones.
{%- endif %}
{%- if wavelength_zone %}
{{ product_title }} for use with {{ aws_short }} Wavelength Zones.
{%- endif %}


:::note

Use the machine types included in the following charts for your {{ aws_short }} instances. If you use an instance type that is not listed in the chart, ensure that the instance size you use matches the minimum resource requirements in "Minimum resource requirements for cluster installation".

:::


{% if not (local_zone or wavelength_zone or secretregion) %}
See the following machine types based on 64-bit x86 architecture:

* `c4.*`
* `c5.*`
* `c5a.*`
* `i3.*`
* `m4.*`
* `m5.*`
* `m5a.*`
* `m6a.*`
* `m6i.*`
* `m7a.*`
* `m7i.*`
* `m7i-flex.*`
* `r4.*`
* `r5.*`
* `r5a.*`
* `r6i.*`
* `t3.*`
* `t3a.*`

{% endif %}
{% if local_zone %}
See the following machine types based on 64-bit x86 architecture for AWS Local Zones:

*   `c5.*`
*   `c5d.*`
*   `m6i.*`
*   `m5.*`
*   `r5.*`
*   `t3.*`

{% endif %}
{% if wavelength_zone %}
See the following machine types based on 64-bit x86 architecture for AWS Wavelength Zones:

*   `r5.*`
*   `t3.*`

{% endif %}
{% if secretregion %}
See the following machine types based on 64-bit x86 architecture for secret regions:

*   `c4.*`
*   `c5.*`
*   `i3.*`
*   `m4.*`
*   `m5.*`
*   `r4.*`
*   `r5.*`
*   `t3.*`
{% endif %}

{% if context == "installing-aws-localzone" %}
{%- set local_zone = "" -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = "" -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set secretregion = "" -%}
{% endif %}