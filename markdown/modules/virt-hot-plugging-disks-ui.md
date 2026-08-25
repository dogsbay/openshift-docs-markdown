{%- set _mod_docs_content_type = "PROCEDURE" %}
# Hot plugging and hot unplugging a disk by using the web console {id="virt-hot-plugging-disks-ui_{{ context }}"}

You can hot plug a disk by attaching it to a virtual machine (VM) while the VM is running by using the {{ product_title }} web console. {._abstract}

The hot plugged disk remains attached to the VM until you unplug it.

**Prerequisites**

*   You must have a data volume or persistent volume claim (PVC) available for hot plugging.

**Procedure**

1.  Navigate to **Virtualization** -> **VirtualMachines** in the web console.
1.  Select a running VM to view its details.
1.  On the **VirtualMachine details** page, click **Configuration** -> **Storage**.
1.  Add a hot plugged disk:
    1.  Click **Add**.
    1.  In the **Add disk (hot plugged)** window, select the disk from the **Source** list and click **Save**.
1.  Optional: Select the type of the interface bus. The options are **VirtIO** and **SCSI**. The default bus type is **VirtIO**.
1.  Optional: Change the type of the interface bus of an existing hot plugged disk:
    1.  Click the Options menu {{ kebab }} beside the disk and select the **Edit** option.
    1.  In the **Interface** field, select the desired option.
1.  Optional: Unplug a hot plugged disk:
    1.  Click the Options menu {{ kebab }} beside the disk and select **Detach**.
    1.  Click **Detach**.