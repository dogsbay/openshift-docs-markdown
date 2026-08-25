---
title: Creating basic routes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating basic routes {id="creating-basic-routes"}
{%- set context = "creating-basic-routes" %}

If you have unencrypted HTTP, you can create a basic route with a route object. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-creating-a-route.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-path-based-routes.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nw-ingress-sharding-route-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-creating-a-route-via-an-ingress.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-label-propagation-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-label-propagation-enabling.md" %}{% endleveloffset %}