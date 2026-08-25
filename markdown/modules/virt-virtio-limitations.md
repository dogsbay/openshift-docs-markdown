{%- set _mod_docs_content_type = "REFERENCE" %}
# VirtIO limitations {id="virt-virtio-limitations_{{ context }}"}

Each VirtIO interface uses one of the limited Peripheral Connect Interface (PCI) slots in the VM. There are a total of 32 slots available. The PCI slots are also used by other devices and must be reserved in advance, therefore slots might not be available on-demand. {._abstract}

{{ VirtProductName }} reserves up to six slots for hot plugging interfaces.


:::note

The actual number of slots available for hot plugging also depends on the machine type. For example, the default PCI topology for the q35 machine type supports hot plugging one additional PCIe device. For more information on PCI topology and hot plug support, see the [libvirt documentation](https://libvirt.org/pci-hotplug.html).

:::


If you restart the VM after hot plugging an interface, that interface becomes part of the standard network interfaces.