{%- set _mod_docs_content_type = "CONCEPT" %}
# Set up control plane log forwarding for cluster auditing and monitoring {id="rosa-hcp-set-up-log-forwarding_{{ context }}"}

{{ product_title }} provides a control plane log forwarder that is a separate system outside your cluster. You can use the control plane log forwarder to send your logs to either an Amazon CloudWatch group or Amazon S3 bucket.