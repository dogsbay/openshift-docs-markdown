---
title: Export a virtual machine
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Export a virtual machine {id="virt-exporting-vms"}
{%- set context = "virt-exporting-vms" %}

Export a virtual machine (VM) and its associated disks to import it into another cluster, or for another use case, such as forensic volume analysis. {._abstract}

You create a `VirtualMachineExport` custom resource (CR) by using the command-line interface.

Alternatively, you can use the `virtctl vmexport` command to create a `VirtualMachineExport` CR and to download exported volumes.


:::note

You can migrate virtual machines between OpenShift Virtualization clusters by using the Migration Toolkit for Virtualization.

:::


{% leveloffset +1 %}{% include "./modules/virt-creating-virtualmachineexport.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-accessing-exported-vm-manifests.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Migration Toolkit for Virtualization](https://access.redhat.com/products/migration-toolkits-virtualization)
*   [virtctl vmexport command](/virt/getting_started/virt-using-the-cli-tools#vm-export-commands_virt-using-the-cli-tools)