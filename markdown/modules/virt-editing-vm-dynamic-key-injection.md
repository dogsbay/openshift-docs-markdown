{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling dynamic SSH key injection by using the web console {id="virt-editing-vm-dynamic-key-injection_{{ context }}"}

You can enable dynamic key injection for a virtual machine (VM) by using the {{ product_title }} web console. Then, you can update the public SSH key at runtime. {._abstract}

The key is added to the VM by the QEMU guest agent, which is installed with {{ op_system_base_full }} 9 and later. 

**Prerequisites**

*   The guest operating system is {{ op_system_base }} 9 or later.

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines** in the web console.
1.  Select a VM to open the **VirtualMachine details** page.
1.  On the **Configuration** tab, click **Scripts**.
1.  If you have not already added a public SSH key to your project, click the edit icon beside **Authorized SSH key** and select one of the following options:
    *   **Use existing**: Select a secret from the secrets list.
    *   **Add new**:
        1.  Browse to the SSH key file or paste the file in the key field.
        1.  Enter the secret name.
        1.  Optional: Select **Automatically apply this key to any new VirtualMachine you create in this project**.
1.  Set **Dynamic SSH key injection** to on.
1.  Click **Save**.