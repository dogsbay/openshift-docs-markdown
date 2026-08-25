{%- set _mod_docs_content_type = "CONCEPT" %}
# Round-Trip Time {id="network-observability-RTT-overview_{{ context }}"}

Analyze network flow latencies by using TCP Round-Trip Time (RTT) metrics, which use eBPF hookpoints to identify performance bottlenecks and troubleshoot TCP-related issues through dedicated panels in the Overview view. {._abstract}

You can use TCP smoothed Round-Trip Time (sRTT) to analyze network flow latencies. You can use RTT captured from the `fentry/tcp_rcv_established` eBPF hookpoint to read sRTT from the TCP socket to help with the following:

*   Network Monitoring: Gain insights into TCP latencies, helping
  network administrators identify unusual patterns, potential bottlenecks, or
  performance issues.
*   Troubleshooting: Debug TCP-related issues by tracking latency and identifying
  misconfigurations.

By default, when RTT is enabled, you can see the following TCP RTT metrics represented in the **Overview**:

*   Top X 90th percentile TCP Round Trip Time with overall
*   Top X average TCP Round Trip Time with overall
*   Bottom X minimum TCP Round Trip Time with overall

Other RTT panels can be added in **Manage panels**:

*   Top X maximum TCP Round Trip Time with overall
*   Top X 99th percentile TCP Round Trip Time with overall

See the _Additional resources_ in this section for more information about enabling and working with this view.