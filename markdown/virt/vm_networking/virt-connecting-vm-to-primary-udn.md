---
title: Connecting a virtual machine to a primary user-defined network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connecting a virtual machine to a primary user-defined network {id="virt-connecting-vm-to-primary-udn"}
{%- set context = "virt-connecting-vm-to-primary-udn" %}

You can connect a virtual machine (VM) to a user-defined network (UDN) on the VM’s primary interface. The primary UDN replaces the default pod network in your specified namespace. You can define the primary UDN per project, where each project can use its specific subnet and topology.

{{ VirtProductName }} supports the namespace-scoped `UserDefinedNetwork` and the cluster-scoped `ClusterUserDefinedNetwork` custom resource definitions (CRD).


:::note

You must add the `k8s.ovn.org/primary-user-defined-network` label when you create a namespace that is to be used with user-defined networks.

:::


Cluster administrators can configure a primary `UserDefinedNetwork` CRD to create a tenant network that isolates the tenant namespace from other namespaces without requiring network policies. Additionally, cluster administrators can use the `ClusterUserDefinedNetwork` CRD to create a shared OVN network across multiple namespaces.

With the layer 2 topology, OVN-Kubernetes creates an overlay network between nodes. You can use this overlay network to connect VMs on different nodes without having to configure any additional physical networking infrastructure.

The layer 2 topology enables seamless migration of VMs without the need for Network Address Translation (NAT) because persistent IP addresses are preserved across cluster nodes during live migration.


:::note

You can use the Ethernet Virtual Private Network’s (EVPN) Border Gateway Protocol (BGP) control plane to extend layer 2 connectivity between VMs running on different {{ product_title }} clusters. BGP EVPN support for primary cluster-scoped UDNs enables deeper integration with data center networks for your virtualized workloads. For more information, see "About BGP EVPN for primary cluster user-defined networks" in the Additional resources section.

:::


You must consider the following limitations before implementing a primary UDN:

*   You cannot use the `virtctl ssh` command to configure SSH access to a VM.
*   You cannot use the `oc port-forward` command to forward ports to a VM.
*   You cannot use headless services to access a VM.

{% leveloffset +1 %}{% include "./modules/virt-creating-primary-udn-web-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-udn-namespace-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-primary-udn-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-a-localnet-cudn-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-primary-cluster-udn-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-primary-udn-cli-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-udn-namespace-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-a-primary-udn.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-a-primary-cluster-udn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-attaching-vm-to-primary-udn-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-vm-in-primary-udn-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-attaching-vm-to-primary-udn.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}"}
*   [About user-defined networks](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
*   [About BGP EVPN for primary cluster user-defined networks](/networking/advanced_networking/bgp_evpn_udn/about-bgp-evpn-user-defined-networks#about-bgp-evpn-user-defined-networks)
{% endif %}