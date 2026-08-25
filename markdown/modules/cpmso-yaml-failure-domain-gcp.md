{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample {{ gcp_short }} failure domain configuration {id="cpmso-yaml-failure-domain-gcp_{{ context }}"}

To prevent downtime for your application due to the failure of a single {{ gcp_first }} region, you can configure failure domains in the control plane machine set by configuring appropriate values in the `failureDomains` section of the `ControlPlaneMachineSet` object. {._abstract}

The control plane machine set concept of a failure domain is analogous to the existing {{ gcp_short }} concept of a [_zone_](https://cloud.google.com/compute/docs/regions-zones).
The `ControlPlaneMachineSet` CR spreads control plane machines across more than one failure domain when possible.

When configuring {{ gcp_short }} failure domains in the control plane machine set, you must specify the zone name to use.

```yaml title="Sample {{ gcp_short }} failure domain values"
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
        gcp:
        - zone: <gcp_zone_a>
        - zone: <gcp_zone_b>
        - zone: <gcp_zone_c>
        - zone: <gcp_zone_d>
        platform: GCP
# ...
```
where:


`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.gcp.zone`
:   Each instance of `zone` specifies a {{ gcp_short }} zone for a failure domain.

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.platform`
:   Specifies the cloud provider platform name.
    Do not change this value.