{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabled OAuth resources {id="external-auth-disabled-resources_{{ context }}"}

When you enable direct authentication, several OAuth resources are intentionally removed. {._abstract}


:::important

Ensure that you do not rely on these removed resources before configuring direct authentication.

:::


The following resources are unavailable when direct authentication is configured:

*   OpenShift OAuth server and OpenShift OAuth API server
*   User and group APIs (`*.user.openshift.io`)
*   OAuth APIs (`*.oauth.openshift.io`)
*   OAuth server and client configurations