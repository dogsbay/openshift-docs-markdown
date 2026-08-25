---
title: Viewing a network policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Viewing a network policy {id="viewing-network-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "viewing-network-policy" %}

As a cluster administrator, you can view a network policy for a namespace.

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-view-cli.md" %}{% endleveloffset %}

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-view-ocm.md" %}{% endleveloffset %}

{% endif %}