{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample {{ vmw_full }} failure domain configuration {id="cpmso-yaml-failure-domain-vsphere_{{ context }}"}

To prevent downtime for your applications due to the failure of a single {{ vmw_first }} region, you can configure failure domains in the control plane machine set by configuring appropriate values in the `failureDomains` section of the `ControlPlaneMachineSet` object. {._abstract}

On {{ vmw_short }} infrastructure, the cluster-wide infrastructure custom resource definition (CRD), `infrastructures.config.openshift.io`, defines failure domains for your cluster.
A failure domain is an infrastructure resource made up of a control plane machine set, a vCenter data center, vCenter datastore, and a network.
The `providerSpec` in the `ControlPlaneMachineSet` custom resource (CR) specifies names for failure domains that the control plane machine set uses to ensure control plane nodes deploy on the appropriate failure domain.

By using a failure domain resource, you can use a control plane machine set to deploy control plane machines on separate clusters or data centers.
A control plane machine set also balances control plane machines across defined failure domains to improve fault tolerance capabilities for your infrastructure.


:::note

If you change the `ProviderSpec` configuration in the `ControlPlaneMachineSet` CR, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.

:::


```yaml title="Sample {{ vmw_full }} failure domain values"
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
        vsphere:
        - name: <failure_domain_name_1>
        - name: <failure_domain_name_2>
        platform: VSphere
# ...
```
where:


`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.vsphere.name`
:   Each instance of `name` specifies a failure domain.

    :::important


    Each `name` field value in the stanza must match the corresponding value in the `failureDomains.name` field of the cluster-wide infrastructure CRD.
    You can find the value of the `failureDomains.name` field by running the following command:

    ```terminal
    $ oc get infrastructure cluster -o=jsonpath={.spec.platformSpec.vsphere.failureDomains[0].name}
    ```


    The `name` field is the only supported failure domain field that you can specify in the `ControlPlaneMachineSet` CR.
    
    :::


    For an example of a cluster-wide infrastructure CRD that defines resources for each failure domain, see "Specifying multiple regions and zones for your cluster on {{ vmw_short }}."


`spec.template.machines_v1beta1_machine_openshift_io.failureDomains.platform`
:   Specifies the cloud provider platform name.
    Do not change this value.