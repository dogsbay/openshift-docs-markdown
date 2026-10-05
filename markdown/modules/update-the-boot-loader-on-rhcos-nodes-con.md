{%- set _mod_docs_content_type = "CONCEPT" %}
# Update the boot loader on RHCOS nodes {id="update-the-boot-loader-on-rhcos-nodes-con_{{ context }}"}

{{ op_system_first }} nodes that boot with UEFI Secure Boot use the GRUB boot loader, which is updated separately from the operating system. You can let the cluster update the boot loader automatically, or apply the update manually to each node.