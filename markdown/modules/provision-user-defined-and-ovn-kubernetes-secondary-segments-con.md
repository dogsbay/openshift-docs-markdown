{%- set _mod_docs_content_type = "CONCEPT" %}
# Provision user-defined and OVN-Kubernetes secondary segments {id="provision-user-defined-and-ovn-kubernetes-secondary-segments-con_{{ context }}"}

User-defined networks (UDNs) extend OVN-Kubernetes with custom layer 2 and layer 3 segments that are isolated by default. Defining these segments at the cluster or namespace level lets workloads attach to the topology their design requires.