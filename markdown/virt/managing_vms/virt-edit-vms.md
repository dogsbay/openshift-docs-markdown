---
title: Edit the configuration of a virtual machine
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Edit the configuration of a virtual machine {id="virt-edit-vms"}
{%- set context = "virt-edit-vms" %}

You can update virtual machine (VM) configuration details like CPU, memory, and networking by using the CLI or the {{ product_title }} web console. In the web console, you can modify settings on the **VirtualMachine details** page or by editing the YAML file directly. {._abstract}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
To edit a VM to configure disk sharing by using virtual disks or LUN, see "Configuring shared volumes for virtual machines".
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-change-vm-instance-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-hot-plugging-memory.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-hot-plugging-cpu.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-editing-vm-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-add-disk-to-vm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-storage-wizard-fields-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-mounting-windows-driver-disk-on-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-adding-secret-configmap-service-account-to-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-updating-multiple-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-performing-actions-on-multiple-virtual-machines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configure-multiple-iothreads.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Configuring shared volumes for virtual machines](/virt/managing_vms/virtual_disks/virt-configuring-shared-volumes-for-vms#virt-configuring-shared-volumes-for-vms)
{%- endif %}
*   [Understanding config maps](/nodes/pods/nodes-pods-configmaps#nodes-pods-configmap-overview_builds-configmaps)
*   [Providing sensitive data to pods](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about)
*   [Understanding and creating service accounts](/authentication/understanding-and-creating-service-accounts#service-accounts-overview)