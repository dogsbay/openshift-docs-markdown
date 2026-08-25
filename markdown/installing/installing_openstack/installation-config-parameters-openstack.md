---
title: Installation configuration parameters for OpenStack
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installation configuration parameters for OpenStack {id="installation-config-parameters-openstack"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installation-config-parameters-openstack" -%}
{%- set platform = "OpenStack" %}

Before you deploy an {{ product_title }} cluster on {{ rh_openstack_first }}, provide parameters to customize your environment. Provide required parameters through the CLI when generating the `install-config.yaml` file. You can then further customize the file.

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}