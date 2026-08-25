{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multipathing with kernel arguments on {{ op_system }} {id="rhcos-enabling-multipath_{{ context }}"}

{{ op_system }} supports multipathing on the primary disk, allowing stronger resilience to hardware failure to achieve higher host availability. {._abstract}

You can enable multipathing at installation time for nodes that were provisioned in {{ product_title }} 4.8 or later. While postinstallation support is available by activating multipathing through the machine config, Red&#160;Hat recommends enabling multipathing during installation.

In setups where any I/O to non-optimized paths results in I/O system errors, you must enable multipathing at installation time.


:::important

On {{ ibm_z_name }} and {{ ibm_linuxone_name }}, you can enable multipathing only if you configured your cluster for it during installation. For more information, see "Installing {{ op_system }} and starting the {{ product_title }} bootstrap process" in _Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}_.

:::


The following procedure enables multipath at installation time and appends kernel arguments to the `coreos-installer install` command so that the installed system itself will use multipath beginning from the first boot.


:::note

{{ product_title }} does not support enabling multipathing as a day-2 activity on nodes that have been upgraded from 4.6 or earlier.

:::


**Prerequisites**

*   You have created the Ignition config files for your cluster.
*   You have reviewed _Installing {{ op_system }} and starting the {{ product_title }} bootstrap process_.

**Procedure**

1.  To enable multipath and start the `multipathd` daemon, run the following command on the installation host:
    ```terminal
    $ mpathconf --enable && systemctl start multipathd.service
    ```
    1.  Optional: If booting the PXE or ISO, you can instead enable multipath by adding `rd.multipath=default` from the kernel command line.
1.  Append the kernel arguments by invoking the `coreos-installer` program:
    *   If there is only one multipath device connected to the machine, the device should be available at path `/dev/mapper/mpatha`. For example:
{% if not restricted %}
        ```terminal
        $ coreos-installer install /dev/mapper/mpatha \
        --ignition-url=http://host/worker.ign \
        --append-karg rd.multipath=default \
        --append-karg root=/dev/disk/by-label/dm-mpath-root \
        --append-karg rw
        ```
{% endif %}
{% if restricted %}
        ```terminal
        $ coreos-installer install /dev/mapper/mpatha \
        --ignition-url=http://host/worker.ign \
        --append-karg rd.multipath=default \
        --append-karg root=/dev/disk/by-label/dm-mpath-root \
        --append-karg rw \
        --offline
        ```
{% endif %}
        *   `/dev/mapper/mpatha`: Indicates the path of the single multipathed device.
    *   If there are multiple multipath devices connected to the machine, instead of using `/dev/mapper/mpatha`, Red&#160;Hat recommends using the World Wide Name (WWN) symlink. The symlink is available in `/dev/disk/by-id`. For example:
{% if not restricted %}
        ```terminal
        $ coreos-installer install /dev/disk/by-id/wwn-<wwn_ID> \
        --ignition-url=http://host/worker.ign \
        --append-karg rd.multipath=default \
        --append-karg root=/dev/disk/by-label/dm-mpath-root \
        --append-karg rw
        ```
{% endif %}
{% if restricted %}
        ```terminal
        $ coreos-installer install /dev/disk/by-id/wwn-<wwn_ID> \
        --ignition-url=http://host/worker.ign \
        --append-karg rd.multipath=default \
        --append-karg root=/dev/disk/by-label/dm-mpath-root \
        --append-karg rw \
        --offline
        ```
{% endif %}

        where:

        `<wwn_ID>`
        :   Indicates the WWN ID of the target multipathed device. For example, `0xx194e957fcedb4841`.
        This symlink can also be used as the `coreos.inst.install_dev` kernel argument when using special `coreos.inst.*` arguments to direct the live installer. For more information, see "Installing {{ op_system }} and starting the {{ product_title }} bootstrap process".

1.  Reboot into the installed system.
1.  Check that the kernel arguments worked by going to one of the worker nodes and listing the kernel command-line arguments (in `/proc/cmdline` on the host):
    ```terminal
    $ oc debug node/ip-10-0-141-105.ec2.internal
    ```
    ```terminal title="Example output"
    Starting pod/ip-10-0-141-105ec2internal-debug ...
    To use host binaries, run `chroot /host`

    sh-4.2# cat /host/proc/cmdline
    ...
    rd.multipath=default root=/dev/disk/by-label/dm-mpath-root
    ...

    sh-4.2# exit
    ```

    You should see the added kernel arguments.

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = "" -%}
{% endif %}