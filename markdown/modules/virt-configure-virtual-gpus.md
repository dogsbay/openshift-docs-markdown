{%- set _mod_docs_content_type = "CONCEPT" %}
# Virtual GPU configuration {id="virt-configure-virtual-gpus_{{ context }}"}

You can use the NVIDIA GPU Operator to create virtual GPUs (vGPUs) and assign them to virtual machines (VMs) in {{ VirtProductName }}. {._abstract}

Before you configure virtual GPUs, you must enable the IOMMU driver by following the steps in 'Add kernel arguments to enable the IOMMU driver' in the PCI passthrough section.

**Additional resources**
{._additional-resources}

*   [MIG Support in {{ product_title }}](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/mig-ocp.html#)
*   [Obtaining Support from NVIDIA](https://access.redhat.com/solutions/5174941)
*   [MIG User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/supported-mig-profiles.html)