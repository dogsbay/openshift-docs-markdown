{%- set _mod_docs_content_type = "PROCEDURE" %}

# Organize virtual machines by using the web console {id="virt-organize-vms-web_{{ context }}"}

In addition to creating virtual machines (VMs) in different projects, you can use the tree view to further organize them in folders. {._abstract}


:::important

Enabling folders in the virtual machine tree is a Technology Preview feature only. Technology Preview features are not supported with Red&#160;Hat production service level agreements (SLAs) and might not be functionally complete. Red&#160;Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.

For more information about the support scope of Red&#160;Hat Technology Preview features, see [Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview/).

:::



:::note

{{ VirtProductName }} does not enable folders in the virtual machine tree by default. To enable folders, go to **Virtualization** → **Settings**. In the **Preview features** tab, select **Enable folders in Virtual Machines tree view**.

:::


**Procedure**

1.  Click **Virtualization** → **VirtualMachines** from the side menu to access the tree view with all projects and VMs in your cluster.
1.  Perform one of the following actions depending on your use case:
    *   To move the VM to a new folder in the same project:
        1.  Right-click the name of the VM in the tree view.
        1.  Select **Move to folder** from the menu.
        1.  Type the name of the folder to create in the "Search folder" bar.
        1.  Click **Create folder** in the drop-down list.
        1.  Click **Save**.
    *   To move the VM to an existing folder in the same project:
        *   Click the name of the VM in the tree view and drag it to a folder in the same project. A highlight is displayed on the folder for permitted operations.
    *   To move the VM from a folder to the project:
        *   Click the name of the VM in the tree view and drag it on the project name. A highlight is displayed on the folder for permitted operations.