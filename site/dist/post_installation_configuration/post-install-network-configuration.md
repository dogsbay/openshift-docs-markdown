---
title: Postinstallation network configuration
---

# Postinstallation network configuration {#post-install-network-configuration}

You can configure networking after installation to manage cluster traffic, security, connectivity, and default network policies for new projects.

After installing OpenShift Container Platform, you can further expand and customize your network to your requirements.

## Using the Cluster Network Operator {#post-install-network-configuration-cno}

For more information, see "Cluster Network Operator in OpenShift Container Platform".

## Network configuration tasks {#post-install-network-configuration-tasks}

- Configuring the cluster-wide proxy
- Configuring ingress cluster traffic overview
- Configuring the node port service range
- Configuring IPsec encryption
- Create a network policy or configure multitenant isolation with network policies
- Optimizing routing
- Understanding multiple networks

## Creating default network policies for a new project {#post-install-network-configuration-default-network-policies}

As a cluster administrator, you can modify the new project template to automatically include `NetworkPolicy` objects when you create a new project.

## Additional resources {#additional-resources_post-install-network-configuration}

- [Cluster Network Operator in OpenShift Container Platform](/networking/networking_operators/cluster-network-operator#nw-cluster-network-operator_cluster-network-operator)
- [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)
- [Configuring ingress cluster traffic overview](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/overview-traffic#overview-traffic)
- [Configuring the node port service range](/networking/configuring_network_settings/configuring-node-port-service-range#configuring-node-port-service-range)
- [Configuring IPsec encryption](/networking/network_security/configuring-ipsec-ovn#configuring-ipsec-ovn)
- [Create a network policy](/networking/network_security/network_policy/creating-network-policy#creating-network-policy)
- [Configure multitenant isolation with network policies](/networking/network_security/network_policy/multitenant-network-policy#multitenant-network-policy)
- [Optimizing routing](/scalability_and_performance/optimization/routing-optimization#routing-optimization)
- [Understanding multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)
