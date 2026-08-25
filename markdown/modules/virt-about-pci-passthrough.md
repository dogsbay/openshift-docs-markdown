{%- set _mod_docs_content_type = "CONCEPT" %}
# About preparing a host device for PCI passthrough {id="virt-about_pci-passthrough_{{ context }}"}

To prepare a host device for PCI passthrough by using the CLI, create a `MachineConfig` object and add kernel arguments to enable the Input-Output Memory Management Unit (IOMMU). {._abstract}

Bind the PCI device to the Virtual Function I/O (VFIO) driver and then expose it in the cluster by editing the `permittedHostDevices` field of the `HyperConverged` custom resource (CR). The `permittedHostDevices` list is empty when you first install the {{ VirtProductName }} Operator.

To remove a PCI host device from the cluster by using the CLI, delete the PCI device information from the `HyperConverged` CR.