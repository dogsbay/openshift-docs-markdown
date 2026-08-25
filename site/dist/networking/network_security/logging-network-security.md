---
title: Audit logging for network security
---

# Audit logging for network security {#logging-network-security}

The OVN-Kubernetes network plugin uses Open Virtual Network (OVN) access control lists (ACLs) to manage `AdminNetworkPolicy`, `BaselineAdminNetworkPolicy`, `NetworkPolicy`, and `EgressFirewall` objects. Audit logging exposes `Allow` and `Deny` ACL events for `NetworkPolicy`, `EgressFirewall` and `BaselineAdminNetworkPolicy` custom resources (CR). Logging also exposes `Allow`, `Deny`, and `Pass` ACL events for `AdminNetworkPolicy` (ANP) CR.

> [!NOTE]
> Audit logging is available for only the [OVN-Kubernetes network plugin](/openshift-docs-markdown/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes).

**Additional resources**

- [Understanding network policy APIs](/openshift-docs-markdown/networking/network_security/network-policy-apis#network-policy-apis)

## Additional resources {#logging-network-security-additional-resources}

- [About network policy](/openshift-docs-markdown/networking/network_security/network_policy/about-network-policy#about-network-policy)
- [Configuring an egress firewall for a project](/openshift-docs-markdown/networking/network_security/egress_firewall/configuring-egress-firewall-ovn#configuring-egress-firewall-ovn)
