{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM from an existing snapshot by using the web console {id="virt-creating-vm-from-snapshot-web_{{ context }}"}

You can create a new VM by copying an existing snapshot. {._abstract}

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines** in the web console.
1.  Select a VM to open the **VirtualMachine details** page.
1.  Click the **Snapshots** tab.
1.  Click the Options menu {{ kebab }} for the snapshot you want to copy.
1.  Select **Create VirtualMachine**.
1.  Enter the name of the VM.
1.  Optional: Select the **Start this VM after creation** checkbox to start the new VM.
1.  Optional: In the **Volume name policy** section, select how cloned persistent volume claims (PVCs) are named:
    *   **Randomize names** - The cloned PVC names are randomly generated. This is the default setting.
    *   **Prefix target name** - The cloned PVC names use the target VM name as a prefix.
1.  Click **Create**.