{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if local_zone %}
# Modifying an installation configuration file to use {{ aws_first }} Local Zones subnets {id="installing-aws-edge-zones-custom-vpc-config_{{ context }}"}

{% endif %}
{% if wavelength_zone %}
# Modifying an installation configuration file to use {{ aws_first }} Wavelength Zones subnets {id="_modifying_an_installation_configuration_file_to_use_aws_first_wavelength_zones_subnets"}

{% endif %}

Modify your `install-config.yaml` file to include {{ zone_type }} subnets. {._abstract}

**Prerequisites**

*   You created subnets by using the procedure "Creating subnets in {{ zone_type }}".
*   You created an `install-config.yaml` file by using the procedure "Creating the installation configuration file".

**Procedure**

*   Modify the `install-config.yaml` configuration file by specifying {{ zone_type }} subnets in the `platform.aws.subnets` parameter.
    {%- if local_zone %}
    ```yaml title="Example installation configuration file with {{ zone_type }} subnets"
    # ...
    platform:
      aws:
        region: us-west-2
        subnets:
        - publicSubnetId-1
        - publicSubnetId-2
        - publicSubnetId-3
        - privateSubnetId-1
        - privateSubnetId-2
        - privateSubnetId-3
        - publicSubnetId-LocalZone-1
    # ...
    ```

    `platform.aws.subnets` specifies the list of subnet IDs created in the zones: Availability and {{ zone_type }}.
{% endif %}
{% if wavelength_zone %}
    .Example installation configuration file with {{ zone_type }} subnets
    ```yaml
    # ...
    platform:
      aws:
        region: us-west-2
        subnets:
        - publicSubnetId-1
        - publicSubnetId-2
        - publicSubnetId-3
        - privateSubnetId-1
        - privateSubnetId-2
        - privateSubnetId-3
        - publicOrPrivateSubnetID-Wavelength-1
    # ...
    ```

    `platform.aws.subnets` specifies the list of subnet IDs created in the zones: Availability and {{ zone_type }}.
{% endif %}

{% if context == "installing-aws-localzone" %}
{%- set local_zone = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = false -%}
{% endif %}