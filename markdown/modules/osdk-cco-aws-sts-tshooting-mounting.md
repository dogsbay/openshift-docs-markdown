{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshoot secrets not mounting correctly {id="osdk-cco-aws-sts-tshooting-mounting_{{ context }}"}

To avoid credentials file mount failures on non-root pods, mount the secret to a writable location and enable the shared credentials file option in the AWS SDK.