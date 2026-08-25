{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage dynamic keys {id="virt-adding-dynamic-key-vm_{{ context }}"}

You can enable dynamic key injection for a virtual machine (VM) by using the {{ product_title }} web console or the command line. Then, you can update the key at runtime. {._abstract}


:::note

Only {{ op_system_base_full }} 9 supports dynamic key injection.

:::


If you disable dynamic key injection, the VM inherits the key management method of the image from which it was created.