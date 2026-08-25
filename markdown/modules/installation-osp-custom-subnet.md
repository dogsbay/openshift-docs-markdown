{%- set _mod_docs_content_type = "CONCEPT" %}
# Custom subnets in {{ rh_openstack }} deployments {id="installation-osp-custom-subnet_{{ context }}"}

Optionally, you can deploy a cluster on a {{ rh_openstack_first }} subnet of your choice. The GUID of a subnet is passed as the value of `platform.openstack.machinesSubnet` in the `install-config.yaml` file. {._abstract}

This subnet is used as the cluster’s primary subnet. By default, nodes and ports are created on the subnet. You can create nodes and ports on a different {{ rh_openstack }} subnet by setting the value of the `platform.openstack.machinesSubnet` property to the subnet’s UUID.

Before you run the {{ product_title }} installer with a custom subnet, verify that your configuration meets the following requirements:

*   The subnet that is used by `platform.openstack.machinesSubnet` has DHCP enabled.
*   The CIDR of `platform.openstack.machinesSubnet` matches the CIDR of `networking.machineNetwork`.
*   The installation program user has permission to create ports on this network, including ports with fixed IP addresses.

Clusters that use custom subnets have the following limitations:

*   If you plan to install a cluster that uses floating IP addresses, the `platform.openstack.machinesSubnet` subnet must be attached to a router that is connected to the `externalNetwork` network.
*   If the `platform.openstack.machinesSubnet` value is set in the `install-config.yaml` file, the installation program does not create a private network or subnet for your {{ rh_openstack }} machines.
*   You cannot use the `platform.openstack.externalDNS` property at the same time as a custom subnet. To add DNS to a cluster that uses a custom subnet, configure DNS on the {{ rh_openstack }} network.


:::note

By default, the API VIP takes x.x.x.5 and the Ingress VIP takes x.x.x.7 from your network’s CIDR block. To override these default values,
set values for `platform.openstack.apiVIPs` and `platform.openstack.ingressVIPs` that are outside of the DHCP allocation pool.

:::



:::important

The CIDR ranges for networks are not adjustable after cluster installation. Red Hat does not provide direct guidance on determining the range during cluster installation because it requires careful consideration of the number of created pods per namespace.

:::