{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage workloads using taints and tolerations {id="manage-workloads-using-taints-and-tolerations-con_{{ context }}"}

A taint lets a node repel the pods that do not tolerate it, and a toleration lets specific pods be scheduled on a tainted node. Use taints and tolerations together to reserve nodes for the workloads that belong on them.