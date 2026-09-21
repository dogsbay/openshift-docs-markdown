{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand the OVN-Kubernetes network plugin {id="understand-ovn-kubernetes-network-plugin-con_{{ context }}"}

The {{ product_title }} cluster uses a virtualized network for its pod and service networks. The OVN-Kubernetes network plugin is the default provider that implements this virtualized overlay network, supplying connectivity and policy enforcement across the nodes in the cluster.