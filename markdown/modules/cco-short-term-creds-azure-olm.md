{%- set _mod_docs_content_type = "CONCEPT" %}
# OLM-managed Operator support for authentication with {{ entra_first }} {id="cco-short-term-creds-azure-olm_{{ context }}"}

To allow certain Operators that are managed by the Operator Lifecycle Manager (OLM) on {{ azure_short }} clusters to authenticate with limited-privilege, short-term credentials that are managed outside the cluster, you can use manual mode with {{ entra_first }}.  {._abstract}

To determine if an Operator supports authentication with {{ entra_short }}, see the Operator description in the software catalog.