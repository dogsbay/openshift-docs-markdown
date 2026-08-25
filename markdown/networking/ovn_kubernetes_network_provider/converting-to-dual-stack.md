---
title: Converting to IPv4/IPv6 dual-stack networking
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Converting to IPv4/IPv6 dual-stack networking {id="converting-to-dual-stack"}
{%- set context = "converting-to-dual-stack" %}

To enable IPv4 and IPv6 on your cluster network in {{ product_title }}, you can convert a single-stack cluster to dual-stack networking. After conversion, new and existing pods can use both address families when you re-create workloads as needed. {._abstract}


:::important

When using dual-stack networking where IPv6 is required, you cannot use IPv4-mapped IPv6 addresses, such as `::FFFF:198.51.100.1`.

:::


**Additional resources**
{._additional-resources}

*   [OVN-Kubernetes purpose](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#nw-ovn-kubernetes-purpose_about-ovn-kubernetes)

{% leveloffset +1 %}{% include "./modules/nw-dual-stack-convert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dual-stack-convert-back-single-stack.md" %}{% endleveloffset %}