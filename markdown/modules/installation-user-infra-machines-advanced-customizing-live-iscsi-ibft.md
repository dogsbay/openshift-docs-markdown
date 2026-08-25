{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing a live install {{ boot_media }} for an iSCSI boot device with iBFT {id="installation-user-infra-machines-advanced-customizing-live-{{ boot }}-iscsi-ibft_{{ context }}"}

You can set the iSCSI target and initiator values for automatic mounting, booting and configuration using a customized version of the live {{ op_system }} image. {._abstract}

**Prerequisites**

1.  You have an iSCSI target you want to install {{ op_system }} on.
1.  Optional: You have multipathed your iSCSI target.

**Procedure**

1.  Download the `coreos-installer` binary from the [`coreos-installer` image mirror](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer/latest/) page.

{% if boot-media == "ISO image" %}
1.  Retrieve the {{ op_system }} ISO image from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and run the following command to customize the ISO image with the following information:
    ```text
    $ coreos-installer iso customize \
        --pre-install mount-iscsi.sh \
        --post-install unmount-iscsi.sh \
        --dest-device /dev/mapper/mpatha \
        --dest-ignition config.ign \
        --dest-karg-append rd.iscsi.firmware=1 \
        --dest-karg-append rd.multipath=default \
        -o custom.iso rhcos-<version>-live.x86_64.iso
    ```

    where:

    `mount-iscsi.sh`
    :   Specifies the script that gets run before installation. It should contain the `iscsiadm` commands for mounting the iSCSI target and any commands enabling multipathing.

    `unmount-iscsi.sh`
    :   Specifies the script that gets run after installation. It should contain the command `iscsiadm --mode node --logout=all`.

    `/dev/mapper/mpatha`
    :   Specifies the path to the device. If you are using multipath, the multipath device, `/dev/mapper/mpatha`, If there are multiple multipath devices connected, or to be explicit, you can use the World Wide Name (WWN) symlink available in `/dev/disk/by-path`.

    `config.ign`
    :   Specifies the Ignition configuration for the destination system.
        `rd.iscsi.firmware=1`::Specifies the iSCSI parameter is read from the BIOS firmware.

    `rd.multipath=default`
    :   Specifies if you want to enable multipathing. Optional parameter.
{% endif %}

{% if boot-media == "PXE environment" %}
1.  Retrieve the {{ op_system }} `kernel`, `initramfs`, and `rootfs` files from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and run the following command to create a new customized `initramfs` file with the following information:
    ```text
    $ coreos-installer pxe customize \
        --pre-install mount-iscsi.sh \
        --post-install unmount-iscsi.sh \
        --dest-device /dev/mapper/mpatha \
        --dest-ignition config.ign \
        --dest-karg-append rd.iscsi.firmware=1 \
        --dest-karg-append rd.multipath=default \
        -o custom.img rhcos-<version>-live-initramfs.x86_64.img
    ```

    where:

    `mount-iscsi.sh`
    :   Specifies the script that gets run before installation. It should contain the `iscsiadm` commands for mounting the iSCSI target.

    `unmount-iscsi.sh`
    :   Specifies the script that gets run after installation. It should contain the command `iscsiadm --mode node --logout=all`.

    `/dev/mapper/mpatha`
    :   Specifies the path to the device. If you are using multipath, the multipath device, `/dev/mapper/mpatha`, If there are multiple multipath devices connected, or to be explicit, you can use the World Wide Name (WWN) symlink available in `/dev/disk/by-path`.

    `config.ign`
    :   Specifies the Ignition configuration for the destination system.

    `rd.iscsi.firmware=1`
    :   Specifies the iSCSI parameter is read from the BIOS firmware.

    `rd.multipath=default`
    :   Specifies if you want to enable multipathing. Optional parameter.
{%- endif %}
    For more information about see the `dracut.cmdline` manual page.