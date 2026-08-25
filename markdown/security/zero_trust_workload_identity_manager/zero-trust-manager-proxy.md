---
title: "Configuring the egress proxy for the {{ zero_trust_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the egress proxy for the {{ zero_trust_full }} {id="zero-trust-manager-proxy_{{ context }}"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-proxy" %}

Operator Lifecycle Manager (OLM) automatically configures managed Operators with proxy settings when you use a cluster-wide egress proxy. To support proxying HTTPS connections, you can inject certificate authority (CA) certificates into the {{ zero_trust_full }}.

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-proxy-support.md" %}{% endleveloffset %}

## Additional resources {id="zero-trust-manager-proxy_additional-resources"}

*   [Configuring proxy support in Operator Lifecycle Manager](/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)