---
title: Enabling multicast for a project
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling multicast for a project {id="nw-ovn-kubernetes-enabling-multicast"}
{%- set context = "ovn-kubernetes-enabling-multicast" %}

In {{ product_title }} with OVN-Kubernetes, you can enable IP multicast on a per-project basis so pods can send and receive multicast traffic. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-about-multicast.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-enabling-multicast.md" %}{% endleveloffset %}