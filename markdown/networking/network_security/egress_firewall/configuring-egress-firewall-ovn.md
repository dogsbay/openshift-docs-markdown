---
title: Configuring an egress firewall for a project
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an egress firewall for a project {id="configuring-egress-firewall-ovn"}
{%- set context = "configuring-egress-firewall-ovn" %}

As a cluster administrator, you can create an egress firewall for a project that restricts egress traffic leaving your {{ product_title }} cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-egress-firewall-about.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-coredns-egress-firewall.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-egress-firewall-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-egress-firewall-create.md" %}{% endleveloffset %}