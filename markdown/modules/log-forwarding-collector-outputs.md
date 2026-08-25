{%- set _mod_docs_content_type = "REFERENCE" %}
# Collector outputs {id="log-forwarding-collector-outputs_{{ context }}"}

The following collector outputs are supported:

**Supported outputs**

| Feature | Fluentd | Vector |
| --- | --- | --- |
| Elasticsearch v6-v8 | &#10003; | &#10003; |
| Fluent forward | &#10003; |  |
| Syslog RFC3164 | &#10003; | &#10003; (Logging 5.7+) |
| Syslog RFC5424 | &#10003; | &#10003; (Logging 5.7+) |
| Kafka | &#10003; | &#10003; |
| Amazon Cloudwatch | &#10003; | &#10003; |
| Amazon Cloudwatch STS | &#10003; | &#10003; |
| Loki | &#10003; | &#10003; |
| HTTP | &#10003; | &#10003; (Logging 5.7+) |
| {{ gcp_full }} Logging | &#10003; | &#10003; |
| Splunk |  | &#10003; (Logging 5.6+) |