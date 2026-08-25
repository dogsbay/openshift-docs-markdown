{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ product_title }} OAuth server {id="oauth-server-overview_{{ context }}"}

The {{ product_title }} Control Plane includes a built-in OAuth server. Users obtain OAuth
access tokens to authenticate themselves to the API. {._abstract}

When a person requests a new OAuth token, the OAuth server uses the configured
identity provider to determine the identity of the person making the request.

It then determines what user that identity maps to, creates an access token for
that user, and returns the token for use.