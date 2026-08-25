{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring VLANs on individual interfaces {id="configuring-vlans-individual-interfaces_{{ context }}"}

As an optional task, you can configure VLANs on individual interfaces by using the `vlan=` parameter. {._abstract}

**Procedure**

*   To configure a VLAN on a network interface and use a static IP address, run the following command:
    ```terminal
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:enp2s0.100:none
    vlan=enp2s0.100:enp2s0
    ```
*   To configure a VLAN on a network interface and to use DHCP, run the following command:
    ```terminal
    ip=enp2s0.100:dhcp
    vlan=enp2s0.100:enp2s0
    ```