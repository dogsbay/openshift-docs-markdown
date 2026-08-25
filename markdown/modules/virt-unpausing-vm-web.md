{%- set _mod_docs_content_type = "PROCEDURE" %}
# Unpausing a virtual machine {id="virt-unpausing-vm-web_{{ context }}"}

You can unpause a paused virtual machine (VM) from the web console. {._abstract}

**Prerequisites**

*   At least one of your VMs must have a status of **Paused**.

**Procedure**

1.  Click **Virtualization** -> **VirtualMachines** from the side menu.
1.  In the tree view, select the project that contains the VM that you want to unpause.
1.  Navigate to the appropriate menu for your use case:
    *   To stay on this page, where you can perform actions on multiple VMs:
        1.  Click the Options menu {{ kebab }} located at the far right end of the row and click **Control** -> **Unpause VirtualMachine**.
    *   To unpause the VM from the tree view:
        1.  Click the **>** icon next to the project name to open the list of VMs.
        1.  Right-click the name of the VM and select **Control** -> **Unpause**.
    *   To view comprehensive information about the selected VM before
    you unpause it:
        1.  Access the **VirtualMachine details** page by clicking the name of the virtual
        machine.
        1.  Click **Actions** → **Control** -> **Unpause**.