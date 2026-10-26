{%- set _mod_docs_content_type = "CONCEPT" %}
# Hardware passthrough for the platform {id="virt-extend-platform-hardware-passthrough_{{ context }}"}

You can configure hardware passthrough to give virtual machines (VMs) direct access to physical devices on the host, such as GPUs, network adapters, and USB peripherals, for near-native performance. {._abstract}

{{ VirtProductName }} supports three passthrough mechanisms:


PCI passthrough
:   Assigns a PCI device, such as a GPU or network adapter, directly to a VM. This method requires IOMMU enablement on the host and binding the device to the VFIO driver. On {{ ibm_z_name }} and {{ ibm_linuxone_name }}, PCI passthrough also supports Network Express RoCE adapters and Internal Shared Memory (ISM) virtual PCI devices.


Virtual GPUs (vGPUs)
:   Uses the NVIDIA GPU Operator to partition a physical GPU into multiple virtual GPUs that can be shared across VMs. This method is useful when multiple VMs need GPU-accelerated workloads but do not each require a dedicated device.


USB host passthrough
:   Connects USB hardware attached to an {{ product_title }} node directly to a VM, as if the device were physically connected to the guest.