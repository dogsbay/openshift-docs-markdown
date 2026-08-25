{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a VM network interface by using the web console {id="virt-vm-creating-nic-web_{{ context }}"}

You can configure a network interface for a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}

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