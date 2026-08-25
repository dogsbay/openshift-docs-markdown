---
title: Configuring OAuth clients
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring OAuth clients {id="configuring-oauth-clients"}
{%- set context = "configuring-oauth-clients" %}

{{ product_title }} includes default OAuth clients for platform authentication. You can register additional OAuth clients to integrate third-party applications and configure token inactivity timeouts to enhance security. {._abstract}

{% leveloffset +1 %}{% include "./modules/oauth-default-clients.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-register-additional-client.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-configuring-token-inactivity-timeout-clients.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [OAuthClient [oauth.openshift.io/v1](/rest_api/oauth_apis/oauthclient-oauth-openshift-io-v1#oauthclient-oauth-openshift-io-v1)]