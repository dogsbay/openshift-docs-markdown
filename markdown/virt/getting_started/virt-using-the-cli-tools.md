---
title: Using the CLI tools
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using the CLI tools {id="virt-using-the-cli-tools"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-using-the-cli-tools" %}

You can manage {{ VirtProductName }} resources by using the `virtctl` command-line tool. Virtual machine (VM) commands can also be used to manage virtual machine instances (VMIs) unless otherwise specified.


:::note

You can access and change VM disk images by using the `libguestfs` command-line tool. You deploy `libguestfs` by using the `virtctl libguestfs` command.

:::


{% leveloffset +1 %}{% include "./modules/virt-installing-virtctl-binary.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-virtctl-information-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-vm-information-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-vm-manifest-creation-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-vm-management-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-vm-connection-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-vm-export-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-hot-plug-and-hot-unplug-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-image-upload-commands.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-deploying-libguestfs-with-virtctl.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-about-libguestfs-tools-virtctl-guestfs.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}
*   [Red&#160;Hat Ansible Automation Hub](https://console.redhat.com/ansible/automation-hub)
*   [`libguestfs`](https://libguestfs.org)