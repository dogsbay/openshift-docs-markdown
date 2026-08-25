{%- set _mod_docs_content_type = "PROCEDURE" %}
# Expanding a {{ product_title }} physical network to include new nodes {id="expanding-physical-network_{{ context }}"}

You can add one or more {{ product_title }} worker nodes to an existing physical network if you want to expand access to that network.
Expanding a physical network creates a new configuration under the same logical physical network. {._abstract}

**Prerequisites**

*   You are logged in to the {{ product_title }} web console as a user with `cluster-admin` permissions.

**Procedure**

1.  In the {{ product_title }} web console, go to **Networking** -> **Physical networks**.
1.  Click the Options menu {{ kebab }} next to the network that you want to edit.
1.  Click **Configure nodes**. The **Network configuration wizard** is displayed.

    :::note

    The **Physical network name** is predefined. You cannot edit it during this process.
    
    :::

1.  Click **Next**.
1.  On the **Nodes configuration** page, select either **Apply to all nodes on the cluster** or **Apply to specific subsets of nodes using the nodes selector**.

    :::note

    If you select specific nodes, you can view the matching nodes list to ensure the selection is correct. A validation error is displayed if the selected nodes overlap with another configuration associated with the same network.
    
    :::

1.  On the **Uplink connection** page, select the network interface to connect to the physical network:

Default node network
:   Uses the default node network to access the outside physical network.

A single interface
:   Select a specific physical network interface from the list.

    :::warning

    If the selected secondary interface has an IP address on some of the nodes, using removes the IP address and might disrupt network services.
    
    :::


    Bonding interface
    :   Configures bonded network interfaces to achieve resilience and higher throughput.
    1.  Enter a **Bonding name**.
    1.  Select the **Network interfaces** to bond.

    :::note


    The system displays only the interfaces that all nodes have in common.
    
    :::

    1.  Select the **Aggregation mode** from the drop down options.
    1.  On the **Settings** page, enter a **Bridge name** and set the **Maximum Transmission Unit (MTU)**.
    1.  Review the configuration details.
    1.  Click **Create**.