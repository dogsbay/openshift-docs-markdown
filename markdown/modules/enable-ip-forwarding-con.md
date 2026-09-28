{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable IP forwarding {id="enable-ip-forwarding-con_{{ context }}"}

IP forwarding is disabled on cluster nodes by default, which blocks traffic that must be routed through a node. You can enable IP forwarding globally with the Cluster Network Operator, or for a single interface with a node network configuration policy.