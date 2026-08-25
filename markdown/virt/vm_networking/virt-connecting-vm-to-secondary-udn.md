---
title: Connecting a virtual machine to a secondary localnet user-defined network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connecting a virtual machine to a secondary localnet user-defined network {id="virt-connecting-vm-to-secondary-udn"}
{%- set context = "virt-connecting-vm-to-secondary-udn" %}

You can connect a virtual machine (VM) to an OVN-Kubernetes localnet secondary network by using the CLI. Cluster administrators can use the `ClusterUserDefinedNetwork` (CUDN) custom resource definition (CRD) to create a shared OVN-Kubernetes network across multiple namespaces. {._abstract}

An OVN-Kubernetes secondary network is compatible with the multi-network policy API which provides the `MultiNetworkPolicy` custom resource definition (CRD) to control traffic flow to and from VMs. For more information, see "Additional resources".


:::important

You must use the `ipBlock` attribute to define network policy ingress and egress rules for specific CIDR blocks. Using pod or namespace selector policy peers is not supported.

:::


A localnet topology connects the secondary network to the physical underlay. This enables both east-west cluster traffic and access to services running outside the cluster, but it requires additional configuration of the underlying Open vSwitch (OVS) system on cluster nodes.

{% leveloffset +1 %}{% include "./modules/virt-creating-secondary-localnet-udn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-secondary-udn-namespace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-attaching-vm-to-secondary-udn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-udn-considerations-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-udn-roce-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-udn-osa-hipersockets-ibm-z.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [About the `ClusterUserDefinedNetwork` CR](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-cudn_about-user-defined-networks)
*   [Multi-network policy API](/networking/multiple_networks/secondary_networks/configuring-multi-network-policy#configuring-multi-network-policy)