---
title: Configuring network policy for the operand
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring network policy for the operand {id="external-secrets-operator-config-net-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-operator-uninstall" %}

The {{ external_secrets_operator }} for {{ product_title }} includes pre-defined `NetworkPolicies` for security that rejects all egress traffic and allows traffic towards services that are required for the operand functionality. You must configure additional custom policies to allow the `external-secrets` controller to egress traffic towards external providers. These configurable policies are set through the `ExternalSecretsConfig` custom resource to establish the egress allow policy.

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-egress-allow-all-traffic.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-egress-specific-provider.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-ingress-egress-rules.md" %}{% endleveloffset %}