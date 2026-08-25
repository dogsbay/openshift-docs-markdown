{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress and egress requirements for {{ hcp }} {id="hcp-ingress-egress-reqs_{{ context }}"}

Specific network ports must be open for communication between the management cluster, the {{ hcp }} components, and the compute nodes. The ports are categorized into ingress ports, which involve incoming traffic to {{ hcp }} and egress ports, which involve outgoing traffic from {{ hcp }}.