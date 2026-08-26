{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for updating component routes {id="cloud-experts-update-component-routes-prerequisites_{{ context }}"}

Review the following prerequisites before updating component routes. {._abstract}

*   The {{ rosa_cli_first }} version 1.2.37 or later is installed.
*   The AWS CLI (`aws`) is installed.
*   You have a {{ product_title }} cluster version 4.14 or later.
*   The {{ oc_first }} is installed.
*   The `jq` CLI tool is installed.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   OpenSSL is installed.