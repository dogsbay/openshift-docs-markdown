{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
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

{% if not ibm_z_kvm %}
{%- set _mod_docs_content_type = "PROCEDURE" %}
# Bonding multiple network interfaces to a single interface {id="bonding-multiple-network-interfaces-to-single-interface_{{ context }}"}

As an optional task, you can bond multiple network interfaces to a single interface by using the `bond=` option. {._abstract}

The following example demonstrates editing the `/etc/config/network` file and specifying the following syntax for bonding multiple network interfaces to a single interface:

```terminal
bond=<name>[:<network_interfaces>][:<options>]
```
*   `<name>`: Specifies the bonding device name, for example `bond0`. 
*   `<network_interfaces>`: Specifies a comma-separated list of physical (ethernet) interfaces, such as `em1,em2`.
*   `<options>: Specifies a comma-separated list of bonding options. Enter the `modinfo bonding` command to see available options.

When you create a bonded interface using the `bond=` command, you must specify how the IP address is assigned and other information for the bonded interface.

**Procedure**

*   To configure the bonded interface to use DHCP, edit the `/etc/config/network` file by setting the IP address for the bond to `dhcp`. For example:
    ```terminal
    ip=bond0:dhcp
    ```
*   To configure the bonded interface to use a static IP address, edit the `/etc/config/network` file entering the specific IP address you want and related information. For example:
{% if not ibm_z %}
    ```terminal
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:bond0:none
    ```
{% endif %}
{% if ibm_z %}
    ```terminal
    bond=bond0:em1,em2:mode=active-backup 
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:bond0:none::AA:BB:CC:DD:EE:FF ip=em1:none::AA:BB:CC:DD:EE:FF 
    ip=em2:none::AA:BB:CC:DD:EE:FF
    ```

    {{ ibm_z_title }} supports value `1` for the `fail_over_mac` parameter, so always set the `fail_over_mac=1` option in active-backup mode to avoid problems when shared OSA/RoCE cards are used.
{% endif %}

{% if ibm_z %}
*   You can configure VLANs on bonded interfaces by editing the `/etc/config/network` file and specifying the `vlan=` parameter to use DHCP. For example:
    ```terminal
    ip=bond0.100:dhcp
    bond=bond0:em1,em2:mode=active-backup
    vlan=bond0.100:bond0
    ```
*   To configure the bonded interface with a VLAN, edit the `/etc/config/network` file and specify a static IP address. For example:
    ```terminal
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:bond0.100:none
    bond=bond0:em1,em2:mode=active-backup
    vlan=bond0.100:bond0
    ```
{% endif %}
{% endif %}

{% if context == "installing-ibm-z" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = "" -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = "" -%}
{%- set restricted = "" -%}
{% endif %}