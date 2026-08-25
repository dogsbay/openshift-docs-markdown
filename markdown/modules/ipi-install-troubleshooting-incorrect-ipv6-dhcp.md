{%- set _mod_docs_content_type = "PROCEDURE" %}

# Addressing the cluster nodes not getting the correct IPv6 address over DHCP error {id="ipi-install-troubleshooting-incorrect-ipv6-dhcp_{{ context }}"}

Troubleshoot and resolve DHCP configuration issues that prevent {{ product_title }} cluster nodes from receiving their assigned IPv6 addresses. {._abstract}

If the cluster nodes are not getting the correct IPv6 address over DHCP, check the following procedure.

**Procedure**

1.  Ensure the reserved IPv6 addresses reside outside the DHCP range.
1.  In the IP address reservation on the DHCP server, ensure the reservation specifies the correct DHCP Unique Identifier (DUID). 

    For example:
    ```terminal
    # This is a dnsmasq dhcp reservation, 'id:00:03:00:01' is the client id and '18:db:f2:8c:d5:9f' is the MAC Address for the NIC
    id:00:03:00:01:18:db:f2:8c:d5:9f,openshift-master-1,[2620:52:0:1302::6]
    ```
1.  Ensure that route announcements are working.
1.  Ensure that the DHCP server is listening on the required interfaces serving the IP address ranges.