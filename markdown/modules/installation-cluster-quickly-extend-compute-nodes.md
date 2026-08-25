{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if local_zone %}
# Install a cluster quickly in AWS Local Zones {id="installation-cluster-quickly-extend-compute-nodes_{{ context }}"}

{% endif %}
{% if wavelength_zone %}
# Install a cluster quickly in AWS Wavelength Zones {id="_install_a_cluster_quickly_in_aws_wavelength_zones"}

{% endif %}

You can quickly install a cluster on Amazon Web Services (AWS) to extend compute nodes to {{ zone_type }} locations. {._abstract}

By using this installation route, the installation program automatically creates network resources and {{ zone_type }} subnets for each zone that you defined in your configuration file. To customize the installation, you must modify parameters in the `install-config.yaml` file before you deploy the cluster.

{% if context == "installing-aws-localzone" %}
{%- set local_zone = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = false -%}
{% endif %}