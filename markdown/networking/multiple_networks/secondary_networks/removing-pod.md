---
title: Removing a pod from a secondary network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Removing a pod from a secondary network {id="removing-pod"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "removing-pod" %}

To disconnect a pod from specific network configurations in {{ product_title }}, you can remove the pod from a secondary network. Delete the pod to remove its connection to the secondary network.

{% leveloffset +1 %}{% include "./modules/nw-multus-remove-pod.md" %}{% endleveloffset %}