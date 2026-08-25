{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a virtual machine network from a physical network {id="creating-vm-network-localnet_{{ context }}"}

If your use case does not permit the use of network address translation (NAT), you can give VMs direct layer 2 access by creating a VM network that uses a physical network. {._abstract}

**Prerequisites**

*   You are logged in to the {{ product_title }} web console as a user with `cluster-admin` permissions.

**Procedure**

1.  In the {{ product_title }} web console, go to **Networking** -> **Physical networks**.
1.  Click the Options menu {{ kebab }} next to the network that you want to edit.
1.  Click **Create a virtual machines network using this physical network**. The **Create virtual machine network** wizard is displayed with the network name populated.
1.  Select a **Physical network**.
1.  Optional: Select **VLAN tagging** and enter a **VLAN ID**.
1.  On the **Project mapping** page, define which projects can access this network.
1.  Click **Create**.