{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a physical network by using the {{ product_title }} web console {id="creating-a-physical-network_{{ context }}"}

You can create physical networks for {{ VirtProductName }} using the {{ product_title }} web console to create a network with direct layer 2 connectivity to your data center. {._abstract}

**Prerequisites**

*   You are logged in to the {{ product_title }} web console as a user with `cluster-admin` permissions.

**Procedure**

1.  In the {{ product_title }} web console, go to **Networking** → **Physical networks**.
1.  Click **Create network**. The **Network configuration wizard** is displayed.
1.  On the **Network identity** page, enter a name for your network.
1.  On the **Nodes configuration** page, select either **Apply to all nodes on the cluster** or **Apply to specific subsets of nodes using the nodes selector**.

    :::note

    If you select specific nodes to apply the network to, you can view the matching nodes list to ensure the selection is correct. A validation error is displayed if the selected nodes overlap with another configuration associated with the same network.
    
    :::

1.  On the **Uplink connection** page, select the network interface that you want to connect to the physical network:

Default node network
:   Uses the default node network to access the outside physical network.

A single interface
:   Select a specific physical network interface from the list.

    :::warning

    If the selected secondary interface has an IP address on some of the nodes, using it removes the IP address and might disrupt network services.
    
    :::


    Bonding interface
    :   Configures bonded network interfaces to achieve resilience and higher throughput.
1.  Enter a **Bonding name**.
1.  Select the **Network interfaces** to bond.
1.  Select the **Aggregation mode** from the drop-down menu.
1.  On the **Settings** page, enter a **Bridge name** and set the **Maximum Transmission Unit (MTU)**.
1.  Review the configuration details.
1.  Click **Create**.

**Verification**

1.  In the {{ product_title }} web console, go to **Networking** → **Physical networks**.
1.  Locate your new network in the list.
1.  Expand the network row to view the associated configurations. Verify that the **Enactment state** is **Available** and that the **Nodes** count matches your expectation.