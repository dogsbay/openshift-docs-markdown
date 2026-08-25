{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample {{ rh_openstack }} failure domain configuration {id="cpmso-yaml-failure-domain-openstack_{{ context }}"}

To prevent downtime for your applications due to the failure of a single {{ rh_openstack_first }} region, you can configure failure domains in the control plane machine set by configuring appropriate values in the `failureDomains` section of the `ControlPlaneMachineSet` object. {._abstract}

The control plane machine set concept of a failure domain is analogous to the existing {{ rh_openstack }} concept of an [availability zone](https://docs.openstack.org/nova/latest/admin/availability-zones.html).
The `ControlPlaneMachineSet` CR spreads control plane machines across more than one failure domain when possible.

```yaml title="Sample OpenStack failure domain values"
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
        openstack:
        - availabilityZone: nova-az0
          rootVolume:
            availabilityZone: cinder-az0
        - availabilityZone: nova-az1
          rootVolume:
            availabilityZone: cinder-az1
        - availabilityZone: nova-az2
          rootVolume:
            availabilityZone: cinder-az2
        platform: OpenStack
# ...
```
where:


`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.openstack`
:   Specifies the availability zones for the failure domains.
    This example demonstrates the use of more than one Nova availability zone and corresponding Cinder availability zones.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.platform`
:   Specifies the cloud provider platform name.
    Do not change this value.