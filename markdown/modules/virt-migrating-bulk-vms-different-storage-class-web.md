{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating VMs in a single cluster to a different storage class by using the web console {id="virt-migrating-bulk-vms-different-storage-class-web_{{ context }}"}

By using the {{ product_title }} web console, you can migrate single-cluster VMs in bulk from one storage class to another storage class. {._abstract}


:::note

When you migrate a virtual machine disk from one storage class to another, the source persistent volume claim (PVC) is not automatically deleted after the migration completes.
After you verify that the migration was successful, you must manually delete the source PVC. This behavior is expected and applies only to storage class migrations.

:::


**Procedure**

1.  From the {{ product_title }} web console, navigate to **Virtualization** → **VirtualMachines**.
1.  From the list of VMs in the same namespace, select each VM that you want to move from its current storage class.
1.  Select **Actions** → **Migrate storage**.

    Alternatively, you can access this option by opening the Options menu {{ kebab }} for a selected VM, and then selecting **Migration** → **Storage**.

    The **Migrate VirtualMachine storage** page opens.
1.  To review the VMs that you want to migrate, click the link that identifies the number of VMs and volumes. Click **View more** to see the full list.
1.  Select either the entire VM or only selected volumes for storage class migration. If you choose to migrate only selected volumes, the page expands to allow you to make specific selections.

    You can also click **VirtualMachine name** to select all VMs.
1.  Click **Next**.
1.  From the list of available storage classes, select the destination storage class for the migration.
1.  Click **Next**.
1.  Review the details, and click **Migrate VirtualMachine storage** to start the migration.
1.  Optional: Click **Stop** to interrupt the migration, or click **View storage migrations** to see the status of current and previous migrations.