{%- set _mod_docs_content_type = "PROCEDURE" %}

# Adding a disk to a virtual machine {id="virt-add-disk-to-vm_{{ context }}"}

You can add a virtual disk to a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines** in the web console.
1.  Select a VM to open the **VirtualMachine details** page.
1.  On the **Disks** tab, click **Add disk**.
1.  Specify the **Source**, **Name**, **Size**, **Type**, **Interface**, and **Storage Class**.
    1.  Optional: You can enable preallocation if you use a blank disk source and require maximum write performance when creating data volumes. To do so, select the **Enable preallocation** checkbox.
    1.  Optional: You can clear **Apply optimized StorageProfile settings** to change the **Volume Mode** and **Access Mode** for the virtual disk. If you do not specify these parameters, the system uses the default values from the `kubevirt-storage-class-defaults` config map.
1.  Click **Add**.

    :::note

    If the VM is running, you must restart the VM to apply the change.
    
    :::