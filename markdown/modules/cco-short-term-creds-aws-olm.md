{%- set _mod_docs_content_type = "CONCEPT" %}
# OLM-managed Operator support for authentication with {{ aws_short }} {{ sts_short }} {id="cco-short-term-creds-aws-olm_{{ context }}"}

To allow certain Operators that are managed by the Operator Lifecycle Manager (OLM) on {{ aws_short }} clusters to authenticate with limited-privilege, short-term credentials that are managed outside the cluster, you can use manual mode with {{ sts_short }}.  {._abstract}

To determine if an Operator supports authentication with {{ aws_short }} {{ sts_short }}, see the Operator description in the software catalog.