{%- set _mod_docs_content_type = "CONCEPT" %}
# The MachineConfigPool {id="kmm-day1-machineconfigpool_{{ context }}"}

A `MachineConfigPool` objectidentifies a collection of {{ product_title }} nodes affected by Machine Config Operator changes. {._abstract}

```yaml
kind: MachineConfigPool
metadata:
  name: sfc
spec:
  machineConfigSelector:
    matchExpressions:
      - {key: machineconfiguration.openshift.io/role, operator: In, values: [worker, sfc]}
  nodeSelector:
    matchLabels:
      node-role.kubernetes.io/sfc: ""
  paused: false
  maxUnavailable: 1
```

where:


`spec.machineConfigSelector`
:   Specifies labels that match in the MachineConfig.

`spec.nodeSelector`
:   Specifies labels that match on the node.

There are predefined `MachineConfigPools` in the OCP cluster:

*   `worker`: Targets all worker nodes in the cluster
*   `master`: Targets all master nodes in the cluster

Define the following `MachineConfig` to target the master `MachineConfigPool`:

```yaml
metadata:
  labels:
    machineconfiguration.opensfhit.io/role: master
```

Define the following `MachineConfig` to target the worker `MachineConfigPool`:

```yaml
metadata:
  labels:
    machineconfiguration.opensfhit.io/role: worker
```