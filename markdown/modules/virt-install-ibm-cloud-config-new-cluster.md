{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ ibm_cloud_title }} for the new cluster {id="virt-install-ibm-cloud-config-new-cluster_{{ context }}"}

Configure and provision the {{ ibm_cloud_title }} environment to establish the operational framework and nodes for your {{ VirtProductName }} cluster. {._abstract}

**Procedure**

1.  Create a new virtual server instance in {{ ibm_cloud_title }} at [Virtual Server for Classic](https://cloud.ibm.com/gen1/infrastructure/provision/vs) to be the Bastion server. This instance is used to run the installation and provide environment services.
1.  Change the default properties of the new virtual server instance to the following values. Use the provided defaults for all other values.
    *   **Type of virtual server:** Public
    *   **Operating system:** CentOS
    *   Your public SSH RSA key
1.  Note the private VLAN and subnet the virtual server instance is assigned to at [VLANs](https://cloud.ibm.com/classic/network/vlans).
1.  Provision 6 bare-metal nodes in {{ ibm_cloud_title }} at [Bare metal server provision](https://cloud.ibm.com/gen1/infrastructure/provision/bm). Use the following values when provisioning the nodes:
    *   **Domain**: A subdomain you can add records to.
    *   **Quantity**: 6
    *   **Location**: The same location as the virtual server instance.
    *   **Storage disks**: RAID 1
    *   **Network Interface**: Private
    *   **Private VLAN**: The same as noted for the virtual server instance.
1.  Confirm all nodes are provisioned and ready at [Device list](https://cloud.ibm.com/gen1/infrastructure/devices).
1.  Rename the control plane nodes to `control0-<domain-name>`, `control1-<domain-name>`, and `control2-<domain-name>`. Replace `<domain-name>` with the domain used when provisioning the nodes.
1.  Rename the compute nodes to `compute0-<domain-name>`, `compute1-<domain-name>`, and `compute2-<domain-name>`. Replace `<domain-name>` with the domain used when provisioning the nodes.
1.  Configure the Bastion virtual server instance as a default network gateway.
1.  Configure DHCP by editing `/etc/dhcp/dhcpd.conf` on the Bastion virtual server instance. For example:
    ```text
    # Set DNS name and DNS server's IP address or hostname
    option domain-name  <dns_domain_name>;
    option domain-name-servers  <dns_ip_addresses>;

    # Declare DHCP Server
    authoritative;

    # The default DHCP lease time
    default-lease-time <default_lease_value>;

    # Set the maximum lease time
    max-lease-time <max_lease_value>;

    # Set Network address, subnet mask and gateway

    subnet <subnet_ip_address> netmask <subnet_mask> {
      # Range of IP addresses to allocate
      range dynamic-bootp <dynamic_boot_lower_address> <dynamic_boot_upper_address>;
      # Provide broadcast address
      option broadcast-address <broadcast_ip_address>;
      # Set default gateway
      option routers <default_gateway_ip_address>;
    ```

    where:

    `<dns_domain_name>`
    :   Specifies the default domain name for DNS clients.

    `<dns_ip_addresses>`
    :   Specifies a comma-separated list of DNS server IP addresses.

    `<default_lease_value>`
    :   Specifies the default number of seconds a client keeps an assigned address.

    `<max_lease_value>`
    :   Specifies the maximum number of seconds a client keeps an assigned address.

    `<subnet_ip_address>`
    :   Specifies the start of the subnet IP address range.

    `<subnet_mask>`
    :   Specifies the subnet mask of the subnet IP address range.

    `<broad_ip_address>`
    :   Specifies the broadcast IP address to use when to use sending a message to every device on the subnet.

    `<default_gateway_ip_address>`
    :   Specifies the default gateway of the subnet.

1.  Restart DHCP on the Bastion virtual server instance:
    ```terminal
    $ systemctl restart dhcpd
    ```
1.  Enable IP forwarding on the Bastion virtual server instance:
    ```terminal
    $ sysctl -w net.ipv4.ip_forward=1
    ```
1.  Verify IP forwarding is enabled on the Bastion virtual server instance:
    ```terminal
    $ sysctl -p /etc/sysctl.conf
    ```
1.  Restart the network service on the Bastion virtual server instance:
    ```terminal
    $ service network restart
    ```
1.  Verify if `firewalld` is enabled on the Bastion virtual server instance:
    ```terminal
    $ firewall-cmd --state
    ```
1.  If the `firewalld` service is not enabled on the Bastion virtual server instance, enable the service:
    ```terminal
    $ systemctl enable firewalld
    ```
1.  Start the `firewalld` service:
    ```terminal
    $ systemctl start firewalld
    ```
1.  Add network address translation (NAT) rules to the `firewalld` service:
    ```terminal
    $ firewall-cmd --add-masquerade --permanent
    ```
1.  Restart the `firewalld` service:
    ```terminal
    $ firewall-cmd --reload
    ```