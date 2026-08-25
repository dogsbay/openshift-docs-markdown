---
title: Configuring namespaced SR-IOV resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring namespaced SR-IOV resources {id="configuring-namespaced-sriov-resources"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-namespaced-sriov-resources" %}

Namespaced SriovNetwork Resources allow application owners to create and manage their own SriovNetwork resources directly within their namespaces, rather than relying on a cluster administrator to do it in a shared operator namespace. This method simplifies permissions, improves security, and provides better separation between applications. 

{% leveloffset +1 %}{% include "./modules/nw-introduction-namespaced-sriov.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configuring-sriov-in-app-namespace.md" %}{% endleveloffset %}