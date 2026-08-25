{%- set _mod_docs_content_type = "REFERENCE" %}
# About the MachineHealthCheck custom resource {id="machine-health-checks-resource_{{ context }}"}

You control how a machine health check remediates unhealthy machines by using a `MachineHealthCheck` custom resource (CR) to configure health criteria, remediation limits, and startup timeouts for machines in a targeted pool. {._abstract}

The `MachineHealthCheck` resource for all cloud-based installation types, and other than bare metal, resembles the following YAML file:

```yaml
apiVersion: machine.openshift.io/v1beta1
kind: MachineHealthCheck
metadata:
  name: example
  namespace: openshift-machine-api
spec:
  selector:
    matchLabels:
      machine.openshift.io/cluster-api-machine-role: <role>
      machine.openshift.io/cluster-api-machine-type: <role>
      machine.openshift.io/cluster-api-machineset: <cluster_name>-<label>-<zone>
  unhealthyConditions:
  - type:    "Ready"
    timeout: "300s"
    status: "False"
  - type:    "Ready"
    timeout: "300s"
    status: "Unknown"
  maxUnhealthy: "40%"
  nodeStartupTimeout: "10m"
```
where:


`metadata.name`
:   Specifies the name of the machine health check to deploy.

`spec.selector.matchLabels`
:   Specifies the machine pool and machine set to check by adding labels:
    *   `machine.openshift.io/cluster-api-machine-role`: Specifies a label for the machine pool that you want to check.
    *   `machine.openshift.io/cluster-api-machine-type`: Specifies a label for the machine pool that you want to check.
    *   `machine.openshift.io/cluster-api-machineset`: Specifies the machine set to track in the `<cluster_name>-<label>-<zone>` format. For example, `prod-node-us-east-1a`.

`spec.unhealthyConditions.timeout`
:   Specifies the timeout duration for a node condition. If a condition is met for the duration of the timeout, the machine will be remediated. Long timeouts can result in long periods of downtime for a workload on an unhealthy machine.

`spec.maxUnhealthy`
:   Specifies the amount of machines allowed to be concurrently remediated in the targeted pool. This can be set as a percentage or an integer. If the number of unhealthy machines exceeds the limit set by `maxUnhealthy`, remediation is not performed.

`spec.nodeStartupTimeout`
:   Specifies the timeout duration that a machine health check must wait for a node to join the cluster before a machine is determined to be unhealthy.


:::note

The `matchLabels` are examples only; you must map your machine groups based on your specific needs.

:::