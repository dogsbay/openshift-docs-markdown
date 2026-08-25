---
title: Configuring a basic authentication identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring a basic authentication identity provider {id="configuring-basic-authentication-identity-provider"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-basic-authentication-identity-provider" %}

Configure the `basic-authentication` identity provider. Users can log in to {{ product_title }} with credentials validated against a remote authentication service, without maintaining a separate user store in the cluster.

{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-about-basic-authentication.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-secret-tls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-basic-authentication-CR.md" %}{% endleveloffset %}

**Additional resources**

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/example-apache-httpd-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-basic-authentication-troubleshooting.md" %}{% endleveloffset %}