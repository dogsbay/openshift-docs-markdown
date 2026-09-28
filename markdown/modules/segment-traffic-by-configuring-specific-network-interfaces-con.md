{%- set _mod_docs_content_type = "CONCEPT" %}
# Segment traffic by configuring specific network interfaces {id="segment-traffic-by-configuring-specific-network-interfaces-con_{{ context }}"}

You can define bridges, VLANs, and bonded interfaces on cluster nodes by applying a `NodeNetworkConfigurationPolicy` manifest. Segmenting host networking this way separates workload traffic and provides redundant paths for high availability.