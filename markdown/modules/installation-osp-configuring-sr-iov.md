{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating SR-IOV networks for compute machines {id="installation-osp-configuring-sr-iov_{{ context }}"}

If your {{ rh_openstack_first }} deployment supports single root I/O virtualization (SR-IOV), you can provision SR-IOV networks that compute machines run on. {._abstract}

You must configure your {{ rh_openstack }} platform before you install a cluster that uses SR-IOV on the platform.


:::note

The procedure uses an example of creating an external flat network and an external VLAN-based network that can be attached to a compute machine. Depending on your {{ rh_openstack }} deployment, other network types might be required.

:::


**Prerequisites**

*   Your cluster supports SR-IOV.

    :::note

    If you are unsure about what your cluster supports, review the {{ product_title }} SR-IOV hardware networks documentation.
    
    :::

*   You created radio and uplink provider networks as part of your {{ rh_openstack }} deployment. The names `radio` and `uplink` are used in all example commands to represent these networks.

**Procedure**

1.  On a command line, create a radio {{ rh_openstack }} network:
    ```terminal
    $ openstack network create radio --provider-physical-network radio --provider-network-type flat --external
    ```
1.  Create an uplink {{ rh_openstack }} network:
    ```terminal
    $ openstack network create uplink --provider-physical-network uplink --provider-network-type vlan --external
    ```
1.  Create a subnet for the radio network:
    ```terminal
    $ openstack subnet create --network radio --subnet-range <radio_network_subnet_range> radio
    ```
1.  Create a subnet for the uplink network:
    ```terminal
    $ openstack subnet create --network uplink --subnet-range <uplink_network_subnet_range> uplink
    ```