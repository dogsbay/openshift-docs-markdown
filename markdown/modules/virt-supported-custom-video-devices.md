{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported custom video device types {id="virt-supported-custom-video-devices_{{ context }}"}

When creating a virtual machine (VM), you can configure a custom video device type to override the default video configuration. {._abstract}

Configuring a custom video device allows you to specify different video devices, based on your guest operating system requirements and performance needs.


:::important

Custom video device support is a Technology Preview feature only. Technology Preview features are not supported with Red&#160;Hat production service level agreements (SLAs) and might not be functionally complete. Red&#160;Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.

For more information about the support scope of Red&#160;Hat Technology Preview features, see [Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview/).

:::


Using a custom video device  provides several advantages:


Performance
:   Certain video devices provide better performance than the default configuration. For example, VirtIO is a more efficient video device on AMD/x86_64 architecture than legacy VGA.

Resolution flexibility
:   With some video device types, you can set custom display resolutions.

Memory efficiency
:   Some video types are more memory efficient for headless or console-only operations.

You can configure the following video device types:

*   VirtIO: provides improved performance, and hardware-accelerated video decoding and encoding by offloading tasks to the host. Recommended for modern guest operating systems with available `VirtIO` drivers.
*   VGA: the standard for analog video display (default on AMD/x86_64 with BIOS).
*   Bochs: an emulated graphics adapter that provides a simple interface for guest operating systems to manage display settings (default on AMD/x86_64 with EFI).
*   Cirrus: a legacy video device that provides stable video output.
*   ramfb:  a simple, unaccelerated virtual display device primarily used in the QEMU emulator, and useful for ARM architecture.

**Video device support by architecture**

| Architecture | Boot mode | Default type | Supported types |
| --- | --- | --- | --- |
| AMD/x86_64 | BIOS | `vga` | `virtio`, `vga`, `bochs`, `cirrus`, `ramfb`` |
| AMD/x86_64 | EFI | `bochs` | `virtio`, `vga`, `bochs`, `cirrus`, `ramfb`` |
| ARM64 | BIOS/EFI | `virtio` | `virtio`, `ramfb` |
| s390x | BIOS/EFI | `virtio` | `virtio` |