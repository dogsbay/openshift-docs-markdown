---
title: OVN-Kubernetes AdminNetworkPolicy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OVN-Kubernetes AdminNetworkPolicy {id="ovn-k-anp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ovn-k-anp" %}

In {{ product_title }}, you can configure `AdminNetworkPolicy` resources to enforce cluster-wide ingress and egress rules that namespace-scoped `NetworkPolicy` objects cannot override, which preserves administrative control over multi-tenant isolation and platform security.

{% leveloffset +1 %}{% include "./modules/nw-ovn-k-adminnetwork-policy.md" %}{% endleveloffset %}

**Additional resources**

*   [Network Policy API Working Group](https://network-policy-api.sigs.k8s.io/)

{% leveloffset +2 %}{% include "./modules/nw-ovn-k-adminnetwork-policy-action-rules.md" %}{% endleveloffset %}