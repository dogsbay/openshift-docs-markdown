{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample {{ azure_short }} failure domain configuration {id="cpmso-yaml-failure-domain-azure_{{ context }}"}

To prevent downtime for your applications due to the failure of a single {{ azure_first }} region, you can configure failure domains in the control plane machine set by configuring appropriate values in the `failureDomains` section of the `ControlPlaneMachineSet` object. {._abstract}

The control plane machine set concept of a failure domain is analogous to the {{ azure_short }} concept of an [_Azure availability zone_](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/concept-availability-zones).
The `ControlPlaneMachineSet` CR spreads control plane machines across more than one failure domain when possible.

When configuring {{ azure_short }} failure domains in the control plane machine set, you must specify the availability zone name.
An {{ azure_short }} cluster can use the following configurations:

*   One subnet for each availability zone.
*   One subnet that spans more than one availability zone.
*   More than one subnet in more than one availability zone.

```yaml title="Sample {{ azure_short }} failure domain values"
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
        azure:
        - zone: "1"
          subnet: <subnet_zone_1>
        - zone: "2"
          subnet: <subnet_zone_2>
        - zone: "3"
          subnet: <subnet_zone_3>
        platform: Azure
# ...
```

where:

`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.azure.zone`
:   Each instance of `zone` specifies an {{ azure_short }} availability zone for a failure domain.

    :::note

    If the cluster uses a single zone for all failure domains, the `zone` parameter is in the provider specification instead of in the failure domain configuration.
    
    :::



`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.azure.subnet`
:   Optional: Specifies the network subnet in which to create the control plane VM.
    When omitted, the control plane machine set uses the `subnet` value from the machine `providerSpec` template.


`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.platform`
:   Specifies the cloud provider platform name.
    Do not change this value.