{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure VM boot modes {id="virt-config-vm-boot-mode_{{ context }}"}

You can boot a virtual machine (VM) in Unified Extensible Firmware Interface (UEFI) mode or PXE boot a VM with a specified MAC address. {._abstract}

Use UEFI mode for faster boot times, the ability to boot to larger disks, and for the added security features. UEFI, like legacy BIOS, initializes hardware components and operating system image files when a computer starts. UEFI supports more modern features and customization options than BIOS, enabling faster boot times. It stores all the information about initialization and startup in a file with a `.efi` extension, which is stored on a special partition called EFI System Partition (ESP). The ESP also contains the boot loader programs for the operating system that is installed on the computer.

Use PXE boot to boot a VM over the network.

{% leveloffset +1 %}{% include "./virt-booting-vms-uefi-mode.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-configuring-vm-with-persistent-efi.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-pxe-booting-with-mac-address.md" %}{% endleveloffset %}