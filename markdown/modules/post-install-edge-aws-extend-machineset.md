{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a machine set manifest for an {{ aws_short }} Local Zones or Wavelength Zones node {id="post-install-edge-aws-extend-machineset_{{ context }}"}

After you create subnets in {{ aws_full }} {{ zone_type }}, you can create a machine set manifest. Gathering {{ aws_short }} API data helps you to manually preserve the correct edge machine pool labels. {._abstract}

The installation program sets the following labels for the `edge` machine pools at cluster installation time:

*   `machine.openshift.io/parent-zone-name: <value_of_ParentZoneName>`
*   `machine.openshift.io/zone-group: <value_of_ZoneGroup>`
*   `machine.openshift.io/zone-type: <value_of_ZoneType>`

The following procedure details how you can create a machine set configuration that matches the `edge` compute pool configuration.

**Prerequisites**

*   You have created subnets in {{ aws_short }} {{ zone_type }}.

**Procedure**

*   Manually preserve `edge` machine pool labels when creating the machine set manifest by gathering the {{ aws_short }} API. To complete this action, enter the following command in your command-line interface (CLI):
    ```terminal
    $ aws ec2 describe-availability-zones --region <value_of_Region> \
        --query 'AvailabilityZones[].{
    	ZoneName: ZoneName,
    	ParentZoneName: ParentZoneName,
    	GroupName: GroupName,
    	ZoneType: ZoneType}' \
        --filters Name=zone-name,Values=<value_of_ZoneName> \
        --all-availability-zones
    ```

    where:

    `<value_of_Region>`
    :   Specify the name of the region for the zone.

    `<value_of_ZoneName>`
    :   Specify the name of the {{ zone_type }}.
    ```terminal title="Example output for Local Zone us-east-1-nyc-1a"
    [
        {
            "ZoneName": "us-east-1-nyc-1a",
            "ParentZoneName": "us-east-1f",
            "GroupName": "us-east-1-nyc-1",
            "ZoneType": "local-zone"
        }
    ]
    ```
    ```terminal title="Example output for Wavelength Zone us-east-1-wl1"
    [
        {
            "ZoneName": "us-east-1-wl1-bos-wlz-1",
            "ParentZoneName": "us-east-1a",
            "GroupName": "us-east-1-wl1",
            "ZoneType": "wavelength-zone"
        }
    ]
    ```