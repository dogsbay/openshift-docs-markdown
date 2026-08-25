---
title: Removing an additional network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Removing an additional network {id="remove-additional-network"}
{%- set context = "remove-additional-network" %}

To clean up unused network configurations or free up network resources in {{ product_title }}, you can remove an additional network attachment. Delete the `NetworkAttachmentDefinition` custom resource to remove the secondary network from your cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-multus-delete-network.md" %}{% endleveloffset %}