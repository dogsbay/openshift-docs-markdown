{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage dynamic keys {id="virt-adding-dynamic-key-vm_{{ context }}"}

You can enable dynamic SSH key injection for a virtual machine (VM) that runs {{ op_system_base_full }} 9, and then update the public SSH key while the VM is running. {._abstract}


:::note

Only {{ op_system_base_full }} 9 supports dynamic key injection.

:::


If you disable dynamic key injection, the VM inherits the key management method of the image from which it was created.