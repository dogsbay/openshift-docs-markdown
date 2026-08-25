---
title: "Installation configuration parameters for {{ ibm_power_server_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation configuration parameters for {{ ibm_power_server_title }} {id="installation-config-parameters-ibm-power-vs"}
{%- set context = "installation-config-parameters-ibm-power-vs" -%}
{%- set platform = "{{ ibm_power_server_title }}" %}

Before you deploy an {{ product_title }} cluster on {{ ibm_power_server_name }}, you supply parameters to customize your cluster and the platform that hosts it. {._abstract}

When you create the `install-config.yaml` file, you provide values for the required parameters through the command line. You can then modify the `install-config.yaml` file to customize your cluster further.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}