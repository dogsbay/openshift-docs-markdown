{%- set _mod_docs_content_type = "CONCEPT" %}
# IAM roles assigned by using the CCO in a hosted cluster on {{ aws_short }} {id="hcp-cco-aws-sts_{{ context }}"}

You can assign components Identity and Access Management (IAM) roles that provide short-term, limited-privilege security credentials by using the Cloud Credential Operator (CCO) in hosted clusters on {{ aws_first }}.  {._abstract}

By default, the CCO runs in a hosted control plane.


:::note

The CCO supports a manual mode only for hosted clusters on {{ aws_short }}. By default, hosted clusters are configured in a manual mode. The management cluster might use modes other than manual.

:::