---
title: Installation configuration parameters for Nutanix
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installation configuration parameters for Nutanix {id="installation-config-parameters-nutanix"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installation-config-parameters-nutanix" -%}
{%- set platform = "Nutanix" %}

Before you deploy an {{ product_title }} cluster on Nutanix, you provide parameters to customize your cluster and the platform that hosts it. When you create the `install-config.yaml` file, you provide values for the required parameters through the command line. You can then modify the `install-config.yaml` file to customize your cluster further.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}