{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Windows VM {id="virt-creating-windows-vm_{{ context }}"}

You can create a Windows virtual machine (VM) by uploading a Windows image to a persistent volume claim (PVC) and then cloning the PVC when you create a VM by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You created a Windows installation DVD or USB with the Windows Media Creation Tool. See [Create Windows 10 installation media](https://www.microsoft.com/en-us/software-download/windows10) in the Microsoft documentation.
*   You created an `autounattend.xml` answer file. See [Answer files (unattend.xml)](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/update-windows-settings-and-scripts-create-your-own-answer-file-sxs) in the Microsoft documentation.

**Procedure**

1.  Upload the Windows image as a new PVC:
    1.  Navigate to **Storage** -> **PersistentVolumeClaims** in the web console.
    1.  Click **Create PersistentVolumeClaim** -> **With Data upload form**.
    1.  Browse to the Windows image and select it.
    1.  Enter the PVC name, select the storage class and size and then click **Upload**.

        The Windows image is uploaded to a PVC.
1.  Configure a new VM by cloning the uploaded PVC:
    1.  Navigate to **Virtualization** -> **Catalog**.
    1.  Select a Windows template tile and click **Customize VirtualMachine**.
    1.  Select **Clone (clone PVC)** from the **Disk source** list.
    1.  Select the PVC project, the Windows image PVC, and the disk size.
1.  Apply the answer file to the VM:
    1.  Click **Customize VirtualMachine parameters**.
    1.  On the **Sysprep** section of the **Scripts** tab, click **Edit**.
    1.  Browse to the `autounattend.xml` answer file and click **Save**.
1.  Set the run strategy of the VM:
    1.  Clear **Start this VirtualMachine after creation** so that the VM does not start immediately.
    1.  Click **Create VirtualMachine**.
    1.  On the **YAML** tab, replace `running:false` with `runStrategy: RerunOnFailure` and click **Save**.
1.  Click the Options menu {{ kebab }} and select **Control** -> **Start**.

    The VM boots from the `sysprep` disk containing the `autounattend.xml` answer file.