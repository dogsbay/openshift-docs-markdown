---
title: Deploying an egress router pod in redirect mode
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying an egress router pod in redirect mode {id="deploying-egress-router-ovn-redirection"}
{%- set context = "deploying-egress-router-ovn-redirection" %}

As a cluster administrator, you can deploy an egress router pod to redirect traffic to specified destination IP addresses from a reserved source IP address. {._abstract}

The egress router implementation uses the egress router Container Network Interface (CNI) plugin.

{% leveloffset +1 %}{% include "./modules/nw-egress-router-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-egress-router-redirect-mode-ovn.md" %}{% endleveloffset %}