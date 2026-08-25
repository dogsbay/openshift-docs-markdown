---
title: Control incoming traffic with gateway listeners
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Control incoming traffic with gateway listeners {id="controlling-incoming-traffic-gateway-listeners"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "controlling-incoming-traffic-gateway-listeners" %}

To control network traffic flow, you can configure Gateway API listeners to define the designated port, protocol, and hostname for your gateway. By configuring listeners, you can specify secure TLS connections, dictate how traffic is terminated, and restrict which application routes are permitted to attach to the gateway.

To successfully manage your incoming traffic with gateway listeners, complete the following tasks:

*   Configure listener routing and security settings to define the ports, protocols, hostnames, and TLS certificates for your incoming traffic.
*   Understand listener routing conflicts by applying conflict management rules to ensure overlapping hostnames or ports are routed correctly.
*   Troubleshoot listener connections by monitoring listener status conditions to identify and resolve configuration errors.

{% leveloffset +1 %}{% include "./modules/configuring-listener-routing-security.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/gateway-listener-configuration-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolving-listener-routing-conflicts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-listener-conditions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/gateway-listener-troubleshooting-reference.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Gateway API documentation: Protocol-specific distinctiveness rules](https://gateway-api.sigs.k8s.io/concepts/api-overview/#distinctiveness)
*   [Gateway API documentation: Hostnames](https://gateway-api.sigs.k8s.io/concepts/hostnames/)