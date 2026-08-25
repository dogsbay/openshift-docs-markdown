---
title: Configuring a request header identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring a request header identity provider {id="configuring-request-header-identity-provider"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-request-header-identity-provider" %}

Configure the `request-header` identity provider to identify users from request header values, such as `X-Remote-User`. It is typically used in combination with an authenticating proxy, which sets the request header value.

{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-about-request-header.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-request-header-CR.md" %}{% endleveloffset %}

**Additional resources**

*   See [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider) for information on parameters, such as `mappingMethod`, that are common to all identity providers.

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

## Example Apache authentication configuration using request header {id="example-apache-auth-config-using-request-header"}

This example configures an Apache authentication proxy for the {{ product_title }}
using the request header identity provider.

{% leveloffset +2 %}{% include "./modules/identity-provider-apache-custom-proxy-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/identity-provider-configuring-apache-request-header.md" %}{% endleveloffset %}