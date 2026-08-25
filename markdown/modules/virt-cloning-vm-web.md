{%- set _mod_docs_content_type = "PROCEDURE" %}
# Cloning a VM by using the web console {id="virt-cloning-vm-snapshot_{{ context }}"}

You can clone an existing VM by using the web console. {._abstract}

**Procedure**

1.  Navigate to **Virtualization** -> **VirtualMachines** in the web console.
1.  Select a VM to open the **VirtualMachine details** page.
1.  Click **Actions**.

    Alternatively, access the same menu in the tree view by right-clicking the VM.
1.  Select **Clone**.
1.  On the **Clone VirtualMachine** page, enter the name of the new VM.
1.  Optional: Select the **Start cloned VM** checkbox to start the cloned VM.
1.  Optional: In the **Volume name policy** section, select how cloned persistent volume claims (PVCs) are named:
    *   **Randomize names** - The cloned PVC names are randomly generated. This is the default setting.
    *   **Prefix target name** - The cloned PVC names use the target VM name as a prefix.
1.  Click **Clone**.