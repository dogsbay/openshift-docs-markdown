---
title: Use a secondary network for SSH access
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Use a secondary network for SSH access {id="virt-using-secondary-networks-ssh"}
{%- set context = "virt-using-secondary-networks-ssh" %}

You can configure a secondary network, attach a virtual machine (VM) to the secondary network interface, and connect to the DHCP-allocated IP address by using SSH. {._abstract}


:::important

Secondary networks provide excellent performance because the traffic is not handled by the cluster network stack. However, the VMs are exposed directly to the secondary network and are not protected by firewalls. If a VM is compromised, an intruder could gain access to the secondary network. You must configure appropriate security within the operating system of the VM if you use this method.

:::


For additional information about networking options, see the Multus and SR-IOV documentation in the "{{ VirtProductName }} Tuning & Scaling Guide".

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

:::note

You can also access a VM attached to a secondary network interface by using the cluster FQDN.

:::

{% endif %}

## Prerequisites {id="prerequisites_{{ context }}"}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   You configured a secondary network such as Linux bridge or SR-IOV.
*   You created a network attachment definition for a Linux bridge network or the SR-IOV Network Operator created a network attachment definition when you created an `SriovNetwork` object.
{% endif %}
{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
*   You configured a secondary network.
*   You created a network attachment definition.
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-vm-creating-nic-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-secondary-network-ssh.md" %}{% endleveloffset %}