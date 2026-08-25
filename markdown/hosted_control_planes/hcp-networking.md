---
title: "Networking for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Networking for {{ hcp }} {id="hcp-networking"}
{%- set context = "hcp-networking" %}

Ensure optimal performance with {{ hcp }} by configuring network settings. Those settings include internal subnets and proxy support for control-plane workloads, compute nodes, management clusters, and hosted clusters.

{% leveloffset +1 %}{% include "./modules/hcp-networking-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-isolation-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Control plane isolation](/hosted_control_planes/hcp-networking#hcp-isolation_hcp-networking)
*   [Distributing hosted cluster workloads](/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-distribute-workloads)

{% leveloffset +2 %}{% include "./modules/hcp-isolation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-networking-firewall.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-firewall-port-svc-reqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-firewall-port.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-non-bm-firewall-port-svc-reqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ingress-egress-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ingress-egress-reqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ingress-reqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-egress-reqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-ingress.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-custom-ovn-subnets.md" %}{% endleveloffset %}

**Additional resources**

*   [Troubleshooting internal subnets for hosted clusters](/hosted_control_planes/hcp-troubleshooting#hcp-ts-internal-subnets_hcp-troubleshooting)
*   [Creating a hosted cluster by using the CLI](/hosted_control_planes/hcp-deploy/hcp-deploy-bm#hcp-bm-hc_hcp-deploy-bm)

{% leveloffset +1 %}{% include "./modules/hcp-proxy-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-proxy-cp-workloads.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-proxy-ignition.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-proxy-api.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-proxy-mgmt-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-proxy-addl-network.md" %}{% endleveloffset %}

**Additional resources**

*   [Troubleshooting internal subnets for hosted clusters](/hosted_control_planes/hcp-troubleshooting#hcp-ts-internal-subnets_hcp-troubleshooting)
*   [Creating a hosted cluster by using the CLI](/hosted_control_planes/hcp-deploy/hcp-deploy-bm#hcp-bm-hc_hcp-deploy-bm)
*   [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes)
*   [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)