{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage static keys {id="virt-static-key-management-vm_{{ context }}"}

You can add a statically managed public SSH key when you create a virtual machine (VM) by using the {{ product_title }} web console or the command line. Save the key to a project to add it automatically to every VM that you create there. {._abstract}

You can also add a public SSH key to a project when you create a VM by using the web console. The key is saved as a secret and is added automatically to all VMs that you create.


:::note

If you add a secret to a project and then delete the VM, the secret is retained because it is a namespace resource. You must delete the secret manually.

:::