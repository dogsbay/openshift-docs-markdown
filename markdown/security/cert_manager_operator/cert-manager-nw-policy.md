---
title: Network policy configuration for cert-manager Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Network policy configuration for cert-manager Operator {id="cert-manager-nw-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-manager-nw-policy" %}

The {{ cert_manager_operator }} provides predefined `NetworkPolicy` resources to enhance security by controlling the ingress and egress traffic for its components. By default, this feature is disabled to prevent connectivity issues or breaking changes during an upgrade. To use this feature, you must enable it in the `CertManager` custom resource (CR).

After enabling the default policies, you must manually configure additional egress rules to allow outbound traffic. These rules are required for {{ cert_manager_operator }} to communicate with external services beyond the API server and internal DNS.

The examples of services that require custom egress rules include the following:

*   ACME servers, for example, Let’s Encrypt
*   DNS-01 challenge providers, for example, AWS Route53 or Cloudflare
*   External CAs, such as HashiCorp Vault


:::note

Network policies are expected to be enabled by default in a future release, which could cause connectivity failures during an upgrade. To prepare for this change, configure the required egress policies.

:::


{% leveloffset +1 %}{% include "./modules/cert-manager-nw-policy-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-nw-policy-params.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-nw-policy-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-nw-policy-verify.md" %}{% endleveloffset %}