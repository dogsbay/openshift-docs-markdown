{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the serial console for PXE and ISO installations {id="installation-user-infra-machines-advanced-enabling-serial-console_{{ context }}"}

By default, the {{ op_system_first }} serial console is disabled and all output is written to the graphical console. You can enable the serial console for PXE and ISO installations. {._abstract}

**Procedure**

1.  Boot the ISO installer.
1.  Run the `coreos-installer` command to install the system, adding the `--console` option once to specify the graphical console, and a second time to specify the serial console:
{% if not restricted %}
    ```terminal
    $ coreos-installer install \
    --console=tty0 \
    --console=ttyS0,<options> \
    --ignition-url=http://host/worker.ign /dev/disk/by-id/scsi-<serial_number>
    ```
{% endif %}
{% if restricted %}
    ```terminal
    $ coreos-installer install \
    --console=tty0 \
    --console=ttyS0,<options> \
    --ignition-url=http://host/worker.ign \
    --offline \
    /dev/disk/by-id/scsi-<serial_number>
    ```
{% endif %}

    where:

    `--console=tty0`
    :   The desired secondary console. In this case, the graphical console. Omitting this option will disable the graphical console.

    `--console=ttyS0`
    :   The desired primary console. In this case, the serial console. The `options` field defines the baud rate and other settings. A common value for this field is `115200n8`. If no options are provided, the default kernel value of `9600n8` is used. For more information on the format of this option, see [Linux kernel serial console](https://www.kernel.org/doc/html/latest/admin-guide/serial-console.html) documentation.

1.  Reboot into the installed system.

    :::note

    A similar outcome can be obtained by using the `coreos-installer install --append-karg` option, and specifying the console with `console=`. However, this will only set the console for the kernel and not the bootloader.
    
    :::


    To configure a PXE installation, make sure the `coreos.inst.install_dev` kernel command-line option is omitted, and use the shell prompt to run `coreos-installer` manually using the above ISO installation procedure.

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = "" -%}
{% endif %}