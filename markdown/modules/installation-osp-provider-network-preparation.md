{%- set _mod_docs_content_type = "PROCEDURE" %}
# {{ rh_openstack }} provider network requirements for cluster installation {id="installation-osp-provider-network-preparation_{{ context }}"}

Before you install an {{ product_title }} cluster, your {{ rh_openstack_first }} deployment and provider network must meet several conditions. {._abstract}

These conditions are listed as follows:

*   The [{{ rh_openstack }} networking service (Neutron) is enabled](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/networking-overview_rhosp-network#install-networking_network-overview) and accessible through the {{ rh_openstack }} networking API.
*   The {{ rh_openstack }} networking service has the [port security and allowed address pairs extensions enabled](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/config-allowed-address-pairs_rhosp-network#overview-allow-addr-pairs_config-allowed-address-pairs).
*   The provider network can be shared with other tenants.

    :::tip

    Use the `openstack network create` command with the `--share` flag to create a network that can be shared.
    
    :::

*   The {{ rh_openstack }} project that you use to install the cluster must own the provider network and an appropriate subnet.

To learn more about creating networks on {{ rh_openstack }}, read the provider networks documentation.

**Procedure**

1.  To create a network for a project that is named "openshift," enter the following command:
    ```terminal
    $ openstack network create --project openshift
    ```
1.  To create a subnet for a project that is named "openshift," enter the following command:
    ```terminal
    $ openstack subnet create --project openshift
    ```
1.  If the cluster is owned by the `admin` user, you must run the installation program as that user to create ports on the network.

    :::important

    Provider networks must be owned by the {{ rh_openstack }} project that is used to create the cluster. If they are not, the {{ rh_openstack }} Compute service (Nova) cannot request a port from that network.
    
    :::

1.  Verify that the provider network can reach the {{ rh_openstack }} metadata service IP address, which is `169.254.169.254` by default.

    Depending on your {{ rh_openstack }} SDN and networking service configuration, you might need to provide the route when you create the subnet. For example:
    ```terminal
    $ openstack subnet create --dhcp --host-route destination=169.254.169.254/32,gateway=192.0.2.2 ...
    ```
1.  Optional: To secure the network, create role-based access control (RBAC) rules that limit network access to a single project.