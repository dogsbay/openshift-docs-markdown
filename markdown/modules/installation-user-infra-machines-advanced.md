{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Advanced {{ op_system }} installation configuration {id="installation-user-infra-machines-advanced_{{ context }}"}

To apply advanced configurations unavailable through default installation methods, manually provision {{ op_system_first }} nodes for {{ product_title }}. {._abstract}

This approach enables granular control over the node infrastructure to meet specific deployment requirements.

*   Passing kernel arguments to the live installer
*   Running `coreos-installer` manually from the live system
*   Customizing a live ISO or PXE boot image

The advanced configuration topics for manual {{ op_system_first }} installations detailed in this section relate to disk partitioning, networking, and configuring Ignition in different ways.

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = "" -%}
{% endif %}