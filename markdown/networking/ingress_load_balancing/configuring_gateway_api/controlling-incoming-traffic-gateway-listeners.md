---
title: Controlling incoming traffic with Gateway listeners
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Controlling incoming traffic with Gateway listeners {id="controlling-incoming-traffic-gateway-listeners"}
{%- set context = "controlling-incoming-traffic-gateway-listeners" %}

To control network traffic flow, you can configure Gateway API listeners to define the designated port, protocol, and hostname for your gateway. By configuring listeners, you can specify secure TLS connections, dictate how traffic is terminated, and restrict which application routes are permitted to attach to the gateway. {._abstract}

{% leveloffset +1 %}{% include "./modules/configuring-listener-routing-security.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/gateway-listener-configuration-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolving-listener-routing-conflicts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-listener-conditions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/gateway-listener-troubleshooting-reference.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Gateway API documentation: Protocol-specific distinctiveness rules](https://gateway-api.sigs.k8s.io/concepts/api-overview/#distinctiveness)
*   [Gateway API documentation: Hostnames](https://gateway-api.sigs.k8s.io/concepts/hostnames/)