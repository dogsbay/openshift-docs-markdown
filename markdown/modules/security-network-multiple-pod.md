{%- set _mod_docs_content_type = "CONCEPT" %}
# Using multiple pod networks {id="security-network-multiple-pod_{{ context }}"}

Each running container has only one network interface by default. You can use the Multus CNI plugin to create multiple CNI networks, and then attach any of those networks to a pod. In that way, you can do things such as separate private data onto a more restricted network and have multiple network interfaces on each node.