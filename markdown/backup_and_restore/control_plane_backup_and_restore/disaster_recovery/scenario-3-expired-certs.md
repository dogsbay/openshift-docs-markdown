---
title: Recovering from expired control plane certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Recovering from expired control plane certificates {id="dr-recovering-expired-certs"}
{%- set context = "dr-recovering-expired-certs" %}

You can restore kubelet certificates on your {{ product_title }} cluster by approving pending certificate signing requests (CSRs) after control plane certificates expire. Approved CSRs return nodes to a healthy state. {._abstract}

{% leveloffset +1 %}{% include "./modules/dr-recover-expired-control-plane-certs.md" %}{% endleveloffset %}