{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling IPv6 connectivity to pods on {{ rh_openstack }} {id="nw-osp-pod-connections-ipv6_{{ context }}"}

To enable IPv6 connectivity between pods that have additional networks that are on different nodes, disable port security for the IPv6 port of the server. Disabling port security obviates the need to create allowed address pairs for each IPv6 address that is assigned to pods and enables traffic on the security group. {._abstract}


:::important

Only the following IPv6 additional network configurations are supported:

*   SLAAC and host-device
*   SLAAC and MACVLAN
*   DHCP stateless and host-device
*   DHCP stateless and MACVLAN

:::


**Procedure**

*   To disable port security for the IPv6 port of the server, enter the following command:
    ```terminal
    $ openstack port set --no-security-group --disable-port-security <compute_ipv6_port>
    ```

    Replace `<compute_ipv6_port>` with the IPv6 port of the compute server.

    :::important

    This command removes security groups from the port and disables port security. Traffic restrictions are removed entirely from the port.
    
    :::