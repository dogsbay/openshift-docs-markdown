{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying a live install {{ boot_media }} with customized network settings {id="installation-user-infra-machines-advanced-customizing-live-{{ boot }}_network_keyfile_{{ context }}"}

You can embed a NetworkManager keyfile into the live {{ boot_media }} and pass it through to the installed system with the `--network-keyfile` flag of the `customize` subcommand. {._abstract}


:::warning

When creating a connection profile, you must use a `.nmconnection` filename extension in the filename of the connection profile. If you do not use a `.nmconnection` filename extension, the cluster will apply the connection profile to the live environment, but it will not apply the configuration when the cluster first boots up the nodes, resulting in a setup that does not work.

:::


**Procedure**

1.  Download the `coreos-installer` binary from the [`coreos-installer` image mirror](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer/latest/) page.
1.  Create a connection profile for a bonded interface. For example, create the `bond0.nmconnection` file in your local directory with the following content:
    ```terminal
    /[connection]
    id=bond0
    type=bond
    interface-name=bond0
    multi-connect=1

    /[bond]
    miimon=100
    mode=active-backup

    /[ipv4]
    method=auto

    /[ipv6]
    method=auto
    ```
1.  Create a connection profile for a secondary interface to add to the bond. For example, create the `bond0-proxy-em1.nmconnection` file in your local directory with the following content:
    ```terminal
    /[connection]
    id=em1
    type=ethernet
    interface-name=em1
    master=bond0
    multi-connect=1
    slave-type=bond
    ```
1.  Create a connection profile for a secondary interface to add to the bond. For example, create the `bond0-proxy-em2.nmconnection` file in your local directory with the following content:
    ```terminal
    /[connection]
    id=em2
    type=ethernet
    interface-name=em2
    master=bond0
    multi-connect=1
    slave-type=bond
    ```

{% if boot-media == "ISO image" %}
1.  Retrieve the {{ op_system }} ISO image from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and run the following command to customize the ISO image with your configured networking:
    ```terminal
    $ coreos-installer iso customize rhcos-<version>-live.x86_64.iso \
        --network-keyfile bond0.nmconnection \
        --network-keyfile bond0-proxy-em1.nmconnection \
        --network-keyfile bond0-proxy-em2.nmconnection
    ```
{% endif %}

{% if boot-media == "PXE environment" %}
1.  Retrieve the {{ op_system }} `kernel`, `initramfs`, and `rootfs` files from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/latest/) page and run the following command to create a new customized `initramfs` file that contains your configured networking:
    ```terminal
    $ coreos-installer pxe customize rhcos-<version>-live-initramfs.x86_64.img \
        --network-keyfile bond0.nmconnection \
        --network-keyfile bond0-proxy-em1.nmconnection \
        --network-keyfile bond0-proxy-em2.nmconnection \
        -o rhcos-<version>-custom-initramfs.x86_64.img
    ```
1.  Use the customized `initramfs` file in your PXE configuration. Add the `ignition.firstboot` and `ignition.platform.id=metal` kernel arguments if they are not already present.
{%- endif %}

    Network settings are applied to the live system and are carried over to the destination system.