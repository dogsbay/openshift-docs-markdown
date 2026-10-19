{%- set _mod_docs_content_type = "CONCEPT" %}
# Use OVN network tools to inspect the cluster {id="understand-ovn-kubernetes-network-plugin-use-ovn-network-tools_{{ context }}"}

Use OVN-Kubernetes built-in CLI tools to inspect the logical and physical network state of your cluster. You can list logical resources, query the Northbound and Southbound databases, and run diagnostic commands directly from `ovnkube-node` pods.