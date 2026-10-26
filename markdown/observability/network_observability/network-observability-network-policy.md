---
title: Network policy and security
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Network policy and security {id="network-observability-network-policy"}
{%- set context = "network_observability" %}

Customize network policies and security hardening measures for network observability components. By default, TLS encryption and network policies are automatically configured to secure traffic between components. {._abstract}

{% leveloffset +1 %}{% include "./modules/network-observability-security-architecture.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-deploy-network-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-agent-flp-tls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-network-policy-examples.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating a network policy using the CLI](/networking/network_security/network_policy/creating-network-policy#nw-networkpolicy-object_creating-network-policy)