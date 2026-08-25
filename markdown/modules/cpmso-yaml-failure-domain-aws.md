{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample {{ aws_short }} failure domain configuration {id="cpmso-yaml-failure-domain-aws_{{ context }}"}

To prevent downtime for your applications due to the failure of a single {{ aws_first }} region, you can configure failure domains in the control plane machine set by configuring appropriate values in the `failureDomains` section of the `ControlPlaneMachineSet` object. {._abstract}

The control plane machine set concept of a failure domain is analogous to the {{ aws_short }} concept of an [_Availability Zone (AZ)_](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones).
The `ControlPlaneMachineSet` CR spreads control plane machines across more than one failure domain when possible.

When configuring {{ aws_short }} failure domains in the control plane machine set, you must specify the availability zone name and the subnet to use.

```yaml title="Sample {{ aws_short }} failure domain values"
apiVersion: machine.openshift.io/v1
kind: ControlPlaneMachineSet
metadata:
  name: cluster
  namespace: openshift-machine-api
spec:
# ...
  template:
# ...
    machines_v1beta1_machine_openshift_io:
      failureDomains:
        aws:
        - placement:
            availabilityZone: <aws_zone_a>
          subnet:
            filters:
            - name: tag:Name
              values:
              - <cluster_id>-subnet-private-<aws_zone_a>
            type: Filters
        - placement:
            availabilityZone: <aws_zone_b>
          subnet:
            filters:
            - name: tag:Name
              values:
              - <cluster_id>-subnet-private-<aws_zone_b>
            type: Filters
        platform: AWS
# ...
```
where:


`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.aws.placement.availabilityZone: <aws_zone_a>`
:   Specifies an {{ aws_short }} availability zone for the first failure domain.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.aws.subnet`
:   Specifies a subnet configuration.
    In this example, the subnet type is `Filters`, so there is a `filters` stanza.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.aws.subnet.filters.values: <cluster_id>-subnet-private-<aws_zone_a>`
:   Specifies the subnet name for the first failure domain, using the infrastructure ID and the {{ aws_short }} availability zone.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.aws.subnet.type`
:   Specifies the subnet type.
    The following values are valid: `ARN`, `Filters` and `ID`.
    The default value is `Filters`.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.aws.placement.availabilityZone: <aws_zone_b>`
:   Specifies an {{ aws_short }} availability zone for an additional failure domain.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.aws.subnet.filters.values: <cluster_id>-subnet-private-<aws_zone_b>`
:   Specifies the subnet name for the additional failure domain, using the infrastructure ID and the {{ aws_short }} availability zone.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.platform`
:   Specifies the cloud provider platform name.
    Do not change this value.