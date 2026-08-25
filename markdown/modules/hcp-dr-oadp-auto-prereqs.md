{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites to automate disaster recovery by using {{ oadp_short }} {id="hcp-dr-oadp-auto-prereqs_{{ context }}"}

Ensure that you meet the prerequisites to automate disaster recovery for {{ hcp }} by using {{ oadp_short }}. {._abstract}

The following prerequisites apply to the management cluster:

*   You installed the {{ oadp_short }} Operator. For more information, see "About installing {{ oadp_short }}".
*   You created a storage class.
*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ oadp_short }} subscription through a catalog source.
*   You have access to a cloud storage provider that is compatible with {{ oadp_short }}, such as S3, {{ azure_full }}, {{ gcp_full }}, or MinIO.
*   In a disconnected environment, you have access to a self-hosted storage provider that is compatible with {{ oadp_short }}, for example {{ odf_full }} or MinIO.
*   Your {{ hcp }} pods are up and running.
*   You are using a supported version of {{ oadp_short }} for your management cluster. For example, if your management cluster is on {{ product_title }} 4.20, you must use {{ oadp_short }} version 1.5. For more information, see "Support for {{ oadp_first }}".