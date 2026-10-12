{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring the egress proxy for the {{ zero_trust_full }} {id="zero-trust-manager-proxy-con_{{ context }}"}

Operator Lifecycle Manager (OLM) automatically configures managed Operators with proxy settings when you use a cluster-wide egress proxy. To support proxying HTTPS connections, you can inject certificate authority (CA) certificates into the {{ zero_trust_full }}.