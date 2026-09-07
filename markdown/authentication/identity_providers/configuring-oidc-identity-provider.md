---
title: Configuring an OpenID Connect identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an OpenID Connect identity provider {id="configuring-oidc-identity-provider"}
{%- set context = "configuring-oidc-identity-provider" %}

To integrate {{ product_title }} with an external OpenID Connect (OIDC) identity provider, configure the `oidc` identity provider by using the Authorization Code Flow. Use this integration when your organization already uses OIDC for single sign-on. {._abstract}

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-oidc-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [OpenID Connect Discovery (OpenID documentation)](https://openid.net/specs/openid-connect-discovery-1_0.html)
*   [OpenID claims documentation](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

{% if openshift_enterprise %}
{% leveloffset +1 %}{% include "./modules/identity-provider-oidc-supported.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +1 %}{% include "./modules/identity-provider-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-oidc-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-configuring-using-web-console.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth)
*   [Issuer Identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier)

{% endif %}