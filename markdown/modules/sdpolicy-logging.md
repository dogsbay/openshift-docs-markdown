{%- set _mod_docs_content_type = "CONCEPT" %}
# Logging {id="sdpolicy-logging_{{ context }}"}

{{ product_title }} provides optional integrated log forwarding to Amazon CloudWatch (on AWS) or {{ gcp_full }} Logging (on {{ gcp_short }}). {._abstract}

For more information, see [About log collection and forwarding](https://docs.openshift.com/dedicated/observability/logging/log_collection_forwarding/log-forwarding.html).

## Cluster audit logging {id="audit-logging_{{ context }}"}
Cluster audit logs are available through Amazon CloudWatch (on AWS) or {{ gcp_full }} Logging (on {{ gcp_short }}), if the integration is enabled. If the integration is not enabled, you can request the audit logs by opening a support case. Audit log requests must specify a date and time range not to exceed 21 days. When requesting audit logs, customers should be aware that audit logs are many GB per day in size.
## Application logging {id="application-logging_{{ context }}"}
Application logs sent to `STDOUT` are forwarded to Amazon CloudWatch (on AWS) or {{ gcp_full }} Logging (on {{ gcp_short }}) through the cluster logging stack, if it is installed.