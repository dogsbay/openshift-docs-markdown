---
title: Configure an external gateway on the default network
---

# Configure an external gateway on the default network {#configuring-secondary-external-gateway}

As a cluster administrator, you can configure an external gateway on the default network.

This feature offers the following benefits:

- Granular control over egress traffic on a per-namespace basis
- Flexible configuration of static and dynamic external gateway IP addresses
- Support for both IPv4 and IPv6 address families

## Prerequisites {#configuring-secondary-external-gateway_prerequisites}

- Your cluster uses the OVN-Kubernetes network plugin.
- Your infrastructure is configured to route traffic from the secondary external gateway.

## Additional resources {#additional-resources_configuring-secondary-external-gateway}

- [Set-based requirement (Kubernetes)](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#set-based-requirement)

## Additional resources {#_additional_resources}

- [Understanding multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)
