{%- set _mod_docs_content_type = "CONCEPT" %}
# Preparing to deploy {{ hcp }} on {{ aws_short }} {id="hcp-aws-prepare_{{ context }}"}

Preparing to deploy {{ hcp }} on {{ aws_first }} involves meeting several prerequisites and creating resources, including an S3 bucket, an OIDC secret, a routable public zone, IAM role and STS credentials.