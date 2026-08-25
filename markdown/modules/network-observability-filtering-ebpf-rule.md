{%- set _mod_docs_content_type = "PROCEDURE" %}
# Filtering eBPF flow data using multiple rules {id="network-observability-filtering-ebpf-rule_{{ context }}"}

Configure multiple filtering rules in the `FlowCollector` custom resource to refine network traffic data collection by accepting or rejecting specific eBPF flows based on IP addresses and packet conditions. {._abstract}


:::important

*   You cannot use duplicate Classless Inter-Domain Routing (CIDRs) in filter rules.
*   When an IP address matches multiple filter rules, the rule with the most specific CIDR prefix (longest prefix) takes precedence.

:::


**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Under the **Provided APIs** heading for **Network Observability**, select **Flow Collector**.
1.  Select **cluster**, then select the **YAML** tab.
1.  Configure the `FlowCollector` custom resource.