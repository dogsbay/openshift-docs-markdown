{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying a live install {{ boot_media }} to use a custom certificate authority {id="installation-user-infra-machines-advanced-customizing-live-{{ boot }}-ca-certs_{{ context }}"}

You can provide certificate authority (CA) certificates to Ignition with the `--ignition-ca` flag of the `customize` subcommand. You can use the CA certificates during both the installation boot and when provisioning the installed system. {._abstract}


:::note

Custom CA certificates affect how Ignition fetches remote resources, but they do not affect the certificates installed onto the system.

:::


**Procedure**

1.  Download the `coreos-installer` binary from the [`coreos-installer` image mirror](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer/latest/) page.

{% if boot-media == "ISO image" %}
1.  Retrieve the {{ op_system }} ISO image from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page, and run the following command to customize the ISO image for use with a custom CA:
    ```terminal
    $ coreos-installer iso customize rhcos-<version>-live.x86_64.iso --ignition-ca cert.pem
    ```
{% endif %}

{% if boot-media == "PXE environment" %}
1.  Retrieve the {{ op_system }} `kernel`, `initramfs`, and `rootfs` files from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page, and run the following command to create a new customized `initramfs` file for use with a custom CA:
    ```terminal
    $ coreos-installer pxe customize rhcos-<version>-live-initramfs.x86_64.img \
        --ignition-ca cert.pem \
        -o rhcos-<version>-custom-initramfs.x86_64.img
    ```
1.  Use the customized `initramfs` file in your PXE configuration. Add the `ignition.firstboot` and `ignition.platform.id=metal` kernel arguments if they are not already present.
{%- endif %}

    :::important

    The `coreos.inst.ignition_url` kernel parameter does not work with the `--ignition-ca` flag.
    You must use the `--dest-ignition` flag to create a customized image for each cluster.
    
    :::


    Applying your custom CA certificate affects every subsequent boot of {{ op_system }}.