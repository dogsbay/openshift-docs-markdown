{%- set _mod_docs_content_type = "CONCEPT" %}
# OLM-managed Operator support for authentication with {{ gcp_wid_short }} {id="cco-short-term-creds-gcp-olm_{{ context }}"}

To allow certain Operators that are managed by the Operator Lifecycle Manager (OLM) on {{ gcp_short }} clusters to authenticate with limited-privilege, short-term credentials that are managed outside the cluster, you can use manual mode with {{ gcp_wid_short }}.  {._abstract}

To determine if an Operator supports authentication with {{ gcp_wid_short }}, see the Operator description in the software catalog.