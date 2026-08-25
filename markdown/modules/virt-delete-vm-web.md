{%- set _mod_docs_content_type = "PROCEDURE" %}

# Deleting a virtual machine using the web console {id="virt-delete-vm-web_{{ context }}"}

Deleting a virtual machine (VM) permanently removes it from the cluster. {._abstract}

If the VM is delete protected, the **Delete** action is disabled in the VM’s **Actions** menu.

**Prerequisites**

*   You have disabled the VM’s delete protection setting.
*   You have stopped the VM. 

**Procedure**

1.  From the {{ product_title }} web console, choose your view:
    *   For a virtualization-focused view, select **Administrator** → **Virtualization** → **VirtualMachines**.
    *   For a general view, navigate to **Virtualization** → **VirtualMachines**.
1.  Click the **Options** menu {{ kebab }} beside a VM and select **Delete**.

    Alternatively, click the VM’s name to open the **VirtualMachine details** page and click **Actions** -> **Delete**.

    You can also right-click the VM in the tree view and select **Delete** from the pop-up menu.
1.  Optional: Select **With grace period** or clear **Delete disks**.
1.  Click **Delete** to permanently delete the VM.