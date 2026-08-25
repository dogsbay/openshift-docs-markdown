{%- set _mod_docs_content_type = "CONCEPT" %}
# About bound service account tokens {id="bound-sa-tokens-about_{{ context }}"}

You can use bound service account tokens to limit the scope of permissions for a given service account token.  {._abstract}

Bound service account tokens are audience-bound and time-bound. This facilitates the authentication of a service account to an IAM role and the generation of temporary credentials mounted to a pod. You can request bound service account tokens by using volume projection and the TokenRequest API.