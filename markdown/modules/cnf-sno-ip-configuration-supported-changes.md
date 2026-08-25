{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported network property changes {id="cnf-sno-ip-configuration-supported-changes_{{ context }}"}

The `IPConfig` CR supports the following network property changes: {._abstract}

*   IPv4 and IPv6 address changes for single-stack or dual-stack clusters
*   Machine network CIDR changes
*   Default gateway changes
*   DNS server list updates
*   Optional VLAN ID changes on the `br-ex` uplink path
*   Optional DNS response filtering changes on dual-stack clusters to filter IPv4 or IPv6