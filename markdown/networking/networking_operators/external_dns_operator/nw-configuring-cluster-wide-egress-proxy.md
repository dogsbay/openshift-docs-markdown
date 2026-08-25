---
title: Configuring the cluster-wide proxy on the External DNS Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the cluster-wide proxy on the External DNS Operator {id="external-dns-operator-cluster-wide-proxy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-dns-operator-cluster-wide-proxy" %}

To propagate proxy settings to your deployed Operators, configure the cluster-wide proxy. The Operator Lifecycle Manager (OLM) automatically updates these Operators with the new `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables.

{% leveloffset +1 %}{% include "./modules/configuring-egress-proxy-edns-operator.md" %}{% endleveloffset %}