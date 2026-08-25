{%- set _mod_docs_content_type = "PROCEDURE" %}

# Hot plugging memory on a virtual machine {id="virt-hot-plugging-memory_{{ context }}"}

You can add or remove the amount of memory allocated to a virtual machine (VM) without having to restart the VM by using the {{ product_title }} web console. {._abstract}

**Procedure**

1.  Navigate to **Virtualization** -> **VirtualMachines**.
1.  Select the required VM to open the **VirtualMachine details** page.
1.  On the **Configuration** tab, click **Edit CPU|Memory**.
1.  Enter the required amount of memory and click **Save**.

    :::note

    By hot plugging, you can increase the total amount of memory of a VM up to four times the default initial amount. Exceeding this limit requires a restart.
    
    :::


    The system applies these changes immediately. If the VM is able to be migrated, a live migration is triggered. If not, or if the changes cannot be live-updated, a `RestartRequired` condition is added to the VM.

    :::note

    Memory hot plugging for virtual machines requires guest operating system support for the `virtio-mem` driver. This support depends on the driver being included and enabled within the guest operating system, not on specific upstream kernel versions.

    Supported guest operating systems:

    *   RHEL 9.4 and later
    *   RHEL 8.10 and later (hot-unplug is disabled by default)
    *   Other Linux guests require kernel version 5.16 or later and the `virtio-mem` kernel module
    *   Windows guests require `virtio-mem` driver version 100.95.104.26200 or later
    
    :::