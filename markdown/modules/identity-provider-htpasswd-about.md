{%- set _mod_docs_content_type = "CONCEPT" %}
# About htpasswd authentication {id="identity-provider-htpasswd-about_{{ context }}"}

Configure `htpasswd` authentication to use a flat password file for login to {{ product_title }}. The file stores hashed credentials for each user and enables local authentication without an external identity provider. {._abstract}


:::warning

Do not use `htpasswd` authentication in {{ product_title }} for production environments. Use `htpasswd` authentication only for development environments.

:::