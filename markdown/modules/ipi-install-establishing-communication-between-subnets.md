{%- set _mod_docs_content_type = "PROCEDURE" %}
# Establishing communication between subnets {id="ipi-install-establishing-communication-between-subnets_{{ context }}"}

In a typical {{ product_title }} cluster setup, all nodes, including the control plane and compute nodes, reside in the same network. However, for edge computing scenarios, it can be beneficial to locate compute nodes closer to the edge.  {._abstract}

This often involves using different network segments or subnets for the remote nodes than the subnet used by the control plane and local compute nodes. Such a setup can reduce latency for the edge and allow for enhanced scalability.

Before installing {{ product_title }}, you must configure the network properly to ensure that the edge subnets containing the remote nodes can reach the subnet containing the control plane nodes and receive traffic from the control plane too. 


:::important

During cluster installation, assign permanent IP addresses to nodes in the network configuration of the `install-config.yaml` configuration file. If you do not do this, nodes might get assigned a temporary IP address that can impact how traffic reaches the nodes. For example, if a node has a temporary IP address assigned to it and you configured a bonded interface for a node, the bonded interface might receive a different IP address.

:::


You can run control plane nodes in the same subnet or multiple subnets by configuring a user-managed load balancer in place of the default load balancer. With a multiple subnet environment, you can reduce the risk of your {{ product_title }} cluster from failing because of a hardware failure or a network outage. For more information, see "Services for a user-managed load balancer" and "Configuring a user-managed load balancer".

Running control plane nodes in a multiple subnet environment requires completion of the following key tasks:

*   Configuring a user-managed load balancer instead of the default load balancer by specifying `UserManaged` in the `loadBalancer.type` parameter of the `install-config.yaml` file.
*   Configuring a user-managed load balancer address in the `ingressVIPs` and `apiVIPs` parameters of the `install-config.yaml` file.
*   Adding the multiple subnet Classless Inter-Domain Routing (CIDR) and the user-managed load balancer IP addresses to the `networking.machineNetworks` parameter in the `install-config.yaml` file.


:::note

Deploying a cluster with multiple subnets requires using virtual media, such as `redfish-virtualmedia` and `idrac-virtualmedia`.

:::


This procedure details the network configuration required to allow the remote compute nodes in the second subnet to communicate effectively with the control plane nodes in the first subnet and to allow the control plane nodes in the first subnet to communicate effectively with the remote compute nodes in the second subnet.

In this procedure, the cluster spans two subnets:

*   The first subnet (`10.0.0.0`) contains the control plane and local compute nodes.
*   The second subnet (`192.168.0.0`) contains the edge compute nodes.

**Procedure**

1.  Configure the first subnet to communicate with the second subnet:
    1.  Log in as `root` to a control plane node by running the following command:
        ```terminal
        $ sudo su -
        ```
    1.  Get the name of the network interface by running the following command:
        ```terminal
        # nmcli dev status
        ```
    1.  Add a route to the second subnet (`192.168.0.0`) via the gateway by running the following command:
        ```terminal
        # nmcli connection modify <interface_name> +ipv4.routes "192.168.0.0/24 via <gateway>"
        ```

        Replace `<interface_name>` with the interface name. Replace `<gateway>` with the IP address of the actual gateway.
        ```terminal title="Example"
        # nmcli connection modify eth0 +ipv4.routes "192.168.0.0/24 via 192.168.0.1"
        ```
    1.  Apply the changes by running the following command:
        ```terminal
        # nmcli connection up <interface_name>
        ```

        Replace `<interface_name>` with the interface name.
    1.  Verify the routing table to ensure the route has been added successfully:
        ```terminal
        # ip route
        ```
    1.  Repeat the previous steps for each control plane node in the first subnet.

        :::note

        Adjust the commands to match your actual interface names and gateway.
        
        :::

1.  Configure the second subnet to communicate with the first subnet:
    1.  Log in as `root` to a remote compute node by running the following command:
        ```terminal
        $ sudo su -
        ```
    1.  Get the name of the network interface by running the following command:
        ```terminal
        # nmcli dev status
        ```
    1.  Add a route to the first subnet (`10.0.0.0`) via the gateway by running the following command:
        ```terminal
        # nmcli connection modify <interface_name> +ipv4.routes "10.0.0.0/24 via <gateway>"
        ```

        Replace `<interface_name>` with the interface name. Replace `<gateway>` with the IP address of the actual gateway.
        ```terminal title="Example"
        # nmcli connection modify eth0 +ipv4.routes "10.0.0.0/24 via 10.0.0.1"
        ```
    1.  Apply the changes by running the following command:
        ```terminal
        # nmcli connection up <interface_name>
        ```

        Replace `<interface_name>` with the interface name.
    1.  Verify the routing table to ensure the route has been added successfully by running the following command:
        ```terminal
        # ip route
        ```
    1.  Repeat the previous steps for each compute node in the second subnet.

        :::note

        Adjust the commands to match your actual interface names and gateway.
        
        :::

1.  After you have configured the networks, test the connectivity to ensure the remote nodes can reach the control plane nodes and the control plane nodes can reach the remote nodes.
    1.  From the control plane nodes in the first subnet, ping a remote node in the second subnet by running the following command:
        ```terminal
        $ ping <remote_node_ip_address>
        ```

        If the ping is successful, it means the control plane nodes in the first subnet can reach the remote nodes in the second subnet. If you do not receive a response, review the network configurations and repeat the procedure for the node.
    1.  From the remote nodes in the second subnet, ping a control plane node in the first subnet by running the following command:
        ```terminal
        $ ping <control_plane_node_ip_address>
        ```

        If the ping is successful, it means the remote compute nodes in the second subnet can reach the control plane in the first subnet. If you do not receive a response, review the network configurations and repeat the procedure for the node.