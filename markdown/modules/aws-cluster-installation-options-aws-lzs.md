{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{% if local_zone %}
# Cluster installation options for an AWS Local Zones environment {id="aws-cluster-installation-options-aws-lzs_{{ context }}"}

{% endif %}
{% if wavelength_zone %}
# Cluster installation options for an AWS Wavelength Zones environment {id="_cluster_installation_options_for_an_aws_wavelength_zones_environment"}

{% endif %}

You can install an {{ product_title }} cluster on AWS with edge compute nodes defined in {{ zone_type }}. {._abstract}

Choose one of the following installation options:

*   Fully automated option: Installing a cluster to quickly extend compute nodes to edge compute pools, where the installation program automatically creates infrastructure resources for the {{ product_title }} cluster.
*   Existing VPC option: Installing a cluster on AWS into an existing VPC, where you supply {{ zone_type }} subnets to the `install-config.yaml` file.

{% if context == "installing-aws-localzone" %}
{%- set local_zone = "" -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = "" -%}
{% endif %}