---
title: Configuring routes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring routes {id="nw-configuring-routes"}
{%- set context = "configuring-routes" %}

To customise route configuration for specific traffic behaviors, apply annotations, headers, and cookies. By using these mechanisms, you can define granular routing rules, extending standard capabilities to meet complex application requirements. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-configuring-route-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-http-header-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-route-set-or-delete-http-headers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-using-cookies-keep-route-statefulness.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-annotating-a-route-with-a-cookie-name.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-route-specific-annotations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-throughput-troubleshoot.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nw-route-admission-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-router-configuring-dual-stack.md" %}{% endleveloffset %}

{% endif %}