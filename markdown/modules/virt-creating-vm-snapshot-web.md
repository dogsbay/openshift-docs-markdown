{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a snapshot by using the web console {id="virt-creating-vm-snapshot-web_{{ context }}"}

You can create a snapshot of a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   The `snapshot` feature gate is enabled in the YAML configuration of the `kubevirt` CR.
*   The VM snapshot includes disks that meet the following requirements:
    *   The disks are data volumes or persistent volume claims.
    *   The disks belong to a storage class that supports Container Storage Interface (CSI) volume snapshots.
    *   The disks are _bound_ to a persistent volume (PV) and _populated_ with a datasource.

**Procedure**

1.  Navigate to **Virtualization** -> **VirtualMachines** in the web console.
1.  Select a VM to open the **VirtualMachine details** page.
1.  Click the **Snapshots** tab and then click **Take Snapshot**.

    Alternatively, right-click the VM and select **Create snapshot** from the menu.
1.  Enter the snapshot name.
1.  Expand **Disks included in this Snapshot** to see the storage volumes to be included in the snapshot.
1.  If your VM has disks that cannot be included in the snapshot and you wish to proceed, select **I am aware of this warning and wish to proceed**.
1.  Click **Save**.