{%- set _mod_docs_content_type = "CONCEPT" %}
# Custom taints and tolerations {id="hcp-virt-taints-tolerations_{{ context }}"}

By default, pods for a hosted cluster tolerate the `control-plane` and `cluster` taints. However, you can also use custom taints on nodes so that hosted clusters can tolerate those taints on a per-hosted-cluster basis by setting the `HostedCluster.spec.tolerations` specification. {._abstract}

{%- set FeatureName = "Passing tolerations for a hosted cluster" %}
{% include "./snippets/technology-preview.md" %}

```yaml title="Example configuration"
  spec:
    tolerations:
    - effect: NoSchedule
      key: kubernetes.io/custom
      operator: Exists
```

You can also set tolerations on the hosted cluster while you create a cluster by using the `--tolerations` hcp CLI argument.

```terminal title="Example CLI argument"
--toleration="key=kubernetes.io/custom,operator=Exists,effect=NoSchedule"
```

For fine granular control of hosted cluster pod placement on a per-hosted-cluster basis, use custom tolerations with `nodeSelectors`. You can co-locate groups of hosted clusters and isolate them from other hosted clusters. You can also place hosted clusters in infra and control plane nodes.

Tolerations on the hosted cluster spread only to the pods of the control plane. To configure other pods that run on the management cluster and infrastructure-related pods, such as the pods to run virtual machines, you need to use a different process.