{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting a virtual machine {id="virt-starting-vm-web_{{ context }}"}

You can start a virtual machine (VM) from the web console. {._abstract}

**Procedure**

1.  Click **Virtualization** -> **VirtualMachines** from the side menu.
1.  In the tree view, select the project that contains the VM that you want to start.
1.  Navigate to the appropriate menu for your use case:
    *   To stay on this page, where you can perform actions on multiple VMs:
        1.  Click the Options menu {{ kebab }} located at the far right end of the row and click **Control** -> **Start VirtualMachine**.
    *   To start the VM from the tree view:
        1.  Click the **>** icon next to the project name to open the list of VMs.
        1.  Right-click the name of the VM and select **Control** -> **Start**.
    *   To view comprehensive information about the selected VM before you start it:
        1.  Access the **VirtualMachine details** page by clicking the name of the VM.
        1.  Click **Actions** -> **Control** -> **Start**.

            :::note

            When you start VM that is provisioned from a `URL` source for the first time, the VM has a status of **Importing** while {{ VirtProductName }} imports the container from the URL endpoint. Depending on the size of the image, this process might take several minutes.
            
            :::