{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting a VM to an SR-IOV network by using the web console {id="virt-attaching-vm-to-sriov-network-web-console_{{ context }}"}

You can connect a VM to the SR-IOV network by including the network details in the VM configuration. {._abstract}

**Prerequisites**

*   You must create a network attachment definition for the network.

**Procedure**

1.  Navigate to **Virtualization** → **VirtualMachines**.
1.  Click a VM to view the **VirtualMachine details** page.
1.  On the **Configuration** tab, click the **Network interfaces** tab.
1.  Click **Add network interface**.
1.  Enter the interface name.
1.  Select an SR-IOV network attachment definition from the **Network** list.
1.  Select `SR-IOV` from the **Type** list.
1.  Optional: Add a network **Model** or **Mac address**.
1.  Click **Save**.
1.  Restart or live-migrate the VM to apply the changes.