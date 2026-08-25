{% if context == "installing-aws-government-region" %}
{%- set aws_gov = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_secret = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if aws_gov %}
# AWS government regions {id="installation-aws-about-gov-secret-region_{{ context }}"}

{% endif %}
{% if aws_secret %}
# AWS secret regions {id="_aws_secret_regions"}

{% endif %}

{%- if aws_gov %}
{{ product_title }} supports deploying a cluster to an [AWS GovCloud (US)](https://aws.amazon.com/govcloud-us) region. {._abstract}

The following AWS GovCloud partitions are supported:

*   `us-gov-east-1`
*   `us-gov-west-1`
{% endif %}

{% if aws_secret %}
{{ product_title }} supports deploying a cluster to an AWS Secret Cloud region.

The following AWS secret partitions are supported:

*   `us-isob-east-1` (SC2S)
*   `us-iso-east-1` (C2S)


:::note

The maximum supported MTU in an AWS SC2S and C2S Regions is not the same as
AWS commercial. For more information about configuring MTU during installation,
see the _Cluster Network Operator configuration object_ section in _Installing
a cluster on AWS with network customizations_

:::

{% endif %}

{% if context == "installing-aws-government-region" %}
{%- set aws_gov = false -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_secret = false -%}
{% endif %}