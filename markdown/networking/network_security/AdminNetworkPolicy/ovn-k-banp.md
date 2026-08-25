---
title: OVN-Kubernetes BaselineAdminNetworkPolicy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OVN-Kubernetes BaselineAdminNetworkPolicy {id="ovn-k-banp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ovn-k-banp" %}

To set cluster-wide network rules that namespace owners can override with a `NetworkPolicy` object, you can configure a `BaselineAdminNetworkPolicy` (BANP) custom resource in {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/nw-ovn-k-baseline-adminnetwork-policy.md" %}{% endleveloffset %}