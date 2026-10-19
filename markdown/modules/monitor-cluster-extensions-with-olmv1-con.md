{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitor cluster extensions with {{ olmv1 }} {id="monitor-cluster-extensions-with-olmv1-con_{{ context }}"}

As part of {{ olmv1_first }}, the `operator-controller` creates `ClusterObjectSet` resources when you install or upgrade content with a `ClusterExtension` object. `ClusterObjectSet` objects enable safe, phased rollouts of Kubernetes resources.