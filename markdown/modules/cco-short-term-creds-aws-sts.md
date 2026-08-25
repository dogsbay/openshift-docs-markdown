{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ aws_short }} {{ sts_full }} {id="cco-short-term-creds-aws-sts_{{ context }}"}

To assign IAM roles that provide short-term, limited-privilege security credentials to your cluster components, you can configure your cluster to use manual mode with {{ sts_first }}, allowing the individual {{ product_title }} components to use the {{ aws_short }} {{ sts_short }}. {._abstract}

These credentials are associated with IAM roles that are specific to each component that makes {{ aws_short }} API calls.