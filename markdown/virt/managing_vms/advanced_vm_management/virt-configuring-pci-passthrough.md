---
title: Configure PCI passthrough
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configure PCI passthrough {id="virt-configuring-pci-passthrough"}
{%- set context = "virt-configuring-pci-passthrough" %}

The Peripheral Component Interconnect (PCI) passthrough feature enables you to access and manage hardware devices from a virtual machine (VM). When PCI passthrough is configured, the PCI devices function as if they were physically attached to the guest operating system. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-preparing-nodes-for-gpu-passthrough.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-preventing-nvidia-gpu-operands-from-deploying-on-nodes.md" %}{% endleveloffset %}

## Preparing host devices for PCI passthrough {id="virt-preparing-host-devices-for-pci-passthrough"}

{% leveloffset +2 %}{% include "./modules/virt-about-pci-passthrough.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-pci-passthrough-blocklist.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-adding-kernel-arguments-enable-iommu.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-binding-devices-vfio-driver.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-exposing-pci-device-in-cluster-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-removing-pci-device-from-cluster-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-virtual-machines-for-pci-passthrough.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-assigning-pci-device-virtual-machine.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
{% leveloffset +1 %}{% include "./modules/virt-configuring-pci-passthrough-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-configuring-pci-passthrough-roce-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-configuring-pci-passthrough-ism-ibm-z.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_configuring-pci-passthrough" ._additional-resources}
*   [Enabling Intel VT-X and AMD-V Virtualization Hardware Extensions in BIOS](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-troubleshooting-enabling_intel_vt_x_and_amd_v_virtualization_hardware_extensions_in_bios)
*   [Managing file permissions](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/assembly_managing-file-permissions_configuring-basic-system-settings)
*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)
*   [{{ ibm_name }} Spyre Accelerator User’s Guide](https://www.ibm.com/docs/en/systems-hardware/linuxone/9175-ML1?topic=library-spyre-accelerator-users-guide)
*   [Network adapters as of {{ ibm_name }} z17 and {{ ibm_linuxone_name }} 5](https://www.ibm.com/docs/en/linux-on-systems?topic=networking-pci-network-adapters)