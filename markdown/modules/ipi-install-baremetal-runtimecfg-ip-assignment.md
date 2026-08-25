{%- set _mod_docs_content_type = "CONCEPT" %}
# The baremetal-runtimecfg tool {id="ipi-install-baremetal-runtimecfg-ip-assignment_{{ context }}"}

To prevent incorrect IP address assignments, learn how the `baremetal-runtimecfg` tool determines node IP addresses between your physical network and the Kubernetes control plane. {._abstract}

The `baremetal-runtimecfg` tool uses the following selection logic sequence to determine the IP address for a node:

1.  The tool looks at the `NODEIP_HINT` and all API and Ingress VIP addresses. 
1.  The tool selects an IP address on the same subnet. 
1.  If no address match is found, the tool looks at the default route and selects an IP address from the interface used by that route.

The `baremetal-runtimecfg` tool uses the following component order of precedence to sort IP addresses for a node:

1.  Default route priority
1.  Link index
1.  IP address family
1.  Address subnet contains the default gateway
1.  Public versus private
1.  Real IPv6 versus IPv4-mapped IPv6 addresses
1.  Alphanumeric stability

If the wrong IP address is provided because a node has multiple IP addresses on the primary interface, such as `br-ex`, an IP address mismatch is likely the issue because of the following scenarios:

*   Specifically for a secondary IP address on the same subnet as the primary IP address. During a node reboot, if both IP addresses are candidates, the `baremetal-runtimecfg` tool might select the secondary IP address based on the sort criteria of the tool.
*   During a node reboot, if a primary IP address and a secondary IP address on the same subnet are both candidates, the `baremetal-runtimecfg` tool might select the secondary IP address based on sorting criteria of the tool.
*   If the `baremetal-runtimecfg` tool does not set a node IP for the Kubelet service, Kubelet chooses an IP address associated with the default route.