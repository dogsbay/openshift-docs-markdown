{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if not (ibm_z or ibm_z_kvm) %}
# Bonding multiple SR-IOV network interfaces to a dual port NIC interface {id="bonding-multiple-sriov-network-interfaces-to-dual-port_{{ context }}"}
{% endif %}
{% if ibm_z or ibm_z_kvm %}
# Using network teaming {id="_using_network_teaming"}
{% endif %}

{%- if not (ibm_z or ibm_z_kvm) %}
You can bond multiple SR-IOV network interfaces to a dual port NIC interface by using the `bond=` option. Ensure you apply the procedure tasks to each node.
{% endif %}
{% if ibm_z or ibm_z_kvm %}
You can use network teaming as an alternative to bonding by using the `team=` parameter.
{% endif %} {._abstract}

**Procedure**

{% if not (ibm_z or ibm_z_kvm) %}
{% if not installing_ibm_power %}
1.  Create the SR-IOV virtual functions (VFs) following the guidance in [Managing SR-IOV devices](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_virtualization/managing-virtual-devices_configuring-and-managing-virtualization#managing-sr-iov-devices_managing-virtual-devices). Follow the procedure in the "Attaching SR-IOV networking devices to virtual machines" section.
{% endif %}
{% if installing_ibm_power %}
1.  Create the SR-IOV virtual functions (VFs).
{% endif %}
1.  Create the bond, attach the desired VFs to the bond and set the bond link state up following the guidance in [Configuring network bonding](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_networking/configuring-network-bonding_configuring-and-managing-networking). Follow any of the described procedures to create the bond.

    The following examples illustrate the syntax you must use:
    *   The syntax for configuring a bonded interface is `bond=<name>[:<network_interfaces>][:options]`.

        `<name>` is the bonding device name (`bond0`), `<network_interfaces>` represents the virtual functions (VFs) by their known name in the kernel and shown in the output of the `ip link` command(`eno1f0`, `eno2f0`), and _options_ is a comma-separated list of bonding options. Enter `modinfo bonding` to see available options.
    *   When you create a bonded interface using `bond=`, you must specify how the IP address is assigned and other information for the bonded interface.
        *   To configure the bonded interface to use DHCP, set the bond’s IP address to `dhcp`. For example:
            ```terminal
            bond=bond0:eno1f0,eno2f0:mode=active-backup
            ip=bond0:dhcp::AA:BB:CC:DD:EE:FF
            ip=eno1f0:none::AA:BB:CC:DD:EE:FF
            ip=eno2f0:none::AA:BB:CC:DD:EE:FF
            ```
        *   To configure the bonded interface to use a static IP address, enter the specific IP address you want and related information. For example:
            ```terminal
            bond=bond0:eno1f0,eno2f0:mode=active-backup
            ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:bond0:none
            ```
{% endif %}
{% if not ibm_power %}
1.  Optional: You can use network teaming as an alternative to bonding by using the `team=` parameter.
    *   The syntax for configuring a team interface is: `team=name[:network_interfaces]`

        _name_ is the team device name (`team0`) and _network_interfaces_ represents a comma-separated list of physical (ethernet) interfaces (`em1, em2`).

        :::note

        Teaming is planned to be deprecated when {{ op_system }} switches to an upcoming version of {{ op_system_base }}. For more information, see this [Red Hat Knowledgebase Article](https://access.redhat.com/solutions/6509691).
        
        :::


        Use the following example to configure a network team:
        ```terminal
        team=team0:em1,em2
        ip=team0:dhcp
        ```
{% endif %}

{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{%- set restricted = false -%}
{% endif %}