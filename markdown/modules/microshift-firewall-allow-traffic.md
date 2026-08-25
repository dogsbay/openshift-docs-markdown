{%- set _mod_docs_content_type = "PROCEDURE" %}
# Allowing network traffic through the firewall {id="microshift-firewall-allow-traffic_{{ context }}"}

You can allow network traffic through the firewall by configuring the IP address range and inserting the DNS server to allow internal traffic from pods through the network gateway. {._abstract}

**Procedure**

1.  Use one of the following commands to set the IP address range:
    1.  Configure the IP address range with default values by running the following command:
        ```terminal
        $ sudo firewall-offline-cmd --permanent --zone=trusted --add-source=10.42.0.0/16
        ```
    1.  Configure the IP address range with custom values by running the following command:
        ```terminal
        $ sudo firewall-offline-cmd --permanent --zone=trusted --add-source=<custom IP range>
        ```
1.  To allow internal traffic from pods through the network gateway, run the following command:
    ```terminal
    $ sudo firewall-offline-cmd --permanent --zone=trusted --add-source=169.254.169.1
    ```
1.  If you are using a load balancer, allow the IPv6 traffic through the firewall by running the following command:
    ```terminal
    $ sudo firewall-cmd --permanent --zone=trusted --add-source=fd01::/48
    ```