---
title: Creating primary networks using a NetworkAttachmentDefinition
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating primary networks using a NetworkAttachmentDefinition {id="about-primary-nwt-nad"}
{%- set context = "understanding-multiple-networks" %}

Use the `NetworkAttachmentDefinition` (NAD) resource to create primary networks when you need to use CNI plugins other than OVN-Kubernetes, such as IPVLAN or MACVLAN, or when you require direct control over the Container Network Interface (CNI) configuration for advanced networking scenarios. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-nad-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-create-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-nad-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-create-network-apply.md" %}{% endleveloffset %}