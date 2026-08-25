---
title: Creating virtual machines from Red Hat images
---

# Creating virtual machines from Red Hat images {#virt-creating-vms-from-rh-images-overview}

{{ op_system_base }} golden images are published as container disks in a secure registry. The Containerized Data Importer (CDI) polls imports golden images into your cluster and stores them in the `openshift-virtualization-os-images` project as snapshots or persistent volume claims (PVCs).

{{ op_system_base }} images are automatically updated. You can disable and re-enable automatic updates for these images. For more information, see "Additional resources".

Cluster administrators can enable automatic subscription for {{ op_system_base }} virtual machines in the OpenShift Container Platform web console.

You can create virtual machines (VMs) from operating system images provided by Red Hat by using one of the following methods:

- Create a VM from a template by using the web console.
- Create a VM from an instance type by using the web console.
- Create a VM from a `VirtualMachine` manifest by using the command line.

> [!IMPORTANT]
> Do not create VMs in the default `openshift-*` namespaces. Instead, create a new namespace or use an existing namespace without the `openshift` prefix.

## Additional resources {#additional-resources_virt-creating-vms-from-rh-images-overview}

- [Managing Red Hat boot source updates](/openshift-docs-markdown/virt/storage/virt-automatic-bootsource-updates#virt-managing-auto-update-all-system-boot-sources_virt-automatic-bootsource-updates)
- [Creating a VM from a template by using the web console](/openshift-docs-markdown/virt/creating_vm/virt-creating-vms-from-templates#virt-creating-vms-from-templates)
- [Creating a VM from an instance type by using the web console](/openshift-docs-markdown/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)
- [Creating a VM from a `VirtualMachine` manifest by using the command line](/openshift-docs-markdown/virt/creating_vm/virt-creating-vms-from-cli#virt-creating-vms-from-cli)
