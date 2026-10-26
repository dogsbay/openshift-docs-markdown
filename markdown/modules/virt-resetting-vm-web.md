{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reset a VM {id="virt-resetting-vm-web_{{ context }}"}

You can reset a virtual machine (VM) from the {{ product_title }} web console when the VM is unresponsive or has failed to boot. Unlike **Restart**, the **Reset** action keeps the existing pod and hard resets the VM inside it. {._abstract}

**Procedure**

1.  Click **Virtualization** → **VirtualMachines** from the side menu.
1.  In the tree view, select the project that contains the VM that you want to restart.
1.  Navigate to the appropriate menu for your use case:
    *   To stay on this page, where you can perform actions on multiple VMs:
        1.  Click the Options menu {{ kebab }} located at the far right end of the row and click **Control** → **Reset**.
        1.  If action confirmation is enabled, click **Reset** in the confirmation dialog.
    *   To reset the VM from the tree view:
        1.  Click the **>** icon next to the project name to open the list of VMs.
        1.  Right-click the name of the VM and select **Control** → **Reset**.
        1.  If action confirmation is enabled, click **Reset** in the confirmation dialog.
    *   To view comprehensive information about the selected VM before
    you reset it:
        1.  Access the **VirtualMachine details** page by clicking the name of the virtual
        machine.
        1.  Click **Actions** → **Control** → **Reset**.
        1.  If action confirmation is enabled, click **Reset** in the confirmation dialog.