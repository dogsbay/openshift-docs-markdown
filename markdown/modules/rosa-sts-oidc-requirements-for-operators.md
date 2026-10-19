{%- set _mod_docs_content_type = "CONCEPT" %}
# OIDC requirements for Operator authentication {id="rosa-sts-oidc-requirements-for-operators_{{ context }}"}

For {{ product_title }} installations that use the AWS Security Token Service (STS), you must create a cluster-specific OpenID Connect (OIDC) provider that is used by the cluster Operators to authenticate or create your own OIDC configuration for your own OIDC provider.