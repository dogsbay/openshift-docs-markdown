{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restarting a virtual machine {id="virt-restarting-vm-web_{{ context }}"}

You can restart a running virtual machine (VM) from the web console. {._abstract}


:::important

The **Restart** action shuts down the VM and starts a new pod. This action removes all related resources including the `virt-launcher` pod and recreates them.

To avoid errors, do not restart a VM while it has a status of **Importing**.

:::


**Procedure**

1.  Click **Virtualization** → **VirtualMachines** from the side menu.
1.  In the tree view, select the project that contains the VM that you want to restart.
1.  Navigate to the appropriate menu for your use case:
    *   To stay on this page, where you can perform actions on multiple VMs:
        1.  Click the Options menu {{ kebab }} located at the far right end of the row and click **Control** → **Restart**.
        1.  If action confirmation is enabled, click **Restart** in the confirmation dialog.
    *   To restart the VM from the tree view:
        1.  Click the **>** icon next to the project name to open the list of VMs.
        1.  Right-click the name of the VM and select **Control** → **Restart**.
        1.  If action confirmation is enabled, click **Restart** in the confirmation dialog.
    *   To view comprehensive information about the selected VM before
    you restart it:
        1.  Access the **VirtualMachine details** page by clicking the name of the virtual
        machine.
        1.  Click **Actions** → **Restart**.
        1.  If action confirmation is enabled, click **Restart** in the confirmation dialog.