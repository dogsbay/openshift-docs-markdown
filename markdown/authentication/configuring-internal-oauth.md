---
title: Configuring the internal OAuth server
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the internal OAuth server {id="configuring-internal-oauth"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-internal-oauth" %}

The {{ product_title }} Control Plane includes a built-in OAuth server for user authentication. You can configure token duration, inactivity timeouts, and customize the OAuth server URL.

{% leveloffset +1 %}{% include "./modules/oauth-server-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-internal-tokens.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-internal-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-configuring-internal-oauth.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-configuring-token-inactivity-timeout.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-customizing-the-oauth-server-URL.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-server-metadata.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oauth-troubleshooting-api-events.md" %}{% endleveloffset %}