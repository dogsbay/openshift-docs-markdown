{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage cloud provider credentials {id="manage-cloud-provider-credentials-con_{{ context }}"}

The Cloud Credential Operator (CCO) manages cloud provider credentials as custom resources so that {{ product_title }} components can request only the permissions they require. Depending on the CCO mode your cluster uses, you can mint short-lived credentials, pass through an existing account, or manage credentials manually with short-term tokens.