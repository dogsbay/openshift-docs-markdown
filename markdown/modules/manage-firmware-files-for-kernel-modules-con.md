{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage firmware files for kernel modules {id="manage-firmware-files-for-kernel-modules-con_{{ context }}"}

Some kernel modules need firmware files that are not present on the node. Package the firmware in the kmod image and set the kernel firmware search path so that the kernel can find and load the files when the module starts.