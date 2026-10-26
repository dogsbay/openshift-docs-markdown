{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add a VM network interface in the web console {id="virt-vm-creating-nic-web_{{ context }}"}

You can add a network interface to a virtual machine (VM) from the {{ product_title }} web console and attach it to an existing network attachment definition. Restart or live migrate the VM to apply the change. {._abstract}

**Prerequisites**

*   You created a network attachment definition for the network.

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines**.
1.  Click a VM to view the **VirtualMachine details** page.
1.  On the **Configuration** tab, click the **Network interfaces** tab.
1.  Click **Add network interface**.
1.  Enter the interface name and select the network attachment definition from the **Network** list.
1.  Click **Save**.
1.  Restart or live migrate the VM to apply the changes.