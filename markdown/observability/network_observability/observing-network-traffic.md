---
title: Observing the network traffic
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Observing the network traffic {id="nw-observe-network-traffic"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nw-observe-network-traffic" %}

As an administrator, you can observe the network traffic in the {{ product_title }} web console for detailed troubleshooting and analysis. This feature helps you get insights from different graphical representations of traffic flow.

{% leveloffset +1 %}{% include "./modules/network-observability-network-traffic-overview-view.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-working-with-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-configuring-options-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-pktdrop-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-packet-drops.md" %}{% endleveloffset %}

**Additional resources**

*   [Network Observability metrics](/observability/network_observability/metrics-alerts-dashboards#network-observability-metrics_metrics-dashboards-alerts)

{% leveloffset +2 %}{% include "./modules/network-observability-dns-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-dns-tracking.md" %}{% endleveloffset %}

**Additional resources**

*   [Network Observability metrics](/observability/network_observability/metrics-alerts-dashboards#network-observability-metrics_metrics-dashboards-alerts)

{% leveloffset +2 %}{% include "./modules/network-observability-RTT-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-RTT.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-ebpf-rule-flow-filter.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/network-observability-flow-filter-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-filtering-ebpf-rule.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-ebpf-flow-data-filtering-examples.md" %}{% endleveloffset %}

**Additional resources**

*   [Network Observability metrics](/observability/network_observability/metrics-alerts-dashboards#network-observability-metrics_metrics-dashboards-alerts)
*   [Health dashboards](/observability/network_observability/network-observability-operator-monitoring#network-observability-health-dashboard-overview_network_observability)

{% leveloffset +2 %}{% include "./modules/network-observability-user-defined-networks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-working-with-udn.md" %}{% endleveloffset %}

**Additional resources**

*   [About user-defined networks](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
*   [Creating a UserDefinedNetwork by using the CLI](/networking/multiple_networks/primary_networks/about-user-defined-networks#nw-udn-cr_about-user-defined-networks)
*   [Creating a UserDefinedNetwork by using the web console](/networking/multiple_networks/primary_networks/about-user-defined-networks#nw-udn-cr-ui_about-user-defined-networks)

{% leveloffset +2 %}{% include "./modules/network-observability-networking-events-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-viewing-network-events.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling feature sets using the CLI](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-cli_nodes-cluster-enabling-features)
*   [Checking OVN-Kubernetes network traffic with OVS sampling using the CLI](/networking/ovn_kubernetes_network_provider/ovn-kubernetes-troubleshooting-sources#nw-ovn-kubernetes-observability_ovn-kubernetes-sources-of-troubleshooting-information)

{% leveloffset +1 %}{% include "./modules/network-observability-trafficflow.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-working-with-trafficflow.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-configuring-options-trafficflow.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-exporting-traffic-flow-data.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-configuring-ipsec-with-flow-collector-resource.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring IPsec encryption](/networking/network_security/configuring-ipsec-ovn#configuring-ipsec-ovn)

{% leveloffset +2 %}{% include "./modules/network-observability-working-with-conversations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-ebpf-manager-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the eBPF Manager Operator](/networking/networking_operators/ebpf_manager/ebpf-manager-operator-install)

{% leveloffset +2 %}{% include "./modules/network-observability-histogram-trafficflow.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-working-with-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [Conntrack Zone ID](https://lwn.net/Articles/370152/#:~:text=A%20zone%20is%20simply%20a,to%20seperate%20conntrack%20defragmentation%20queues.)

{% leveloffset +2 %}{% include "./modules/network-observability-packet-translation-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-packet-translation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-topology.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-working-with-topology.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-configuring-options-topology.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-quickfilter.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring Quick Filters](/observability/network_observability/configuring-operator#network-observability-config-quick-filters_network_observability)
*   [Flow Collector sample resource](/observability/network_observability/configuring-operator#network-observability-flowcollector-view_network_observability)