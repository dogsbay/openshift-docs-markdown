---
title: Editing a secondary network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Editing a secondary network {id="edit-additional-network"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "edit-additional-network" %}

To update network settings or change network parameters for a secondary network in {{ product_title }}, you can modify the configuration for an existing secondary network. Edit the `NetworkAttachmentDefinition` custom resource to apply your changes.

{% leveloffset +1 %}{% include "./modules/nw-multus-edit-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-edit-network-additional-vlans.md" %}{% endleveloffset %}