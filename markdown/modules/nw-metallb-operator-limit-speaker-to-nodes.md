{%- set _mod_docs_content_type = "CONCEPT" %}
# Limit speaker pods to specific nodes {id="nw-metallb-operator-limit-speaker-to-nodes_{{ context }}"}

You can limit MetalLB `speaker` pods to specific nodes in {{ product_title }} by configuring a node selector in the `MetalLB` custom resource. Only nodes that run a `speaker` pod advertise load balancer IP addresses, so you control which nodes serve MetalLB traffic. {._abstract}

The most common reason to limit the `speaker` pods to specific nodes is to ensure that only nodes with network interfaces on specific networks advertise load balancer IP addresses.

If you limit the `speaker` pods to specific nodes and specify `local` for the external traffic policy of a service, then you must ensure that the application pods for the service are deployed to the same nodes.

```yaml title="Example configuration to limit speaker pods to worker nodes"
apiVersion: metallb.io/v1beta1
kind: MetalLB
metadata:
  name: metallb
  namespace: metallb-system
spec:
  nodeSelector:
    node-role.kubernetes.io/worker: ""
  speakerTolerations:
  - key: "Example"
    operator: "Exists"
    effect: "NoExecute"
```

*   In this example configuration, the `spec.nodeSelector` field assigns the `speaker` pods to worker nodes. You can specify labels that you assigned to nodes or any valid node selector.
*   In this example configuration, `spec.speakerToTolerations` pod that this toleration is attached to tolerates any taint that matches the `key` and `effect` values by using the `operator` value.

After you apply a manifest with the `spec.nodeSelector` field, you can check the number of pods that the Operator deployed with the `oc get daemonset -n metallb-system speaker` command.
Similarly, you can display the nodes that match your labels with a command like `oc get nodes -l node-role.kubernetes.io/worker=`.

You can optionally allow the node to control which speaker pods should, or should not, be scheduled on them by using affinity rules. You can also limit these pods by applying a list of tolerations. For more information about affinity rules, taints, and tolerations, see the additional resources.