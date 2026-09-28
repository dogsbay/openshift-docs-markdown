{%- set _mod_docs_content_type = "CONCEPT" %}
# Handle delegated authentication {id="handle-delegated-authentication-con_{{ context }}"}

Some registries delegate authentication to a separate token service rather than authenticating the pull request directly. Configuring a pull secret for this pattern requires credentials for the delegated endpoint so that the cluster can complete the token exchange.