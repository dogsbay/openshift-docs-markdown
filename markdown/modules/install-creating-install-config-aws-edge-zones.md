{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if local_zone %}
# Modifying an installation configuration file to use {{ aws_first }} Local Zones {id="install-creating-install-config-aws-edge-zones_{{ context }}"}

{% endif %}
{% if wavelength_zone %}
# Modifying an installation configuration file to use {{ aws_first }} Wavelength Zones {id="_modifying_an_installation_configuration_file_to_use_aws_first_wavelength_zones"}

{% endif %}

Modify an `install-config.yaml` file to include {{ aws_short }} {{ zone_type }}. {._abstract}

**Prerequisites**

*   You have configured an {{ aws_short }} account.
*   You added your {{ aws_short }} keys and {{ aws_short }} Region to your local {{ aws_short }} profile by running `aws configure`.
*   You are familiar with the configuration limitations that apply when you specify the installation program to automatically create subnets for your {{ product_title }} cluster.
*   You opted in to the {{ zone_type }} group for each zone.
*   You created an `install-config.yaml` file by using the procedure "Creating the installation configuration file".

**Procedure**

1.  Modify the `install-config.yaml` file by specifying {{ zone_type }} names in the `platform.aws.zones` property of the edge compute pool.
    {%- if local_zone %}
    ```yaml
    # ...
    platform:
      aws:
        region: <region_name>
    compute:
    - name: edge
      platform:
        aws:
          zones:
          - <local_zone_name>
    #...
    ```
{% endif %}
{% if wavelength_zone %}
    ```yaml
    # ...
    platform:
      aws:
        region: <region_name>
    compute:
    - name: edge
      platform:
        aws:
          zones:
          - <wavelength_zone_name>
    #...
    ```
{%- endif %}

    where:

    `platform.aws.region`
    :   Specifies the {{ aws_short }} Region name.

    `compute.platform.aws.zones`
    :   Specifies the list of {{ zone_type }} names to use. The zones must exist in the same {{ aws_short }} Region specified in the `platform.aws.region` field.
    The following example shows a configuration for installing a cluster in the `us-west-2` {{ aws_short }} Region that extends edge nodes to {{ zone_type }} in `Los Angeles` and `Las Vegas` locations:
{%- if local_zone %}
    ```yaml
    apiVersion: v1
    baseDomain: example.com
    metadata:
      name: cluster-name
    platform:
      aws:
        region: us-west-2
    compute:
    - name: edge
      platform:
        aws:
          zones:
          - us-west-2-lax-1a
          - us-west-2-lax-1b
          - us-west-2-las-1a
    pullSecret: '{"auths": ...}'
    sshKey: 'ssh-ed25519 AAAA...'
    #...
    ```
{% endif %}
{% if wavelength_zone %}
    ```yaml
    apiVersion: v1
    baseDomain: example.com
    metadata:
      name: cluster-name
    platform:
      aws:
        region: us-west-2
    compute:
    - name: edge
      platform:
        aws:
          zones:
          - us-west-2-wl1-lax-wlz-1
          - us-west-2-wl1-las-wlz-1
    pullSecret: '{"auths": ...}'
    sshKey: 'ssh-ed25519 AAAA...'
    #...
    ```
{% endif %}

1.  Deploy your cluster.

{% if context == "installing-aws-localzone" %}
{%- set local_zone = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = false -%}
{% endif %}