---
title: Installation configuration parameters for vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installation configuration parameters for vSphere {id="installation-config-parameters-vsphere"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installation-config-parameters-vsphere" -%}
{%- set platform = "vSphere" %}

Before you deploy an {{ product_title }} cluster on vSphere, you can configure parameters to customize your cluster and the platform that hosts it. The installation program uses the information in the `install-config.yaml` file to provision required infrastructure and deploy cluster components. When you create the `install-config.yaml` file, you can configure the values for your required parameters through the command line. Edit the `install-config.yaml` file to customize your cluster further before installation begins.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}