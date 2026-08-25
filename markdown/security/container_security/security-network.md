---
title: Securing networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing networks {id="security-network"}
{%- set context = "security-network" %}

You can manage network security at several levels, such as by using network namespaces and network policies. {._abstract}

At the pod level, network namespaces can prevent containers from seeing other pods or the host system by restricting network access. Network policies give you control over allowing and rejecting connections. You can manage ingress and egress traffic to and from your containerized applications.

{% leveloffset +1 %}{% include "./modules/security-network-namespaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-network-policies.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About network policy](/networking/network_security/network_policy/about-network-policy#about-network-policy)

{% leveloffset +1 %}{% include "./modules/security-network-multiple-pod.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)

{% leveloffset +1 %}{% include "./modules/security-network-isolating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-network-ingress.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring ingress cluster traffic](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#configuring-ingress-cluster-traffic-ingress-controller)

{% leveloffset +1 %}{% include "./modules/security-network-egress.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring an egress firewall for a project](/networking/network_security/egress_firewall/configuring-egress-firewall-ovn#configuring-egress-firewall-ovn)
*   [Configuring IPsec encryption](/networking/network_security/configuring-ipsec-ovn#configuring-ipsec-ovn)