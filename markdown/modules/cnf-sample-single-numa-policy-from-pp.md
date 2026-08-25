{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample performance profile {id="cnf-sample-performance-policy_{{ context }}"}

Reference an example YAML to understand how to use the performance profile creator (PPC) tool to create a performance profile. {._abstract}

```yaml
apiVersion: performance.openshift.io/v2
kind: PerformanceProfile
metadata:
  name: performance
spec:
  cpu:
    isolated: "3"
    reserved: 0-2
  machineConfigPoolSelector:
    pools.operator.machineconfiguration.openshift.io/worker: ""
  nodeSelector:
    node-role.kubernetes.io/worker: ""
  numa:
    topologyPolicy: single-numa-node
  realTimeKernel:
    enabled: true
  workloadHints:
    highPowerConsumption: true
    perPodPowerManagement: false
    realTime: true
```

where:


`spec.pools.operator.machineconfiguration.openshift.io/worker`
:   Specifies the value that must match the `MachineConfigPool` value that you want to configure the NUMA Resources Operator on. For example, you might create a `MachineConfigPool` object named `worker-cnf` that designates a set of nodes that run telecommunications workloads. The value for `MachineConfigPool` must match the `machineConfigPoolSelector` value in the `NUMAResourcesOperator` CR that you configure later in "Creating the NUMAResourcesOperator custom resource".


`spec.numa.topologyPolicy`
:   Specifies that the `topologyPolicy` field is set to `single-numa-node` by setting the `topology-manager-policy` argument to `single-numa-node` when you run the PPC tool.

    :::note


    For hosted control plane clusters, the `machineConfigPoolSelector` does not have any functional effect. Node association is instead determined by the specified `NodePool` object.
    
    :::