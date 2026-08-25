---
title: Configuring services to use MetalLB
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring services to use MetalLB {id="metallb-configure-services"}
{%- set context = "configure-services-metallb" %}

To ensure predictable network endpoints, control how MetalLB assigns IP addresses to services of type `LoadBalancer`. Requesting specific addresses or pools ensures that your applications receive valid IP assignments that align with your specific network addressing plan. {._abstract}

{% leveloffset +1 %}{% include "./modules/request-specific-ip-address.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/request-ip-address-from-pool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/accept-any-ip-address.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/share-specific-ip-address.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-svc.md" %}{% endleveloffset %}