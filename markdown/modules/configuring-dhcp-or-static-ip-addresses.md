{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring DHCP or static IP addresses {id="configuring-dhcp-or-static-ip-addresses_{{ context }}"}

You can configure an IP address by using either DHCP or an individual static IP address. If you set a static IP, you must then identify the DNS server IP address on each node.  {._abstract}

The configuration examples in the procedure, update the IP addresses for the following components:

*   The node’s IP address to `10.10.10.2`
*   The gateway address to `10.10.10.254`
*   The netmask to `255.255.255.0`
*   The hostname to `core0.example.com`
*   The DNS server address to `4.4.4.41`
*   The auto-configuration value to `none`. No auto-configuration is required when IP networking is configured statically.

**Procedure**

1.  Enter a command like the following command to configure a static IP address:
    ```terminal
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:enp1s0:none
    nameserver=4.4.4.41
    ```
1.  Enter a command like the following command to configure a DHCP IP address:
    ```terminal
    ip=enp1s0:dhcp
    ```

    :::note

    When you use DHCP to configure IP addressing for the {{ op_system }} machines, the machines also obtain the DNS server information through DHCP. For DHCP-based deployments, you can define the DNS server address that is used by the {{ op_system }} nodes through your DHCP server configuration.
    
    :::

1.  If two or more network interfaces and only one interface exists, disable DHCP on a single interface. In the example, the `enp1s0` interface has a static networking configuration and DHCP is disabled for `enp2s0`, which is not used:
    ```terminal
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:enp1s0:none
    ip=::::core0.example.com:enp2s0:none
    ```
1.  If you need to combine DHCP and static IP configurations on systems with multiple network interfaces, run the following example command:
    ```terminal
    ip=enp1s0:dhcp
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:enp2s0:none
    ```