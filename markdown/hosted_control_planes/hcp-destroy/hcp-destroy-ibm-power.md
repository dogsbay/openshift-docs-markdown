---
title: "Destroying a hosted cluster on {{ ibm_power_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Destroying a hosted cluster on {{ ibm_power_title }} {id="hcp-destroy-ibm-power"}
{%- set context = "hcp-destroy-ibm-power" %}

You might want to remove a hosted cluster if you are no longer using it, you are trying to reduce resources, or the hosted cluster is experiencing issues that are difficult to resolve.

{% leveloffset +1 %}{% include "./modules/destroy-hc-ibm-power-cli.md" %}{% endleveloffset %}