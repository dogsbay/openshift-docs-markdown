---
title: OVN-Kubernetes BaselineAdminNetworkPolicy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# OVN-Kubernetes BaselineAdminNetworkPolicy {id="ovn-k-banp"}
{%- set context = "ovn-k-banp" %}

To set cluster-wide network rules that namespace owners can override with a `NetworkPolicy` object, you can configure a `BaselineAdminNetworkPolicy` (BANP) custom resource in {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-ovn-k-baseline-adminnetwork-policy.md" %}{% endleveloffset %}