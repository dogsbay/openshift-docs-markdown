{%- set _mod_docs_content_type = "CONCEPT" %}
# OVN-Kubernetes networking events {id="network-observability-networking-events-overview_{{ context }}"}

Use OVN-Kubernetes network event tracking to monitor and audit network policies, admin network policies, and egress firewall rules in your cluster. {._abstract}

{%- set FeatureName = "OVN-Kubernetes networking events tracking" %}
{% include "./snippets/technology-preview.md" %}

You can use the insights from tracking network events to help with the following tasks:

*   Network monitoring: Monitor allowed and blocked traffic, detecting whether packets are allowed or blocked based on network policies and admin network policies.
*   Network security: You can track outbound traffic and see whether it adheres to egress firewall rules. Detect unauthorized outbound connections and flag outbound traffic that violates egress rules.

## Network Events feature view {id="network-observability-networking-events-feature-view_{{ context }}"}

When OVN-Kubernetes network event tracking is enabled, you can select the **Network Events** preconfigured feature view from the view selector in the **Network Traffic** page.

This view automatically displays network event-specific panels and columns, providing faster access to network event data without manual configuration.

See the "Additional resources" for more information about enabling and working with this view.