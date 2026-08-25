{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing a live install {{ boot_media }} for an iSCSI boot device {id="installation-user-infra-machines-advanced-customizing-live-{{ boot }}-iscsi-manual_{{ context }}"}

You can set the iSCSI target and initiator values for automatic mounting, booting and configuration by using a customized version of the live {{ op_system }} image. {._abstract}

**Prerequisites**

1.  You have an iSCSI target you want to install {{ op_system }} on.

**Procedure**

1.  Download the `coreos-installer` binary from the [`coreos-installer` image mirror](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer/latest/) page.

{% if boot-media == "ISO image" %}
1.  Retrieve the {{ op_system }} ISO image from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and run the following command to customize the ISO image with the following information:
    ```text
    $ coreos-installer iso customize \
        --pre-install mount-iscsi.sh \
        --post-install unmount-iscsi.sh \
        --dest-device /dev/disk/by-path/<IP_address>:<port>-iscsi-<target_iqn>-lun-<lun> \
        --dest-ignition config.ign \
        --dest-karg-append rd.iscsi.initiator=<initiator_iqn> \
        --dest-karg-append netroot=<target_iqn> \
        -o custom.iso rhcos-<version>-live.x86_64.iso
    ```

    where:

    `mount-iscsi.sh`
    :   Specifies the script that gets run before installation. It should contain the `iscsiadm` commands for mounting the iSCSI target and any commands enabling multipathing.

    `unmount-iscsi.sh`
    :   Specifies the script that gets run after installation. It should contain the command `iscsiadm --mode node --logout=all`.

    `<target_iqn>`
    :   Specifies the location of the destination system. You must provide the IP address of the target portal, the associated port number, the target iSCSI node in IQN format, and the iSCSI logical unit number (LUN).

    `config.ign`
    :   Specifies the Ignition configuration for the destination system.
        `<initiator_iqn>`::Specifies the iSCSI initiator, or client, name in IQN format. The initiator forms a session to connect to the iSCSI target.
        `<target_iqn>`::Specifies the iSCSI target, or server, name in IQN format.
{% endif %}

{% if boot-media == "PXE environment" %}
1.  Retrieve the {{ op_system }} `kernel`, `initramfs`, and `rootfs` files from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and run the following command to create a new customized `initramfs` file with the following information:
    ```text
    $ coreos-installer pxe customize \
        --pre-install mount-iscsi.sh \
        --post-install unmount-iscsi.sh \
        --dest-device /dev/disk/by-path/<IP_address>:<port>-iscsi-<target_iqn>-lun-<lun> \
        --dest-ignition config.ign \
        --dest-karg-append rd.iscsi.initiator=<initiator_iqn> \
        --dest-karg-append netroot=<target_iqn> \
        -o custom.img rhcos-<version>-live-initramfs.x86_64.img
    ```

    where:

    `mount-iscsi.sh`
    :   Specifies the script that gets run before installation. It should contain the `iscsiadm` commands for mounting the iSCSI target and any commands enabling multipathing.

    `unmount-iscsi.sh`
    :   Specifies the script that gets run after installation. It should contain the command `iscsiadm --mode node --logout=all`.

    `<target_iqn>`
    :   Specifies the location of the destination system. You must provide the IP address of the target portal, the associated port number, the target iSCSI node in IQN format, and the iSCSI logical unit number (LUN).

    `config.ign`
    :   Specifies the Ignition configuration for the destination system.

    `<initiator_iqn>`
    :   Specifies the iSCSI initiator, or client, name in IQN format. The initiator forms a session to connect to the iSCSI target.

    `<target_iqn>`
    :   Specifies the iSCSI target, or server, name in IQN format.
{% endif %}

    For more information about the iSCSI options supported by `dracut`, see the `dracut.cmdline` manual page.