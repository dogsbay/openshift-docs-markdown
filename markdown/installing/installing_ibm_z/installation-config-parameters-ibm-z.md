---
title: "Installation configuration parameters for {{ ibm_z_title }} and {{ ibm_linuxone_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation configuration parameters for {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="installation-config-parameters-ibm-z"}
{%- set context = "installation-config-parameters-ibm-z" -%}
{%- set platform = "IBM Z" %}

Before you deploy an {{ product_title }} cluster on {{ ibm_z_name }} or {{ ibm_linuxone_name }}, you provide a customized `install-config.yaml` file. This reference describes the required and optional parameters for that file. {._abstract}


:::note

While this document refers only to {{ ibm_z_name }}, all information in it also applies to {{ ibm_linuxone_name }}.

:::


{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}