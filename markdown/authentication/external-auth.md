---
title: Enabling direct authentication with an external OIDC identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling direct authentication with an external OIDC identity provider {id="external-auth"}
{%- set context = "external-auth" %}

Configure {{ product_title }} to use an external OpenID Connect (OIDC) identity provider directly for token-based authentication, replacing the built-in OAuth server with your organization’s existing identity infrastructure. {._abstract}

{% leveloffset +1 %}{% include "./modules/external-auth-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/external-auth-disabled-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/external-auth-providers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-auth-configuring.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Example OIDC provider configuration for CLI clients only](/authentication/external-auth#external-auth-cli_external-auth)
*   [Configuring advanced direct authentication fields](/authentication/structured-auth-config-fields#structured-auth-config-fields)

{% leveloffset +2 %}{% include "./modules/external-auth-fields.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/external-auth-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-auth-disabling.md" %}{% endleveloffset %}