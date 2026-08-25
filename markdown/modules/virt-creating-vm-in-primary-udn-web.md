{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a virtual machine in a namespace with a primary user-defined network by using the web console {id="virt-creating-vm-in-primary-udn-web_{{ context }}"}

You can create a virtual machine (VM) in a namespace that is configured to use a primary user-defined network (UDN) by using the {{ product_title }} web console. {._abstract}

By default, the VM automatically connects to the primary UDN using the Layer 2 bridge (`l2bridge`) network binding plugin.


:::note

When creating the virtual machine, verify that the default network interface type is automatically set to `L2 bridge` and the network attachment is configured for the `pod` network.

:::


**Prerequisites**

*   You have a namespace configured and labeled for a primary user-defined network.
*   You are logged in to the {{ product_title }} web console.

**Procedure**

1.  Click **Virtualization** → **VirtualMachines**.
1.  Select the UDN-configured namespace from the **Project** drop-down list.
1.  Click **Create** → **With Wizard**.
1.  Configure the VM specifications in the wizard and click **Create VirtualMachine**.