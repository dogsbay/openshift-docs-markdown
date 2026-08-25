{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying static IP address configuration {id="verifying-static-ip-address-configuration_{{ context }}"}

Ensure that all required steps are complete and verify the network configuration is working properly. {._abstract}

If the DHCP reservation for a cluster node specifies an infinite lease, after the installer successfully provisions the node, the dispatcher script checks the node’s network configuration. 

If the script determines that the network configuration contains an infinite DHCP lease, it creates a new connection by using the IP address of the DHCP lease as a static IP address.


:::note

The dispatcher script might run on successfully provisioned nodes while the provisioning of other nodes in the cluster is ongoing.

:::


**Procedure**

1.  Check the network interface configuration on the node.
1.  Turn off the DHCP server and reboot the {{ product_title }} node and ensure that the network configuration works properly.