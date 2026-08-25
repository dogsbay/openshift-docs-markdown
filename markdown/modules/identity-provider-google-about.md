{%- set _mod_docs_content_type = "CONCEPT" %}
# Google authentication {id="identity-provider-google-about_{{ context }}"}

By using Google as an identity provider, you can authenticate to your server. You can use the `hostedDomain` configuration attribute to limit authentication to members of a specific hosted domain. {._abstract}

Google authentication uses OpenID Connect through the cluster OAuth server.


:::note

Using Google as an identity provider requires users to get a token using `<namespace_route>/oauth/token/request` to use with command-line tools.

:::