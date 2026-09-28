{%- set _mod_docs_content_type = "CONCEPT" %}
# Secure flow data with TLS encryption {id="secure-flow-data-with-tls-encryption-con_{{ context }}"}

Network flow records travel from the eBPF agent through the flow collection pipeline to a storage backend such as Loki or Kafka. Securing that path means supplying the pipeline with the certificates and secrets it needs so that flow data is encrypted in transit.