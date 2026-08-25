---
title: Creating secondary networks on OVN-Kubernetes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating secondary networks on OVN-Kubernetes {id="creating-secondary-networks-ovnk"}
{%- set context = "configuring-additional-network-ovnk" %}

As a cluster administrator, you can configure a secondary network for your cluster by using the `NetworkAttachmentDefinition` (NAD) resource.  {._abstract}

{% leveloffset +1 %}{% include "./modules/configuring-ovnk-additional-networks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuration-ovnk-network-plugin-json-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuration-ovnk-multi-network-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-localnet-switched-topology.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-layer-two-switched-topology.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-pods-secondary-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-pods-static-ip.md" %}{% endleveloffset %}