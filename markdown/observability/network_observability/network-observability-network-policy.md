---
title: Network Policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Network Policy {id="network-observability-network-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "network_observability" %}

As an administrator, you can create a network policy for the `netobserv` namespace. This policy secures inbound and outbound access to the Network Observability Operator.

{% leveloffset +1 %}{% include "./modules/network-observability-deploy-network-policy.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a network policy using the CLI](/networking/network_security/network_policy/creating-network-policy#nw-networkpolicy-object_creating-network-policy)