---
title: Configuring an OpenID Connect identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring an OpenID Connect identity provider {id="configuring-oidc-identity-provider"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-oidc-identity-provider" %}

Configure the `oidc` identity provider to integrate with an OpenID Connect identity provider using an [Authorization Code Flow](http://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth).

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-oidc-about.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
{% leveloffset +1 %}{% include "./modules/identity-provider-oidc-supported.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +1 %}{% include "./modules/identity-provider-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-oidc-CR.md" %}{% endleveloffset %}

**Additional resources**

*   See [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider) for information on parameters, such as `mappingMethod`, that are common to all identity providers.

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-configuring-using-web-console.md" %}{% endleveloffset %}

{% endif %}