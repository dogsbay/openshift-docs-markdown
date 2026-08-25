---
title: Attaching a pod to a secondary network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Attaching a pod to a secondary network {id="attaching-pod"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "attaching-pod" %}

To enable a pod to use additional network interfaces beyond the primary cluster network in {{ product_title }}, you can attach the pod to a secondary network. Secondary networks provide additional connectivity options for your workloads.

{% leveloffset +1 %}{% include "./modules/nw-multus-add-pod.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-advanced-annotations.md" %}{% endleveloffset %}