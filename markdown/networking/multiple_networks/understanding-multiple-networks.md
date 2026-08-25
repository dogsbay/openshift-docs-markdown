---
title: Understanding multiple networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding multiple networks {id="understanding-multiple-networks"}
{%- set context = "understanding-multiple-networks" %}

{{ product_title }} administrators and users can use user-defined networks (UDNs) or `NetworkAttachmentDefinition` (NADs) to define the networks that handle all of the ordinary network traffic of the cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/understanding-multiple-networks-con.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support-matrix-for-udn-nad.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_understanding-multiple-networks" ._additional-resources}

*   [About user-defined networks (UDNs)](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
*   [Creating primary networks using a NetworkAttachmentDefinition](/networking/multiple_networks/primary_networks/about-primary-nwt-nad#understanding-multiple-networks)
*   [Enabling multicast for a project](/networking/ovn_kubernetes_network_provider/enabling-multicast#nw-ovn-kubernetes-enabling-multicast)