---
title: Installation configuration parameters for Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installation configuration parameters for Azure {id="installation-config-parameters-azure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installation-config-parameters-azure" -%}
{%- set platform = "Azure" %}

Before you deploy an {{ product_title }} cluster on Microsoft Azure, you create the `install-config.yaml` file and provide parameters to customize your cluster and the platform that hosts it. You can then modify the `install-config.yaml` file to customize your cluster further.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}

{%- set platform = false -%}