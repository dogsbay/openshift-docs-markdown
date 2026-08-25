{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ op_system }} manually on an iSCSI boot device {id="rhcos-install-iscsi-manual_{{ context }}"}

You can manually install {{ op_system }} on an iSCSI target. {._abstract}

**Prerequisites**

1.  You are in the {{ op_system }} live environment.
1.  You have an iSCSI target that you want to install {{ op_system }} on.

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

1.  Install {{ op_system }} onto the iSCSI target by running the following command and using the necessary kernel arguments, for example:
    ```text {minja}
    {% if not restricted %}
    $ coreos-installer install \
    /dev/disk/by-path/ip-<IP_address>:<port>-iscsi-<target_iqn>-lun-<lun> \
    --append-karg rd.iscsi.initiator=<initiator_iqn> \
    --append.karg netroot=<target_iqn> \
    --console ttyS0,115200n8
    --ignition-file <path_to_file>
    {% endif %}
    {% if restricted %}
    $ coreos-installer install \
    /dev/disk/by-path/ip-<IP_address>:<port>-iscsi-<target_iqn>-lun-<lun> \
    --append-karg rd.iscsi.initiator=<initiator_iqn> \
    --append.karg netroot=<target_iqn> \
    --console ttyS0,115200n8 \
    --ignition-file <path_to_file> \
    --offline
    {% endif %}
    ```

    where:

    `/dev/disk/by-path/ip`
    :   Specifies the installation location. You must provide the IP address of the target portal, the associated port number, the target iSCSI node in IQN format, and the iSCSI logical unit number (LUN).

    `<initiator_iqn>`
    :   Specifies the iSCSI initiator, or client, name in IQN format. The initiator forms a session to connect to the iSCSI target.

    `<target_iqn>`
    :   Specifies the iSCSI target, or server, name in IQN format.
    For more information about the iSCSI options supported by `dracut`, see the [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html).

1.  Unmount the iSCSI disk with the following command:
    ```text
    $ iscsiadm --mode node --logoutall=all
    ```

    This procedure can also be performed using the `coreos-installer iso customize` or `coreos-installer pxe customize` subcommands.

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = "" -%}
{% endif %}