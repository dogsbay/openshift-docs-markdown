{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand cluster extensions with {{ olmv1 }} {id="explore-cluster-extension-capabilities-con_{{ context }}"}

Cluster extensions are software components that extend the capabilities of your {{ product_title }} cluster. Operators are a type of cluster extension. In this release, Operators are the only type of cluster extension supported by {{ olmv1 }}. {._abstract}

{{ olmv1 }} manages extensions through a single cluster-scoped `ClusterExtension` resource. This differs from {{ olmv0 }}, which uses multiple resources, including `Subscription` and `OperatorGroup` objects, to manage Operators.