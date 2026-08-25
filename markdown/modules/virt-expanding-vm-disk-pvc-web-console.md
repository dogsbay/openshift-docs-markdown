{%- set _mod_docs_content_type = "PROCEDURE" %}
# Expand a VM disk PVC by using the web console {id="virt-expanding-vm-disk-pvc-web-console_{{ context }}"}

You can increase the size of a virtual machine (VM) disk by expanding the persistent volume claim (PVC) of the disk. To specify the increased PVC volume, you can use the **VirtualMachines** page in the web console, with the VM running. {._abstract}


:::note

If the PVC uses the file system volume mode, the disk image file expands to the available size while reserving some space for file system overhead.

:::


**Procedure**

1.  In the **Administrator** or **Virtualization** perspective, open the **VirtualMachines** page.
1.  Select the running VM to open its **Details** page.
1.  Select the **Configuration** tab and click **Storage**.
1.  Click the options menu {{ kebab }} next to the disk you want to expand. Select the **Edit** option.

    The **Edit disk** dialog opens.
1.  In the **PersistentVolumeClaim size** field, enter the desired size.

    :::note

    You can enter any value greater than the current one. However, if the new value exceeds the available size, an error is displayed.
    
    :::

1.  Click **Save**.