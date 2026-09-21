{%- set _mod_docs_content_type = "CONCEPT" %}
# Design and layer network policy across the cluster {id="design-and-layer-network-policy-across-the-cluster-con_{{ context }}"}

Network policy is defined by using both cluster-scoped and namespace-scoped APIs. Understanding which layer applies at which scope, and in what order, lets you combine controls without gaps, conflicts, or accidental allow-all behavior.