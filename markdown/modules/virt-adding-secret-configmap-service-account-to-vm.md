{%- set _mod_docs_content_type = "PROCEDURE" %}

# Adding a secret, config map, or service account to a virtual machine {id="virt-adding-secret-configmap-service-account-to-vm_{{ context }}"}

You can add a secret, config map, or service account to a virtual machine by using the {{ product_title }} web console. {._abstract}

These resources are added to the virtual machine as disks. You then mount the secret, config map, or service account as you would mount any other disk.

If the virtual machine is running, changes do not take effect until you restart the virtual machine. The newly added resources are marked as pending changes at the top of the page.

**Prerequisites**

*   The secret, config map, or service account that you want to add must exist in the same namespace as the target virtual machine.

**Procedure**

1.  Click **Virtualization** → **VirtualMachines** from the side menu.
1.  Select a virtual machine to open the **VirtualMachine details** page.
1.  Click **Configuration** → **Environment**.
1.  Click **Add Config Map, Secret or Service Account**.
1.  Click **Select a resource** and select a resource from the list. A six character serial number is automatically generated for the selected resource.
1.  Optional: Click **Reload** to revert the environment to its last saved state.
1.  Click **Save**.

**Verification**

1.  On the **VirtualMachine details** page, click **Configuration** → **Disks** and verify that the resource is displayed in the list of disks.
1.  Restart the virtual machine by clicking **Actions** → **Restart**.

You can now mount the secret, config map, or service account as you would mount any other disk.