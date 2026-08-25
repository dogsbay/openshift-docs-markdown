{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing items from a boot order list in the web console {id="virt-remove-boot-order-item-web_{{ context }}"}

Remove items from a boot order list by using the web console. {._abstract}

**Procedure**

1.  Click **Virtualization** -> **VirtualMachines** from the side menu.
1.  Click the **Virtual machines** tab.
1.  Select a virtual machine to open the **VirtualMachine details** page.
1.  Click the **Configuration** tab.
1.  Expand **Boot management**.
1.  Click the pencil icon that is located on the right side of **Boot Order**.
1.  Click the **Remove** icon {{ delete }} next to the item. The item is removed from the boot order list and saved in the list of available boot sources. If you remove all items from the boot order list, the following message displays: **No resource selected. VM will attempt to boot from disks by order of appearance in YAML file.**

    :::note

    If the virtual machine is running, changes to **Boot Order** will not take effect until you restart the virtual machine.

    You can view pending changes by clicking **View Pending Changes** on the right side of the **Boot Order** field. The **Pending Changes** banner at the top of the page displays a list of all changes that will be applied when the virtual machine restarts.
    
    :::