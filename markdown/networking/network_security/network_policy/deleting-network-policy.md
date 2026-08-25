---
title: Deleting a network policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deleting a network policy {id="deleting-network-policy"}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "deleting-network-policy" %}

As a cluster administrator, you can delete a network policy from a namespace. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-delete-cli.md" %}{% endleveloffset %}

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-delete-ocm.md" %}{% endleveloffset %}

{% endif %}