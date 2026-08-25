---
title: Postinstallation network configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Postinstallation network configuration {id="post-install-network-configuration"}
{%- set context = "post-install-network-configuration" %}

You can configure networking after installation to manage cluster traffic, security, connectivity, and default network policies for new projects.

After installing {{ product_title }}, you can further expand and customize your network to your requirements.

## Using the Cluster Network Operator {id="post-install-network-configuration-cno"}

{% include "./snippets/cluster-network-operator-abstract.md" %}

For more information, see "Cluster Network Operator in {{ product_title }}".

## Network configuration tasks {id="post-install-network-configuration-tasks"}

*   Configuring the cluster-wide proxy
*   Configuring ingress cluster traffic overview
*   Configuring the node port service range
*   Configuring IPsec encryption
*   Create a network policy or configure multitenant isolation with network policies
*   Optimizing routing
*   Understanding multiple networks

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
## Creating default network policies for a new project {id="post-install-network-configuration-default-network-policies"}

As a cluster administrator, you can modify the new project template to automatically include `NetworkPolicy` objects when you create a new project.

{% leveloffset +2 %}{% include "./modules/modifying-template-for-new-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-project-defaults.md" %}{% endleveloffset %}

{% endif %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Cluster Network Operator in {{ product_title }}](/networking/networking_operators/cluster-network-operator#nw-cluster-network-operator_cluster-network-operator)
*   [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)
*   [Configuring ingress cluster traffic overview](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/overview-traffic#overview-traffic)
*   [Configuring the node port service range](/networking/configuring_network_settings/configuring-node-port-service-range#configuring-node-port-service-range)
*   [Configuring IPsec encryption](/networking/network_security/configuring-ipsec-ovn#configuring-ipsec-ovn)
*   [Create a network policy](/networking/network_security/network_policy/creating-network-policy#creating-network-policy)
*   [Configure multitenant isolation with network policies](/networking/network_security/network_policy/multitenant-network-policy#multitenant-network-policy)
*   [Optimizing routing](/scalability_and_performance/optimization/routing-optimization#routing-optimization)
*   [Understanding multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)