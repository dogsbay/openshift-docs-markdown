{%- set _mod_docs_content_type = "CONCEPT" %}
# OVN-Kubernetes networking events {id="network-observability-networking-events-overview_{{ context }}"}

Use OVN-Kubernetes network event tracking to monitor and audit network policies, admin network policies, and egress firewall rules in your cluster. {._abstract}

{%- set FeatureName = "OVN-Kubernetes networking events tracking" %}
{% include "./snippets/technology-preview.md" %}

You can use the insights from tracking network events to help with the following tasks:

*   Network monitoring: Monitor allowed and blocked traffic, detecting whether packets are allowed or blocked based on network policies and admin network policies.
*   Network security: You can track outbound traffic and see whether it adheres to egress firewall rules. Detect unauthorized outbound connections and flag outbound traffic that violates egress rules.

See the _Additional resources_ in this section for more information about enabling and working with this view.