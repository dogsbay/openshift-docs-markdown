{%- set _mod_docs_content_type = "PROCEDURE" %}
# Stopping a virtual machine {id="virt-stopping-vm-web_{{ context }}"}

You can stop a virtual machine (VM) from the web console. {._abstract}

**Procedure**

1.  Click **Virtualization** ->  **VirtualMachines** from the side menu.
1.  In the tree view, select the project that contains the VM that you want to stop.
1.  Navigate to the appropriate menu for your use case:
    *   To stay on this page, where you can perform actions on multiple VMs:
        1.  Click the Options menu {{ kebab }} located at the far right end of the row and click **Control** -> **Stop VirtualMachine**.
        1.  If action confirmation is enabled, click **Stop** in the confirmation dialog.
    *   To stop the VM from the tree view:
        1.  Click the **>** icon next to the project name to open the list of VMs.
        1.  Right-click the name of the VM and select **Control** -> **Stop**.
        1.  If action confirmation is enabled, click **Stop** in the confirmation dialog.
    *   To view comprehensive information about the selected VM before you stop it:
        1.  Access the **VirtualMachine details** page by clicking the name of the VM.
        1.  Click **Actions** → **Control** -> **Stop**.
        1.  If action confirmation is enabled, click **Stop** in the confirmation dialog.