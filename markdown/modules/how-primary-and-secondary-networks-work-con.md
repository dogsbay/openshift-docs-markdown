{%- set _mod_docs_content_type = "CONCEPT" %}
# How primary and secondary networks work {id="how-primary-and-secondary-networks-work-con_{{ context }}"}

User-defined networks (UDNs) extend OVN-Kubernetes with custom layer&#160;2 and layer&#160;3 segments that can serve as either a primary or a secondary network for a pod. Understanding how these segments relate to default pod connectivity helps you plan where traffic flows.