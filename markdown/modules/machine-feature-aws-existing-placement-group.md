{%- set _mod_docs_content_type = "CONCEPT" %}
# Elastic Fabric Adapter instances and placement group options {id="machine-feature-aws-existing-placement-group_{{ context }}"}

You can deploy compute machines on Elastic Fabric Adapter (EFA) instances within an existing {{ aws_short }} placement group. {._abstract}

EFA instances do not require placement groups, and you can use placement groups for purposes other than configuring an EFA. 
The following example uses an EFA and placement group together to demonstrate a configuration that can improve network performance for machines within the specified placement group.

{% include "./snippets/apply-machine-configuration-method.md" %}

```yaml title="Sample EFA instance and placement group configuration"
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSMachineTemplate
# ...
spec:
  template:
    spec:
      instanceType: <supported_instance_type>
      networkInterfaceType: efa
      placementGroupName: <placement_group>
      placementGroupPartition: <placement_group_partition_number>
# ...
```

where:


`spec.template.spec.instanceType`
:   Specifies an instance type that supports EFAs. For more information, see "Supported instance types".

`spec.template.spec.networkInterfaceType`
:   Specifies the `efa` network interface type.

`spec.template.spec.placementGroupName`
:   Specifies the name of the existing {{ aws_short }} placement group to deploy machines in.

`spec.template.spec.placementGroupPartition`
:   Specifies the partition number of the existing {{ aws_short }} placement group where you want your machines deployed. Setting a value for the parameter is optional.


:::note

Ensure that the rules and limitations for the type of placement group that you create are compatible with your intended use case. For more information, see "Placement groups for your Amazon EC2 instances".

:::