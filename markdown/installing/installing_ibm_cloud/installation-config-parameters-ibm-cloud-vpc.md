---
title: "Installation configuration parameters for {{ ibm_cloud_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation configuration parameters for {{ ibm_cloud_title }} {id="installation-config-parameters-ibm-cloud-vpc"}
{%- set context = "installation-config-parameters-ibm-cloud-vpc" -%}
{%- set platform = "{{ ibm_cloud_title }}" %}

Before you deploy an {{ product_title }} cluster on {{ ibm_cloud_name }}, you give values for parameters to customize your cluster and the platform that hosts it.

When you create the `install-config.yaml` file, you give values for the required parameters through the command line. You can then change the `install-config.yaml` file to customize your cluster further.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}
{%- set platform = false -%}