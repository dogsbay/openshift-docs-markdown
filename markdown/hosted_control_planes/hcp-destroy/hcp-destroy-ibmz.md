---
title: "Destroying a hosted cluster on {{ ibm_z_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Destroying a hosted cluster on {{ ibm_z_title }} {id="hcp-destroy-ibmz"}
{%- set context = "hcp-destroy-ibmz" %}

You might want to remove a hosted cluster if you are no longer using it, you are trying to reduce resources, or the hosted cluster is experiencing issues that are difficult to resolve.

{% leveloffset +1 %}{% include "./modules/destroy-hc-ibm-z-cli.md" %}{% endleveloffset %}