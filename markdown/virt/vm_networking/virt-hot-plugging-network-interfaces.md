---
title: Hot plugging secondary network interfaces
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Hot plugging secondary network interfaces {id="virt-hot-plugging-network-interfaces"}
{%- set context = "virt-hot-plugging-network-interfaces" %}

You can add or remove secondary network interfaces without stopping your virtual machine (VM). {{ VirtProductName }} supports hot plugging and hot unplugging for secondary interfaces that use bridge binding and the VirtIO device driver. {._abstract}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{{ VirtProductName }} also supports hot plugging secondary interfaces that use SR-IOV binding. To hot plug or hot unplug a secondary interface, you must have permission to create and list `VirtualMachineInstanceMigration` objects.


:::note

Hot unplugging is not supported for Single Root I/O Virtualization (SR-IOV) interfaces.

:::

{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-virtio-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-hot-plugging-bridge-network-interface-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-hot-unplugging-bridge-network-interface-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installing virtctl](/virt/getting_started/virt-using-the-cli-tools#virt-installing-virtctl-binary_virt-using-the-cli-tools)
*   [About live migration permissions](/virt/live_migration/virt-about-live-migration#virt-about-live-migration-permissions_virt-about-live-migration)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Creating a Linux bridge network attachment definition](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
*   [Creating an SR-IOV network attachment definition](/virt/vm_networking/virt-connecting-vm-to-sriov#nw-sriov-additional-network_virt-connecting-vm-to-sriov)
*   [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-attaching-vm-to-sriov-network_virt-connecting-vm-to-sriov)
{%- endif %}