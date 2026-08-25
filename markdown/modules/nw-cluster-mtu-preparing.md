{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing your hardware MTU configuration {id="nw-cluster-mtu-preparing_{{ context }}"}

To maintain network stability during an MTU change, you must prepare the configuration for your underlying hardware using a method such as DHCP, PXE, or NetworkManager. This preparation ensures that all cluster nodes are ready to accept the new MTU value before you apply the changes to the cluster network. {._abstract}

**Procedure**

*   Prepare your configuration for the hardware MTU:
    *   If your hardware MTU is specified with DHCP, update your DHCP configuration such as with the following dnsmasq configuration:
        ```text
        dhcp-option-force=26,<mtu>
        ```
        where:


        `<mtu>`
        :   Specifies the hardware MTU for the DHCP server to advertise.
    *   If your hardware MTU is specified with a kernel command line with PXE, update that configuration accordingly.
    *   If your hardware MTU is specified in a NetworkManager connection configuration, complete the following steps. This approach is the default for {{ product_title }} if you do not explicitly specify your network configuration with DHCP, a kernel command line, or some other method. Your cluster nodes must all use the same underlying network configuration for the following procedure to work unmodified.

        Find the primary network interface by entering the following command:
        ```terminal
        $ oc debug node/<node_name> -- chroot /host nmcli -g connection.interface-name c show ovs-if-phys0
        ```
        where:


        `<node_name>`
        :   Specifies the name of a node in your cluster.

        Create the following `NetworkManager` configuration in the `<interface>-mtu.conf` file:
        ```ini
        [connection-<interface>-mtu]
        match-device=interface-name:<interface>
        ethernet.mtu=<mtu>
        ```
        where:


        `<interface>`
        :   Specifies the primary network interface name.

        `<mtu>`
        :   Specifies the new hardware MTU value.

        If you used Kubernetes NMState to configure the `br-ex` bridge, use the Kubernetes NMState Operator to update the MTU for the `br-ex` bridge. Changing the MTU for this bridge in a `.nmconnection` file could lead to persistence issues as the Machine Config Operator (MCO) might overwrite the file.