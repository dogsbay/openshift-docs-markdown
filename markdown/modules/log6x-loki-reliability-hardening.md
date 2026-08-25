{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring Loki to tolerate node failure {id="logging-loki-reliability-hardening_{{ context }}"}

The {{ loki_op }} supports setting pod anti-affinity rules to request that pods of the same component are scheduled on different available nodes in the cluster.

{% include "./snippets/about-pod-affinity.md" %}

The Operator sets default, preferred `podAntiAffinity` rules for all Loki components, which includes the `compactor`, `distributor`, `gateway`, `indexGateway`, `ingester`, `querier`, `queryFrontend`, and `ruler` components.

You can override the preferred `podAntiAffinity` settings for Loki components by configuring required settings in the `requiredDuringSchedulingIgnoredDuringExecution` field:

```yaml title="Example user settings for the ingester component"
apiVersion: loki.grafana.com/v1
kind: LokiStack
metadata:
  name: logging-loki
  namespace: openshift-logging
spec:
# ...
  template:
    ingester:
      podAntiAffinity:
      # ...
        requiredDuringSchedulingIgnoredDuringExecution: (1)
        - labelSelector:
            matchLabels: (2)
              app.kubernetes.io/component: ingester
          topologyKey: kubernetes.io/hostname
# ...
```
1.  The stanza to define a required rule.
1.  The key-value pair (label) that must be matched to apply the rule.