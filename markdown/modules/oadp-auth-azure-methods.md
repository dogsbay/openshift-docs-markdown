{%- set _mod_docs_content_type = "CONCEPT" %}
# About authenticating OADP with Azure {id="oadp-auth-azure-methods_{{ context }}"}

Review authentication methods for {{ oadp_short }} with Azure to select the appropriate authentication approach for your security requirements. {._abstract}

You can authenticate {{ oadp_short }} with Azure by using the following methods:

*   A Velero-specific service principal with secret-based authentication.
*   A Velero-specific storage account access key with secret-based authentication.
*   Azure Security Token Service.