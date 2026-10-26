{%- set _mod_docs_content_type = "CONCEPT" %}
# PCI passthrough configuration {id="virt-configure-pci-passthrough_{{ context }}"}

The Peripheral Component Interconnect (PCI) passthrough feature enables you to access and manage hardware devices from a virtual machine (VM). When PCI passthrough is configured, the PCI devices function as if they were physically attached to the guest operating system. {._abstract}

To configure PCI passthrough, you prepare the nodes, prepare the host devices by enabling IOMMU and binding them to the VFIO driver, expose the devices in the cluster, and then assign them to VMs. On {{ ibm_z_name }} and {{ ibm_linuxone_name }}, you can also configure PCI passthrough for Network Express RoCE adapters and {{ ibm_name }} Internal Shared Memory (ISM) virtual PCI devices.

**Additional resources**
{._additional-resources}

*   [Enabling Intel VT-X and AMD-V Virtualization Hardware Extensions in BIOS](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-troubleshooting-enabling_intel_vt_x_and_amd_v_virtualization_hardware_extensions_in_bios)
*   [Managing file permissions](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/assembly_managing-file-permissions_configuring-basic-system-settings)
*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)
*   [{{ ibm_name }} Spyre Accelerator User’s Guide](https://www.ibm.com/docs/en/systems-hardware/linuxone/9175-ML1?topic=library-spyre-accelerator-users-guide)
*   [Network adapters as of {{ ibm_name }} z17 and {{ ibm_linuxone_name }} 5](https://www.ibm.com/docs/en/linux-on-systems?topic=networking-pci-network-adapters)