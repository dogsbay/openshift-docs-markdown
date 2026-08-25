{%- set _mod_docs_content_type = "PROCEDURE" %}
# Canceling live migration by using the web console {id="virt-canceling-vm-migration-web_{{ context }}"}

You can cancel the live migration of a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have the `kubevirt.io:migrate` RBAC role or you are a cluster administrator.

**Procedure**

1.  Navigate to **Virtualization** -> **VirtualMachines** in the web console.
1.  Select **Cancel Migration** on the Options menu {{ kebab }} beside a VM.