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

{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if not ibm_z_kvm %}
# Networking and bonding options for ISO installations {id="installation-user-infra-machines-routing-bonding_{{ context }}"}
{% endif %}
{% if ibm_z_kvm %}
# Networking options for ISO installations {id="_networking_options_for_iso_installations"}
{% endif %}

You can configure advanced options so that you can modify the {{ op_system_first }} manual installation process. The subsequent sections show examples of networking options for an ISO installation. {._abstract}

If you install {{ op_system }} from an ISO image, you can add kernel arguments manually when you boot the image to configure networking for a node. If no networking arguments are specified, DHCP is activated in the initramfs when {{ op_system }} detects that networking is required to fetch the Ignition config file.


:::important

When adding networking arguments manually, you must also add the `rd.neednet=1` kernel argument to bring the network up in the initramfs.

:::


{% if not ibm_z_kvm %}
The following information provides examples for configuring networking and bonding on your {{ op_system }} nodes for ISO installations. The examples describe how to use the `ip=`, `nameserver=`, and `bond=` kernel arguments.


:::note

Ordering is important when adding the kernel arguments: `ip=`, `nameserver=`, and then `bond=`.

:::


The networking options are passed to the `dracut` tool during system boot. For more information about the networking options supported by `dracut`, see `dracut.cmdline` manual page.

{% endif %}
{% if ibm_z_kvm %}
The following information provides examples for configuring networking on your {{ op_system }} nodes for ISO installations. The examples describe how to use the `ip=` and `nameserver=` kernel arguments.


:::note

Ordering is important when adding the kernel arguments: `ip=` and `nameserver=`.

:::


The networking options are passed to the `dracut` tool during system boot. For more information about the networking options supported by `dracut`, see the `dracut.cmdline` manual page.
{% endif %}

{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
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