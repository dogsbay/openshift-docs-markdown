---
title: Configuring a request header identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a request header identity provider {id="configuring-request-header-identity-provider"}
{%- set context = "configuring-request-header-identity-provider" %}

Configure the `request-header` identity provider to identify users from request header values, such as `X-Remote-User`. Use this provider when an authenticating proxy validates users and sets those headers for {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-about-request-header.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-request-header-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-apache-custom-proxy-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-proxy-custom-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-configuring-apache-request-header.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Optional channel](https://access.redhat.com/solutions/392003)