{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements and limitations for network reconfiguration {id="cnf-sno-ip-configuration-requirements_{{ context }}"}

Network reconfiguration by using the `IPConfig` CR has the following requirements: {._abstract}

*   The cluster must be a {{ sno }} cluster.
*   The {{ lcao }} must be installed.
*   A baseline dnsmasq `MachineConfig` resource must exist, which is automatically installed by any {{ sno }} installed directly or indirectly by the Assisted Installer, including Agent-based Installer (ABI), multicluster engine (MCE), and {{ rh_rhacm_first }}.
*   All cluster operators must be available before starting a network reconfiguration.

Network reconfiguration by using the `IPConfig` CR has the following limitations:

*   For dual-stack clusters, exactly one IPv4 address and one IPv6 address are supported per node.
*   Only one NIC is supported. No bonding or link aggregation.
*   You can configure a maximum of one VLAN ID on the `br-ex` uplink path.
*   You must configure static networking on the host network. DHCP is not supported.
*   You cannot add a VLAN to a cluster that does not already have VLAN configuration.
*   Changing gateway or machine network without changing the address is not supported.
*   Changing DNS servers without changing at least one IP address is not supported.
*   You cannot set `spec.ipv4` on an IPv6-only cluster or `spec.ipv6` on an IPv4-only cluster.
*   The resulting routing table must not have routes that overlap or conflict with the default route through the configured gateways.
*   The cluster must not have a proxy network configuration.
*   You cannot perform an image-based upgrade and a network reconfiguration at the same time.