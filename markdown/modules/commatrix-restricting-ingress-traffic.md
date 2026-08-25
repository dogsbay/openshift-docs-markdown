{%- set _mod_docs_content_type = "CONCEPT" %}
# Ingress traffic configuration with the commatrix plugin {id="commatrix-restricting-ingress-traffic_{{ context }}"}

You can use the `commatrix` plugin to generate `nftables` rules that configure the firewall on cluster nodes to permit only the ingress traffic defined in the communication matrix. {._abstract}

`nftables` is the packet filtering framework in the Linux kernel that replaces `iptables`.
{{ product_title }} cluster nodes running {{ op_system_first }} use `nftables` for packet filtering.
The `commatrix` plugin generates `nftables` rules and packages them as `MachineConfig` resources that the Machine Config Operator applies to your nodes.

When you generate firewall rules with the `commatrix` plugin in Butane format, the plugin also generates a `NodeDisruptionPolicy` patch.
This patch enables the Machine Config Operator to apply `nftables` rule updates without triggering a full node reboot, minimizing disruption to running workloads.


:::important

When operators or components are installed, enabled, uninstalled, or disabled, you must regenerate the firewall rules to reflect the new configuration. Failure to regenerate and apply firewall rules in this scenario might have the following consequences:

*   Unnecessary ports might remain open, which increases the attack surface of your cluster.
*   Services might fail to function correctly if required ports remain blocked by outdated firewall rules.

:::