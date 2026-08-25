---
title: Configuring MetalLB BFD profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring MetalLB BFD profiles {id="metallb-configure-bfd-profiles"}
{%- set context = "configure-metallb-bfd-profiles" %}

As a cluster administrator, you can add, modify, and delete Bidirectional Forwarding Detection (BFD) profiles. The MetalLB Operator uses the BFD profile custom resources to identify which BGP sessions use BFD to provide faster path failure detection than BGP alone provides. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-metallb-bfdprofile-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-bfdprofle.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_metallb-configure-bfd-profiles" ._additional-resources}

*   [Configuring MetalLB BGP peers](/networking/ingress_load_balancing/metallb/metallb-configure-bgp-peers#metallb-configure-bgp-peers)