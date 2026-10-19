{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitor security events with the SPO log enricher {id="monitor-security-events-with-spo-log-enricher_{{ context }}"}

With the Advanced Audit Logging Framework in the {{ product_title }} Security Profiles Operator (SPO), you can correlate cluster users with actions during `oc exec`, `oc rsh`, and `oc debug` sessions. You can enable the log enricher, capture and correlate security events from pods and nodes, and disable it when monitoring is no longer required.