{%- set _mod_docs_content_type = "CONCEPT" %}
# Source clone secrets {id="builds-adding-source-clone-secrets_{{ context }}"}

Builder pods require access to any Git repositories defined as source for a build. Source clone secrets are used to provide the builder pod with access it would not normally have access to, such as private repositories or repositories with self-signed or untrusted SSL certificates.

The following source clone secret configurations are supported:

*   A `.gitconfig` file
*   Basic authentication
*   SSH key authentication
*   Trusted certificate authorities


:::note

You can also use combinations of these configurations to meet your specific needs.

:::