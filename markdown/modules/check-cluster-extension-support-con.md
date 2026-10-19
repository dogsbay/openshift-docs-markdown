{%- set _mod_docs_content_type = "CONCEPT" %}
# Review supported cluster extensions with {{ olmv1 }} {id="check-cluster-extension-support-con_{{ context }}"}

Not all Operators in a catalog are compatible with {{ olmv1 }}. Before installing an Operator as a cluster extension, check that it meets the bundle format, install mode, and dependency requirements. {{ olmv1_first }} supports extensions that use webhooks for validation, mutation, or conversion. {._abstract}

{{ olmv1_first }} supports extensions that use the `AllNamespaces` install mode. With this mode, the Operator watches and manages resources across all namespaces in the cluster.