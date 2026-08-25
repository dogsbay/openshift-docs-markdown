---
title: Configuring the Network Observability Operator
---

# Configuring the Network Observability Operator {#configuring-network-observability-operators}

Configure the Network Observability Operator by updating the cluster-wide `FlowCollector` API resource (cluster) to manage component configurations and flow collection settings.

The `FlowCollector` is explicitly created during installation. Since this resource operates cluster-wide, only a single `FlowCollector` is allowed, and it must be named `cluster`. For more information, see the "FlowCollector API reference".

**Additional resources**

- [FlowCollector API reference](/openshift-docs-markdown/observability/network_observability/flowcollector-api#network-observability-flowcollector-api-specifications_network_observability)
- [Working with conversation tracking](/openshift-docs-markdown/observability/network_observability/observing-network-traffic#network-observability-working-with-conversations_nw-observe-network-traffic)

**Additional resources**

- [Network flows format reference](/openshift-docs-markdown/observability/network_observability/json-flows-format-reference#network-observability-flows-format_json_reference)

**Additional resources**

- [Filtering eBPF flow data using multiple rules](/openshift-docs-markdown/observability/network_observability/observing-network-traffic#network-observability-filtering-ebpf-rule_nw-observe-network-traffic)

**Additional resources**

- [Observing the network traffic from the traffic flows view](/openshift-docs-markdown/observability/network_observability/observing-network-traffic#network-observability-trafficflow_nw-observe-network-traffic)
- [Network observability without Loki](/openshift-docs-markdown/observability/network_observability/installing-operators#network-observability-without-loki_network_observability)
- [Network Flows format reference](/openshift-docs-markdown/observability/network_observability/json-flows-format-reference#network-observability-flows-format_json_reference)
