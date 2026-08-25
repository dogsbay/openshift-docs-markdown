{%- set _mod_docs_content_type = "CONCEPT" %}
# Network observability deployment in specific nodes {id="network-observability-multi-tenancy_{{ context }}"}

Configure the `FlowCollector` resource using scheduling specifications, including `NodeSelector`, `Tolerations`, and `Affinity`, to control the deployment of network observability components on specific nodes. {._abstract}

The `spec.agent.ebpf.advanced.scheduling`, `spec.processor.advanced.scheduling`, and `spec.consolePlugin.advanced.scheduling` specifications have the following configurable settings:

*   `NodeSelector`
*   `Tolerations`
*   `Affinity`
*   `PriorityClassName`

```yaml title="Sample FlowCollector resource for spec.<component>.advanced.scheduling"
apiVersion: flows.netobserv.io/v1beta2
kind: FlowCollector
metadata:
  name: cluster
spec:
# ...
advanced:
  scheduling:
    tolerations:
    - key: "<taint key>"
      operator: "Equal"
      value: "<taint value>"
      effect: "<taint effect>"
      nodeSelector:
        <key>: <value>
      affinity:
        nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: name
              operator: In
              values:
              - app-worker-node
      priorityClassName: """
# ...
```