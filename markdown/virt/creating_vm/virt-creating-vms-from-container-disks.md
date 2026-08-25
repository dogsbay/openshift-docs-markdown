---
title: Creating VMs by using container disks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating VMs by using container disks {id="virt-creating-vms-from-container-disks"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-creating-vms-from-container-disks" %}

You can create virtual machines (VMs) by using container disks built from operating system images.

You can enable auto updates for your container disks. For more information, see "Additional resources".

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

:::important

If the container disks are large, the I/O traffic might increase and cause worker nodes to be unavailable. You can perform the following tasks to reclaim resources:

*   Prune `DeploymentConfig` objects.
*   Configure garbage collection.

:::

{% endif %}

{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}

:::important

If the container disks are large, the I/O traffic might increase and cause worker nodes to be unavailable. You can prune `DeploymentConfig` objects to resolve this issue:

:::

{% endif %}

You create a VM from a container disk by performing the following steps:

1.  Build an operating system image into a container disk and upload it to your container registry.
1.  If your container registry does not have TLS, configure your environment to disable TLS for your registry.
1.  Create a VM with the container disk as the disk source by using the {{ product_title }} web console or the command line.


:::important

You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red&#160;Hat.

:::


{% leveloffset +1 %}{% include "./modules/virt-preparing-container-disk-for-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-disabling-tls-for-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-custom-image-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-container-disk-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Managing automatic boot source updates](/virt/storage/virt-automatic-bootsource-updates#virt-automatic-bootsource-updates)
*   [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Pruning objects to reclaim resources](/applications/pruning-objects#pruning-deployments_pruning-objects)
*   [Configuring garbage collection for containers and images](/nodes/nodes/nodes-nodes-garbage-collection#nodes-nodes-garbage-collection-configuring_nodes-nodes-configuring)
{% endif %}