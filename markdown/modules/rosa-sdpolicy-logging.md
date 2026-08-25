{%- set _mod_docs_content_type = "CONCEPT" %}
# Logging {id="rosa-sdpolicy-logging_{{ context }}"}

{{ product_title }} provides optional integrated log forwarding to Amazon (AWS) CloudWatch.

## Cluster audit logging {id="rosa-sdpolicy-cluster-audit-logging_{{ context }}"}
Cluster audit logs are available through AWS CloudWatch, if the integration is enabled. If the integration is not enabled, you can request the audit logs by opening a support case.

## Application logging {id="rosa-sdpolicy-application-logging_{{ context }}"}
Application logs sent to `STDOUT` are collected by Fluentd and forwarded to AWS CloudWatch through the cluster logging stack, if it is installed.