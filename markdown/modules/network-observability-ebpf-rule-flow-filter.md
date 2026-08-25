{%- set _mod_docs_content_type = "CONCEPT" %}
# eBPF flow rule filter {id="network-observability-ebpf-flow-rule-filter_{{ context }}"}

Control packet capture volume by using eBPF flow rule filtering to specify capture criteria based on ports and CIDR notation, while monitoring filter performance through dedicated health dashboards and Prometheus metrics. {._abstract}

You can use rule-based filtering to control the volume of packets cached in the eBPF flow table. For example, a filter can specify that only packets coming from port 100 should be captured. Then only the packets that match the filter are captured and the rest are dropped.

You can apply multiple filter rules.

## Ingress and egress traffic filtering {id="ingress-and-egress-traffic-filtering_{{ context }}"}
Classless Inter-Domain Routing (CIDR) notation efficiently represents IP address ranges by combining the base IP address with a prefix length. For both ingress and egress traffic, the source IP address is first used to match filter rules configured with CIDR notation. If there is a match, then the filtering proceeds. If there is no match, then the destination IP is used to match filter rules configured with CIDR notation.

After matching either the source IP or the destination IP CIDR, you can pinpoint specific endpoints using the `peerIP` to differentiate the destination IP address of the packet. Based on the provisioned action, the flow data is either cached in the eBPF flow table or not cached.

## Dashboard and metrics integrations {id="dashboard-and-metrics-integrations_{{ context }}"}
When this option is enabled, the **Netobserv/Health** dashboard for **eBPF agent statistics** now has the **Filtered flows rate** view. Additionally, in **Observe** → **Metrics** you can query `netobserv_agent_filtered_flows_total` to observe metrics with the reason in **FlowFilterAcceptCounter**, **FlowFilterNoMatchCounter** or **FlowFilterRecjectCounter**.