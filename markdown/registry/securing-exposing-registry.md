---
title: Exposing the registry
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "securing-exposing-registry" %}
{% include "./_attributes/common-attributes.md" %}
# Exposing the registry {id="securing-exposing-registry"}

By default, the {{ product_registry }} is secured during cluster installation so that it serves traffic through the Transport Layer Security (TLS) protocol. Unlike previous versions of {{ product_title }}, the registry is not exposed outside of the cluster at the time of installation. {._abstract}

{% leveloffset +1 %}{% include "./modules/registry-exposing-default-registry-manually.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-exposing-secure-registry-manually.md" %}{% endleveloffset %}