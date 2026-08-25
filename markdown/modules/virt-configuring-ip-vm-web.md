{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a static IP address when creating a virtual machine by using the web console {id="virt-configuring-ip-vm-web_{{ context }}"}

You can configure a static IP address when you create a virtual machine (VM) by using the web console. The IP address is provisioned with cloud-init. {._abstract}


:::note

If the VM is connected to the pod network, the pod network interface is the default route unless you update it.

:::


**Prerequisites**

*   The virtual machine is connected to a secondary network.

**Procedure**

1.  Navigate to **Virtualization** → **Catalog** in the web console.
1.  Click a template tile.
1.  Click **Customize VirtualMachine**.
1.  Click **Next**.
1.  On the **Scripts** tab, click the edit icon beside **Cloud-init**.
1.  Select the **Add network data** checkbox.
1.  Enter the ethernet name, one or more IP addresses separated by commas, and the gateway address.
1.  Click **Apply**.
1.  Click **Create VirtualMachine**.