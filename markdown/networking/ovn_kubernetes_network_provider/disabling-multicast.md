---
title: Disabling multicast for a project
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Disabling multicast for a project {id="nw-ovn-kubernetes-disabling-multicast"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ovn-kubernetes-disabling-multicast" %}

In {{ product_title }} with OVN-Kubernetes, you can disable IP multicast on a per-project basis so pods no longer receive multicast traffic.

{% leveloffset +1 %}{% include "./modules/nw-disabling-multicast.md" %}{% endleveloffset %}