{%- set _mod_docs_content_type = "CONCEPT" %}
# Use multiple pod networks {id="security-network-multiple-pod_{{ context }}"}

Each running container has only one network interface by default. You can use the Multus CNI plugin to create multiple CNI networks and attach any of those networks to a pod to separate private data onto a more restricted network.