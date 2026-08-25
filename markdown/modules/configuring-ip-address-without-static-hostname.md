{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an IP address without a static hostname {id="configuring-ip-address-without-static-hostname_{{ context }}"}

You can configure an IP address without assigning a static hostname. If a static hostname is not set by the user, the static hostname gets picked up and automatically set by a reverse DNS lookup.  {._abstract}

The configuration examples in the procedure, update the IP addresses for the following components:

*   The node’s IP address to `10.10.10.2`
*   The gateway address to `10.10.10.254`
*   The netmask to `255.255.255.0`
*   The DNS server address to `4.4.4.41`
*   The auto-configuration value to `none`. No auto-configuration is required when IP networking is configured statically.

**Procedure**

*   To configure an IP address without a static hostname, enter a command like the following command:
    ```terminal
    ip=10.10.10.2::10.10.10.254:255.255.255.0::enp1s0:none
    nameserver=4.4.4.41
    ```