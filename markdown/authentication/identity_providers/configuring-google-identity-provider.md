---
title: Configuring a Google identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring a Google identity provider {id="configuring-google-identity-provider"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-google-identity-provider" %}

Configure a Google identity provider so users can authenticate to {{ product_title }} with Google accounts. When configured, sign-in is permitted only for Google accounts in that hosted domain.

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-google-about.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +1 %}{% include "./modules/identity-provider-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-google-CR.md" %}{% endleveloffset %}

**Additional resources**

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-google-identity-provider_{{ context }}"}

*   [OpenID Connect (Google Identity documentation)](https://developers.google.com/identity/protocols/OpenIDConnect)

{% endif %}