---
title: "{{ productwinc }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ productwinc }} overview {id="windows-container-overview"}
{%- set context = "windows-container-overview" %}

You can use {{ productwinc }} to run Windows compute nodes in an {{ product_title }} cluster by using the Red Hat Windows Machine Config Operator (WMCO) to install and manage Windows nodes.

{% leveloffset +1 %}{% include "./modules/managing-windows-container-workloads.md" %}{% endleveloffset %}