{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ op_system }} on an iSCSI boot device using iBFT {id="rhcos-install-iscsi-ibft_{{ context }}"}

On a completely diskless machine, the iSCSI target and initiator values can be passed through iBFT. iSCSI multipathing is also supported. {._abstract}

**Prerequisites**

1.  You are in the {{ op_system }} live environment.
1.  You have an iSCSI target you want to install {{ op_system }} on.
1.  Optional: You have configured multipathing for your iSCSI target.

**Procedure**

1.  Mount the iSCSI target from the live environment by running the following command:
    ```text
    $ iscsiadm \
        --mode discovery \
        --type sendtargets
        --portal <IP_address> \
        --login
    ```

    where:

    `<IP_address>`
    :   Specifies the IP address of the target portal.

1.  Optional: enable multipathing and start the daemon with the following command:
    ```text
    $ mpathconf --enable && systemctl start multipathd.service
    ```
1.  Install {{ op_system }} onto the iSCSI target by running the following command and using the necessary kernel arguments, for example:
    ```text
{%- if not restricted %}
    $ coreos-installer install \
        /dev/mapper/mpatha \
        --append-karg rd.iscsi.firmware=1 \
        --append-karg rd.multipath=default \
        --console ttyS0 \
        --ignition-file <path_to_file>
{% endif %}
{% if restricted %}
    $ coreos-installer install \
        /dev/mapper/mpatha \
        --append-karg rd.iscsi.firmware=1 \
        --append-karg rd.multipath=default \
        --console ttyS0 \
        --ignition-file <path_to_file> \
        --offline
{%- endif %}
    ```

    where:

    `/dev/mapper/mpatha`
    :   Specifies the path of a single multipathed device. If there are multiple multipath devices connected, or to be explicit, you can use the World Wide Name (WWN) symlink available in `/dev/disk/by-path`.

    `rd.iscsi.firmware=1`
    :   Specifies that the iSCSI parameter is read from the BIOS firmware.

    `rd.multipath=default`
    :   Specifies to enable multipathing. Optional parameter.
    For more information about the iSCSI options supported by `dracut`, see the `dracut.cmdline` manual page.

1.  Unmount the iSCSI disk:
    ```text
    $ iscsiadm --mode node --logout=all
    ```

    You can also perform this procedure by using the `coreos-installer iso customize` or `coreos-installer pxe customize` subcommands.

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}