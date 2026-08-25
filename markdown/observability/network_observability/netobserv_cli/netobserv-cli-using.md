---
title: Using the Network Observability CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using the Network Observability CLI {id="netobserv-cli-using"}
{%- set context = "netobserv-cli-using" %}

The Network Observability CLI filters and visualizes network flow and packet telemetry directly within the terminal. The tool exports captured data as JSON, database files, or Packet Capture (PCAP) files for seamless integration with third-party analysis utilities. {._abstract}

{% leveloffset +1 %}{% include "./modules/network-observability-cli-capturing-flows.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/network-observability-cli-capturing-packets.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/network-observability-cli-capturing-metrics.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/network-observability-netobserv-cli-cleaning.md" %}{% endleveloffset %}

**Additional resources**

*   [Network Observability CLI reference](/observability/network_observability/netobserv_cli/netobserv-cli-reference#network-observability-netobserv-cli-reference_netobserv-cli-reference)