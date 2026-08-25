{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a VM from a snapshot by using the web console {id="virt-restoring-vm-from-snapshot-web_{{ context }}"}

You can restore a virtual machine (VM) to a previous configuration represented by a snapshot in the {{ product_title }} web console. {._abstract}

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines** in the web console.
1.  Select a VM to open the **VirtualMachine details** page.
1.  If the VM is running, click the Options menu {{ kebab }} and select **Stop** to power it down.
1.  Click the **Snapshots** tab to view a list of snapshots associated with the VM.
1.  Select a snapshot to open the **Snapshot Details** screen.
1.  Click the Options menu {{ kebab }} and select **Restore VirtualMachine from snapshot**.
1.  Optional: In the **Volume restore policy** section, select how restored persistent volume claims (PVCs) are named:
    *   **Prefix target name** - The restored PVC names use the target VM name as a prefix. This is the default setting.
    *   **In place** - The restored PVCs overwrite the original PVCs with the same names.
    *   **Randomize names** - The restored PVC names are randomly generated.
1.  Click **Restore**.
1.  Optional: You can also create a new VM based on the snapshot. To do so:
    1.  In the Options menu {{ kebab }} of the snapshot, select **Create VirtualMachine from Snapshot**.
    1.  Provide a name for the new VM.
    1.  Click **Create**