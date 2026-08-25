{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using advanced networking options for PXE and ISO installations {id="installation-user-infra-machines-advanced_network_{{ context }}"}

Networking for {{ product_title }} nodes uses DHCP by default to gather all necessary configuration settings. You can set up static IP addresses or configure special settings. {._abstract}

To set up static IP addresses or configure special settings, such as bonding, you can do one of the following:

*   Pass special kernel parameters when you boot the live installer.
*   Use a machine config to copy networking files to the installed system.
*   Configure networking from a live installer shell prompt, then copy those settings to the installed system so that they take effect when the installed system first boots.

To configure a PXE or iPXE installation, use one of the following options:

*   See the "coreos-installer and boot options for ISO and PXE installations" tables.
*   Use a machine config to copy networking files to the installed system.

To configure an ISO installation, use the following procedure.

**Procedure**

1.  Boot the ISO installer.
1.  From the live system shell prompt, configure networking for the live system by using available RHEL tools, such as `nmcli` or `nmtui`.
1.  Run the `coreos-installer` command to install the system, adding the `--copy-network` option to copy networking configuration. For example:
    {%- if not restricted %}
    ```terminal
    $ sudo coreos-installer install --copy-network \
         --ignition-url=http://host/worker.ign /dev/disk/by-id/scsi-<serial_number>
    ```
{% endif %}
{% if restricted %}
    ```terminal
    $ sudo coreos-installer install --copy-network \
    --ignition-url=http://host/worker.ign \
    --offline \
    /dev/disk/by-id/scsi-<serial_number>
    ```
{%- endif %}

    :::important

    The `--copy-network` option only copies networking configuration found under `/etc/NetworkManager/system-connections`. In particular, it does not copy the system hostname.
    
    :::

1.  Reboot into the installed system.

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}