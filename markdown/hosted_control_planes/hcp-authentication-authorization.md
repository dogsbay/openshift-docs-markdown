---
title: "Authentication and authorization for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Authentication and authorization for {{ hcp }} {id="hcp-authentication-authorization"}
{%- set context = "hcp-authentication-authorization" %}

The {{ product_title }} control plane includes a built-in OAuth server. You can obtain OAuth access tokens to authenticate to the {{ product_title }} API. After you create your hosted cluster, you can configure OAuth by specifying an identity provider.

{% leveloffset +1 %}{% include "./modules/hcp-configuring-oauth.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-configuring-oauth-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-cco-aws-sts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/osdk-cco-aws-sts-enabling.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cco-verify-aws-sts.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Issuer Identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier)
*   [Understanding identity provider configuration](/authentication/understanding-identity-provider#understanding-identity-provider)
*   [Cluster Operators reference page for the Cloud Credential Operator](/operators/operator-reference#cloud-credential-operator_operator-reference)