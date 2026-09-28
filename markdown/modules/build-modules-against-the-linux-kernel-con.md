{%- set _mod_docs_content_type = "CONCEPT" %}
# Build modules against the Linux kernel {id="build-modules-against-the-linux-kernel-con_{{ context }}"}

Building kernel modules on a node requires the kernel development headers. You can create a machine config that adds the {{ op_system_base }} `kernel-devel` extension to every node in a machine config pool.