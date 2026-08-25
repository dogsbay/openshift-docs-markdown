---
title: Configuring virtual GPUs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring virtual GPUs {id="virt-configuring-virtual-gpus"}
{%- set context = "virt-configuring-virtual-gpus" %}

Use the NVIDIA GPU operator to create virtual GPUs (vGPUs) and assign them to virtual machines (VMs) in {{ VirtProductName }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-about-using-virtual-gpus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-adding-kernel-arguments-enable-iommu.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-using-gpu-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-label-nodes-with-mig-backed-profile.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-and-exposing-mediated-devices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-removing-mediated-device-from-cluster-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-assigning-vgpu-vm-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-assigning-vgpu-vm-web.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Enabling Intel VT-X and AMD-V Virtualization Hardware Extensions in BIOS](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-troubleshooting-enabling_intel_vt_x_and_amd_v_virtualization_hardware_extensions_in_bios)
*   [MIG Support in {{ product_title }}](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/mig-ocp.html#)
*   [Configuring PCI passthrough](/virt/managing_vms/advanced_vm_management/virt-configuring-pci-passthrough#virt-configuring-pci-passthrough)
*   [Obtaining Support from NVIDIA](https://access.redhat.com/solutions/5174941)
*   [MIG User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/supported-mig-profiles.html)