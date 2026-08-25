---
title: Configuring physical networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring physical networks {id="configuring-physical-networks"}
{%- set context = "configuring-physical-networks" %}

As an {{ product_title }} administrator, you can create or configure a physical network in the {{ product_title }} web console without using the node network configuration policy (NNCP) page.


:::note

The **Physical networks** page is available when the NMState console plugin is installed. When you use the **Physical networks** page in the web console, the NNCP is generated automatically. If you need more flexibility or require complex settings, use the NNCP page.

:::


{% leveloffset +1 %}{% include "./modules/creating-a-physical-network.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/expanding-a-physical-network.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/creating-a-virtual-machine-network.md" %}{% endleveloffset %}