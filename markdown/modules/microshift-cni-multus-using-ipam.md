{%- set _mod_docs_content_type = "CONCEPT" %}
# IP address management types and additional networks {id="IP-address-management-types-and-additional-networks_{{ context }}"}

IP addresses are provisioned for an additional network through an IP Address Management (IPAM) CNI plugin that you configure. Supported IP address provisioning types in {{ microshift_short }} are `host-local`, `static`, and `dhcp`. {._abstract}

## bridge interface specifics {id="bridge-interface-specifics_{{ context }}"}
When using the `bridge` type interface and the `dhcp` IPAM, a DHCP server listening on the bridged network is required. If you are using a firewall, configuring the `firewalld` service by running the `firewall-cmd --remove-service=dhcp` command to allow DHCP traffic on the network zone is also required.

## macvlan interface specifics {id="macvlan-interface-specifics_{{ context }}"}
The `macvlan` type interface accesses the network that the host is connected to. This means that the interface can receive an IP address from the DHCP server on the host network if the `dhcp` IPAM plugin is used.

## ipvlan interface specifics {id="ipvlan-interface-specifics_{{ context }}"}
The `ipvlan` interface also has direct access to the host network, but shares a MAC address with the host interface. The `ipvlan` type interface cannot be used with the `dhcp` plugin because of the shared MAC address. The IPAM plugin does not support the DHCP protocol with `ClientID`.