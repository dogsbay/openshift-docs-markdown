---
title: "Installation configuration parameters for {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation configuration parameters for {{ gcp_short }} {id="installation-config-parameters-gcp"}
{%- set context = "installation-config-parameters-gcp" -%}
{%- set platform = "{{ gcp_short }}" %}

Before you deploy an {{ product_title }} cluster on {{ gcp_first }}, you provide parameters to customize your cluster and the platform that hosts it. When you create the `install-config.yaml` file, you provide values for the required parameters through the command line. You can then modify the `install-config.yaml` file to customize your cluster further.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}