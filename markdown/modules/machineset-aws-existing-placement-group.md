{% if context == "cpmso-supported-features-aws" %}
{%- set cpmso = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assigning machines to placement groups for Elastic Fabric Adapter instances by using machine sets {id="machineset-aws-existing-placement-group_{{ context }}"}

You can configure a machine set to deploy machines on Elastic Fabric Adapter (EFA) instances within an existing {{ aws_first }} placement group. {._abstract}

[EFA](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html) instances do not require placement groups, and you can use placement groups for purposes other than configuring an EFA. This example uses both to demonstrate a configuration that can improve network performance for machines within the specified placement group.

**Prerequisites**

*   You have access to the {{ oc_first }} as a user with administrator privileges.
*   You created a placement group in the {{ aws_short }} console.

    :::note

    Ensure that the [rules and limitations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#limitations-placement-groups) for the type of placement group that you create are compatible with your intended use case.
{%- if cpmso %}
    The control plane machine set spreads the control plane machines across multiple failure domains when possible.
    To use placement groups for the control plane, you must use a placement group type that can span multiple Availability Zones.
{%- endif %}
    
    :::


**Procedure**

{% if cpmso %}
1.  Edit your control plane machine set custom resource (CR) by running the following command:
    ```terminal
    $ oc edit controlplanemachineset.machine.openshift.io cluster --namespace openshift-machine-api
    ```
{% endif %}

{% if not cpmso %}
1.  In a text editor, open an existing machine set custom resource (CR) or create a new one.
{% endif %}
1.  Update the CR to implement your configuration changes:
    ```yaml
{%- if cpmso %}
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    # ...
    spec:
      template:
        machines_v1beta1_machine_openshift_io:
          spec:
            providerSpec:
              value:
                instanceType: <supported_instance_type>
                networkInterfaceType: <interface_type>
                placement:
                  availabilityZone: <zone>
                  region: <region>
                placementGroupName: <placement_group>
                placementGroupPartition: <placement_group_partition_number>
{% endif %}
{% if not cpmso %}
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    # ...
    spec:
      template:
        spec:
          providerSpec:
            value:
              instanceType: <supported_instance_type>
              networkInterfaceType: <interface_type>
              placement:
                availabilityZone: <zone>
                region: <region>
              placementGroupName: <placement_group>
              placementGroupPartition: <placement_group_partition_number>
{%- endif %}
    ```

    where:

    `<supported_instance_type>`
    :   Specifies an instance type that [supports EFAs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html#efa-instance-types).


`<interface_type>`
:   Specifies the network interface type.
    To use an EFA, set this value to `EFA`.


`<zone>`
:   Specifies the zone; for example, `us-east-1a`.


`<region>`
:   Specifies the region; for example, `us-east-1`.


`<placement_group>`
:   Specifies the name of the existing AWS placement group to deploy machines in.


`<placement_group_partition_number>`
:   Specifies the partition number of the existing AWS placement group to deploy machines in. This parameter is optional.

1.  Save your changes and exit the object specification.
{%- if cpmso %}

    When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
    *   For clusters that use the default `RollingUpdate` update strategy, the Operator automatically propagates the changes to your control plane configuration.
    *   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.
{% endif %}

**Verification**

*   In the {{ aws_short }} console, find a machine that the machine set created and verify the following in the machine properties:
    *   The placement group field has the value that you specified for the `placementGroupName` parameter in the machine set.
    *   If you specified a partition number, the partition number field has the value that you specified for the `placementGroupPartition` parameter in the machine set.
    *   The interface type field indicates that it uses an EFA.

{% if context == "cpmso-supported-features-aws" %}
{%- set cpmso = false -%}
{% endif %}