{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}

{% if local_zone %}
# Opting in to an AWS {{ zone_type }} {id="installation-aws-add-zone-locations_{{ context }}"}

{% endif %}
{% if wavelength_zone %}
# Opting in to an AWS {{ zone_type }} {id="_opting_in_to_an_aws_zone_type"}

{% endif %}
{% if post_aws_zones %}
# Opting in to AWS Local Zones or Wavelength Zones {id="_opting_in_to_aws_local_zones_or_wavelength_zones"}

{% endif %}

Create a subnet in an {{ aws_first }} {{ zone_type }} when you need workloads to run physically closer to users or data sources than a standard {{ aws_short }} {{ zone_type }}. If you plan to create subnets in {{ aws_short }} {{ zone_type }}, you must opt in to each zone group separately. {._abstract}

**Prerequisites**

*   You have installed the AWS CLI.
*   You have determined an AWS Region for where you want to deploy your {{ product_title }} cluster.
*   You have attached a permissive IAM policy to a user or role account that opts in to the zone group.

**Procedure**

1.  List the zones that are available in your AWS Region by running the following command:
    {%- if local_zone or post_aws_zones %}
    ```terminal title="Example command for listing available AWS Local Zones in an AWS Region"
    $ aws --region "<value_of_AWS_Region>" ec2 describe-availability-zones \
        --query 'AvailabilityZones[].[{ZoneName: ZoneName, GroupName: GroupName, Status: OptInStatus}]' \
        --filters Name=zone-type,Values=local-zone \
        --all-availability-zones
    ```
{% endif %}
{% if wavelength_zone or post_aws_zones %}
    ```terminal title="Example command for listing available AWS Wavelength Zones in an AWS Region"
    $ aws --region "<value_of_AWS_Region>" ec2 describe-availability-zones \
        --query 'AvailabilityZones[].[{ZoneName: ZoneName, GroupName: GroupName, Status: OptInStatus}]' \
        --filters Name=zone-type,Values=wavelength-zone \
        --all-availability-zones
    ```
{%- endif %}

    Depending on the AWS Region, the list of available zones might be long. The command returns the following fields:

    `ZoneName`
    :   The name of the {{ zone_type }}.

    `GroupName`
    :   The group that comprises the zone. To opt in to the Region, save the name.

    `Status`
    :   The status of the {{ zone_type }} group. If the status is `not-opted-in`, you must opt in the `GroupName` as described in the next step.

1.  Opt in to the zone group on your AWS account by running the following command:
    ```terminal
    $ aws ec2 modify-availability-zone-group \
        --group-name "<value_of_GroupName>" \
        --opt-in-status opted-in
    ```

    `<value_of_GroupName>`
    :   Replace with the name of the group of the {{ zone_type }} where you want to create subnets.
{%- if local_zone %}
        For example, specify `us-east-1-nyc-1` to use the zone `us-east-1-nyc-1a` (US East New York).
{% endif %}
{% if wavelength_zone %}
        As an example for Wavelength Zones, specify `us-east-1-wl1` to use the zone `us-east-1-wl1-nyc-wlz-1` (US East New York).
{% endif %}

{% if context == "installing-aws-localzone" %}
{%- set local_zone = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = false -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = false -%}
{% endif %}