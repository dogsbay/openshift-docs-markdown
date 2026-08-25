{%- set _mod_docs_content_type = "PROCEDURE" %}

# Migrating VM disks to a different storage class by using the web console {id="virt-migrating-storage-class-ui_{{ context }}"}

You can migrate one or more disks attached to a virtual machine (VM) to a different storage class by using the {{ product_title }} web console. When performing this action on a running VM, the operation of the VM is not interrupted and the data on the migrated disks remains accessible. {._abstract}

**Prerequisites**

*   You must have a data volume or a persistent volume claim (PVC) available for storage class migration.
*   The cluster must have a node available for live migration. As part of the storage class migration, the VM is live migrated to a different node.
*   The VM must be running.

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines** in the web console.
1.  Click the Options menu {{ kebab }} beside the virtual machine and select **Migration** → **Storage**.

    You can also access this option from the **VirtualMachine details** page by selecting **Actions** → **Migration** → **Storage**.

    Alternatively, right-click the VM in the tree view and select **Migration** from the menu.
1.  On the **Migration details** page, choose whether to migrate the entire VM storage or selected volumes only. If you click **Selected volumes**, select any disks that you intend to migrate. Click **Next** to proceed.
1.  From the list of available options on the **Destination StorageClass** page, select the storage class to migrate to. Click **Next** to proceed.
1.  On the **Review** page, review the list of affected disks and the target storage class. To start the migration, click **Migrate VirtualMachine storage**.
1.  Stay on the **Migrate VirtualMachine storage** page to watch the progress and wait for the confirmation that the migration completed successfully.

**Verification**

1.  From the **VirtualMachine details** page, navigate to **Configuration** → **Storage**.
1.  Verify that all disks have the expected storage class listed in the **Storage class** column.