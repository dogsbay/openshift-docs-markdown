{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing a live {{ op_system }} {{ boot_media }} {id="installation-user-infra-machines-advanced-customizing-live-{{ boot }}_{{ context }}"}

You can customize a live {{ op_system }} {{ boot_media }} directly with the
{%- if boot-media == "ISO image" %}
`coreos-installer iso customize`
{% endif %}
{% if boot-media == "PXE environment" %}
`coreos-installer pxe customize`
{%- endif %}
subcommand. When you boot the {{ boot_media }}, the customizations are applied automatically. You can use this feature to configure the {{ boot_media }} to automatically install {{ op_system }}. {._abstract}

**Procedure**

1.  Download the `coreos-installer` binary from the [`coreos-installer` image mirror](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer/latest/) page.

{% if boot-media == "ISO image" %}
1.  Retrieve the {{ op_system }} ISO image from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and the Ignition config file, and then run the following command to inject the Ignition config directly into the ISO image:
    ```terminal
    $ coreos-installer iso customize rhcos-<version>-live.x86_64.iso \
        --dest-ignition bootstrap.ign \
        --dest-device /dev/disk/by-id/scsi-<serial_number>
    ```

    where:

    `--dest-ignition`
    :   Specifies the Ignition config file that is generated from the `openshift-installer` installation program.

    `--dest-device`
    :   When you specify this option, the {{ boot_media }} automatically runs an installation. Otherwise, the image remains configured for installation, but does not install automatically unless you specify the `coreos.inst.install_dev` kernel argument.

1.  Optional: To remove the {{ boot_media }} customizations and return the image to its pristine state, run:
    ```terminal
    $ coreos-installer iso reset rhcos-<version>-live.x86_64.iso
    ```

    You can now re-customize the live {{ boot_media }} or use it in its pristine state.
{% endif %}

{% if boot-media == "PXE environment" %}
1.  Retrieve the {{ op_system }} `kernel`, `initramfs`, and `rootfs` files from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and the Ignition config file, and then run the following command to create a new `initramfs` file that contains the customizations from your Ignition config:
    ```terminal
    $ coreos-installer pxe customize rhcos-<version>-live-initramfs.x86_64.img \
        --dest-ignition bootstrap.ign \
        --dest-device /dev/disk/by-id/scsi-<serial_number> \
        -o rhcos-<version>-custom-initramfs.x86_64.img
    ```

    where:

    `--dest-ignition`
    :   Specifies the Ignition config file that is generated from `openshift-installer`.

    `<serial_number>`
    :   When you specify this option, the {{ boot_media }} automatically runs an install. Otherwise, the image remains configured for installation, but does not do so automatically unless you specify the `coreos.inst.install_dev` kernel argument.

    `<version>`
    :   Use the customized `initramfs` file in your PXE configuration. Add the `ignition.firstboot` and `ignition.platform.id=metal` kernel arguments if they are not already present.
{%- endif %}
    Applying your customizations affects every subsequent boot of {{ op_system }}.