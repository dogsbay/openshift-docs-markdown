{%- set _mod_docs_content_type = "REFERENCE" %}
# Network performance optimizations {id="microshift-network-performance_{{ context }}"}

By default, three performance optimizations are applied to OVS services to minimize resource consumption: {._abstract}

*   CPU affinity to `ovs-vswitchd.service` and `ovsdb-server.service`
*   `no-mlockall` to `openvswitch.service`
*   Limit handler and `revalidator` threads to `ovs-vswitchd.service`