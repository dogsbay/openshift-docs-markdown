---
title: Managing boot sources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing boot sources {id="virt-creating-vms-from-rh-images-overview"}
{%- set context = "virt-creating-vms-from-rh-images-overview" %}

You can manage the {{ op_system_base }} boot sources that {{ VirtProductName }} uses to create virtual machines (VMs), including where they are stored and how they are automatically updated. {._abstract}

{{ op_system_base }} golden images are published as container disks in a secure registry. The Containerized Data Importer (CDI) polls and imports golden images into your cluster and stores them in the `openshift-virtualization-os-images` project as snapshots or persistent volume claims (PVCs).

{{ op_system_base }} images are automatically updated. You can disable and re-enable automatic updates for these images. For more information, see "Additional resources".

Cluster administrators can enable automatic subscription for {{ op_system_base }} virtual machines in the {{ product_title }} web console.

For information about creating VMs from these boot sources, see "Additional resources".


:::important

Do not create VMs in the default `openshift-*` namespaces. Instead, create a new namespace or use an existing namespace without the `openshift` prefix.

:::


{% leveloffset +1 %}{% include "./modules/virt-golden-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-vms-and-boot-sources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-boot-source-images-namespace-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-boot-source-images-namespace-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Managing Red&#160;Hat boot source updates](/virt/storage/virt-automatic-bootsource-updates#virt-managing-auto-update-all-system-boot-sources_virt-automatic-bootsource-updates)
*   [Creating a VM from a template by using the web console](/virt/creating_vm/virt-creating-vms-web#virt-creating-vm-from-template-web_virt-creating-vms-web)
*   [Creating a VM with custom configuration by using the web console](/virt/creating_vm/virt-creating-vms-web#virt-creating-vm-custom-configuration-web_virt-creating-vms-web)
*   [Creating a VM from a `VirtualMachine` manifest by using the command line](/virt/creating_vm/virt-creating-vms-from-cli#virt-creating-vms-from-cli)