{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites {id="olm-restricted-network-prereqs_{{ context }}"}

You must meet several prerequisites before using OLM in a disconnected environment. {._abstract}

The following prerequisites must be met:

*   You are logged in to your {{ product_title }} cluster as a user with `cluster-admin` privileges.
*   If you are using OLM in a disconnected environment on {{ ibm_z_name }}, you must have at least 12 GB allocated to the directory where you place your registry.