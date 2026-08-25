---
title: Installation configuration parameters for AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installation configuration parameters for AWS {id="installation-config-parameters-aws"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installation-config-parameters-aws" -%}
{%- set platform = "AWS" %}

Before you deploy an {{ product_title }} cluster on {{ aws_first }}, you create the `install-config.yaml` file and provide parameters to customize your cluster and the platform that hosts it. You can then modify the `install-config.yaml` file to customize your cluster further.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}