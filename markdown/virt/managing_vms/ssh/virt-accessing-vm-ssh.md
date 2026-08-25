---
title: SSH access for virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# SSH access for virtual machines {id="virt-accessing-vm-ssh"}
{%- set context = "virt-accessing-vm-ssh" %}

You can use SSH to securely access your virtual machines (VMs) from the command line. You can set up your SSH configuration using the `virtctl ssh` command, `virtctl port-forward` command, a service, or a secondary network.

{% leveloffset +1 %}{% include "./modules/virt-access-configuration-considerations.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [{{ VirtProductName }} Tuning & Scaling Guide](https://access.redhat.com/articles/6994974)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Connecting a virtual machine to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
*   [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)
*   [Creating a Linux bridge NAD by using the web console](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-creating-linux-bridge-nad-web_virt-connecting-vm-to-linux-bridge)
*   [Configuring SR-IOV additional network](/virt/vm_networking/virt-connecting-vm-to-sriov#nw-sriov-additional-network_virt-connecting-vm-to-sriov)
*   [Accessing a virtual machine by using its external FQDN](/virt/vm_networking/virt-accessing-vm-secondary-network-fqdn#virt-accessing-vm-secondary-network-fqdn)
{% endif %}
{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
*   [Connecting a virtual machine to an OVN-Kubernetes layer 2 secondary network](/virt/vm_networking/virt-connecting-vm-to-ovn-secondary-network#virt-connecting-vm-to-ovn-secondary-network)
{% endif %}