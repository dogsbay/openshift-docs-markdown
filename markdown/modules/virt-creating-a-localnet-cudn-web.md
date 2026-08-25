{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a cluster-scoped network to connect pods directly to an external network {id="virt-creating-a-localnet-cudn-web_{{ context }}"}

You can connect one or more projects to a physical network for direct layer 2 access to data center resources through a `ClusterUserDefinedNetwork` custom resource in the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} web console as a user with `cluster-admin` permissions.

**Procedure**

1.  In the {{ product_title }} web console, go to **Virtualization** → **Networking**. 
1.  Click **Virtual machine networks** in the navigation pane.
1.  Click **Create**. The **Create virtual machine network** wizard is displayed.
1.  Give details about the network on the **Network definition** page:
    1.  Enter a name for the network in the **Name** field.
    1.  Select a physical network through an `OpenvSwitch` bridge from the **Select physical network** list.
    1.  Enter the maximum transmission unit (MTU).

        :::note

        An MTU, measured in bytes, is the largest allowable size of a data packet. Ensure that all underlying physical network equipment supports this MTU, or higher.
        
        :::

    1.  Optional: Select the **VLAN ID** checkbox to enter VLAN tagging information. If you tag traffic with a VLAN ID, you must configure your physical switch with a VLAN trunk that includes the VLAN ID that you choose.
1.  Click **Next**.
1.  Select the projects that the network should be made available to on the **Project mapping** page. By default, all projects have access to the network.
1.  Click **Create**.

**Verification**

1.  Navigate to the **Virtualization** → **Virtual machine networks** page.
1.  Click the **OVN localnet** tab.
1.  Verify that your new network is displayed in the list.