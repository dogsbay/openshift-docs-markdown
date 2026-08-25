{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{%- set only_pxe = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{%- set only_pxe = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if not only_pxe %}
# Installing {{ op_system }} by using PXE or iPXE booting {id="installation-user-infra-machines-pxe_{{ context }}"}
{% endif %}
{% if only_pxe %}
# Installing {{ op_system }} by using PXE booting {id="_installing_op_system_by_using_pxe_booting"}
{% endif %}

{%- if not only_pxe %}
You can use PXE or iPXE booting to install {{ op_system }} on the machines.
{% endif %}
{% if only_pxe %}
You can use PXE booting to install {{ op_system }} on the machines.
{% endif %} {._abstract}

**Prerequisites**

*   You have created the Ignition config files for your cluster.
*   You have configured a suitable network, DNS and load balancing infrastructure.
{%- if not only_pxe %}
*   You have configured suitable PXE or iPXE infrastructure.
{% endif %}
{% if only_pxe %}
*   You have configured suitable PXE infrastructure.
{%- endif %}
*   You have an HTTP server that can be accessed from your computer, and from the machines that you create.
*   You have reviewed the _Advanced {{ op_system }} installation configuration_ section for different ways to configure features, such as networking and disk partitioning.

**Procedure**

1.  Upload the bootstrap, control plane, and compute node Ignition config files that the
installation program created to your HTTP server. Note the URLs of these files.

    :::important

    You can add or change configuration settings in your Ignition configs
    before saving them to your HTTP server.
    If you plan to add more compute machines to your cluster after you finish
    installation, do not delete these files.
    
    :::

1.  From the installation host, validate that the Ignition config files are available on the URLs. The following example gets the Ignition config file for the bootstrap node:
    ```terminal
    $ curl -k http://<HTTP_server>/bootstrap.ign
    ```
    *   `<HTTP_server>`: Replace `bootstrap.ign` with `master.ign` or `worker.ign` in the command to validate that the Ignition config files for the control plane and compute nodes are also available.
        ```terminal title="Example output"
          % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                         Dload  Upload   Total   Spent    Left  Speed
          0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0{"ignition":{"version":"3.2.0"},"passwd":{"users":[{"name":"core","sshAuthorizedKeys":["ssh-rsa...
        ```
1.  Although it is possible to obtain the {{ op_system }} `kernel`, `initramfs` and `rootfs`
    files that are required for your preferred method of installing operating system instances from the
    {%- if openshift_enterprise %}
    {% if not ibm_power %}
    [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/)
    {% endif %}
    {% endif %}
    {% if openshift_origin %}
    [{{ op_system }}](https://getfedora.org/en/coreos/download?tab=metal_virtualized&stream=stable)
    {% endif %}
    {% if ibm_power %}
    [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/ppc64le/dependencies/rhcos/)
    {%- endif %}
    page, the recommended way to obtain the correct version of your {{ op_system }} files are
    from the output of `openshift-install` command:
    ```terminal
    $ openshift-install coreos print-stream-json | grep -Eo '"https.*(kernel-|initramfs.|rootfs.)\w+(\.img)?"'
    ```
    **Example output**

{%- if not openshift_origin %}
    ```terminal
    "<url>/art/storage/releases/rhcos-4.22-aarch64/<release>/aarch64/rhcos-<release>-live-kernel-aarch64"
    "<url>/art/storage/releases/rhcos-4.22-aarch64/<release>/aarch64/rhcos-<release>-live-initramfs.aarch64.img"
    "<url>/art/storage/releases/rhcos-4.22-aarch64/<release>/aarch64/rhcos-<release>-live-rootfs.aarch64.img"
    "<url>/art/storage/releases/rhcos-4.22-ppc64le/49.84.202110081256-0/ppc64le/rhcos-<release>-live-kernel-ppc64le"
    "<url>/art/storage/releases/rhcos-4.22-ppc64le/<release>/ppc64le/rhcos-<release>-live-initramfs.ppc64le.img"
    "<url>/art/storage/releases/rhcos-4.22-ppc64le/<release>/ppc64le/rhcos-<release>-live-rootfs.ppc64le.img"
    "<url>/art/storage/releases/rhcos-4.22-s390x/<release>/s390x/rhcos-<release>-live-kernel-s390x"
    "<url>/art/storage/releases/rhcos-4.22-s390x/<release>/s390x/rhcos-<release>-live-initramfs.s390x.img"
    "<url>/art/storage/releases/rhcos-4.22-s390x/<release>/s390x/rhcos-<release>-live-rootfs.s390x.img"
    "<url>/art/storage/releases/rhcos-4.22/<release>/x86_64/rhcos-<release>-live-kernel-x86_64"
    "<url>/art/storage/releases/rhcos-4.22/<release>/x86_64/rhcos-<release>-live-initramfs.x86_64.img"
    "<url>/art/storage/releases/rhcos-4.22/<release>/x86_64/rhcos-<release>-live-rootfs.x86_64.img"
    ```
{% endif %}
{% if openshift_origin %}
    ```
    "<url>/prod/streams/stable/builds/<release>/x86_64/fedora-coreos-<release>-live-kernel-x86_64"
    "<url>/prod/streams/stable/builds/<release>/x86_64/fedora-coreos-<release>-live-initramfs.x86_64.img"
    "<url>/prod/streams/stable/builds/<release>/x86_64/fedora-coreos-<release>-live-rootfs.x86_64.img"
    ```
{%- endif %}

    :::important

    The {{ op_system }} artifacts might not change with every release of {{ product_title }}.
    You must download images with the highest version that is less than or equal
    to the {{ product_title }} version that you install. Only use
    the appropriate `kernel`, `initramfs`, and `rootfs` artifacts described below
    for this procedure.
    {{ op_system }} QCOW2 images are not supported for this installation type.
    
    :::


    The file names contain the {{ product_title }} version number. They resemble the following examples:
{%- if not openshift_origin %}
    *   `kernel`: `rhcos-<version>-live-kernel-<architecture>`
    *   `initramfs`: `rhcos-<version>-live-initramfs.<architecture>.img`
    *   `rootfs`: `rhcos-<version>-live-rootfs.<architecture>.img`
        {% endif %}
        {% if openshift_origin %}
    *   `kernel`: `fedora-coreos-<version>-live-kernel-<architecture>`
    *   `initramfs`: `fedora-coreos-<version>-live-initramfs.<architecture>.img`
    *   `rootfs`: `fedora-coreos-<version>-live-rootfs.<architecture>.img`
{% endif %}
1.  Upload the `rootfs`, `kernel`, and `initramfs` files
to your HTTP server.

    :::important

    If you plan to add more compute machines to your cluster after you finish
    installation, do not delete these files.
    
    :::

1.  Configure the network boot infrastructure so that the machines boot from their
local disks after {{ op_system }} is installed on them.

{% if not only_pxe %}
1.  Configure PXE or iPXE installation for the {{ op_system }} images and begin the installation.
{% endif %}
{% if only_pxe %}
1.  Configure PXE installation for the {{ op_system }} images and begin the installation.
{%- endif %}
{%- if not only_pxe %}
1.  Modify one of the following example menu entries for your environment and verify that the image and Ignition files are properly accessible:
{% endif %}
{% if only_pxe %}
1.  Modify the following example menu entry for your environment and verify that the image and Ignition files are properly accessible:
    {% endif %}
    {% if not only_pxe %}
    *   For PXE (`x86_64`):
        {%- endif %}
    ```
    DEFAULT pxeboot
    TIMEOUT 20
    PROMPT 0
    LABEL pxeboot
        KERNEL http://<HTTP_server>/rhcos-<version>-live-kernel-<architecture>
        APPEND initrd=http://<HTTP_server>/rhcos-<version>-live-initramfs.<architecture>.img coreos.live.rootfs_url=http://<HTTP_server>/rhcos-<version>-live-rootfs.<architecture>.img coreos.inst.install_dev=/dev/sda coreos.inst.ignition_url=http://<HTTP_server>/bootstrap.ign
    ```

        where:

        `kernel`
        :   Specify the location of the live `kernel` file that you uploaded to your HTTP server. The URL must be HTTP, TFTP, or FTP; HTTPS and NFS are not supported.

        `initrd=main`
        :   If you use multiple NICs, specify a single interface in the `ip` option. For example, to use DHCP on a NIC that is named `eno1`, set `ip=eno1:dhcp`. Specify the locations of the {{ op_system }} files that you uploaded to your HTTP server. The `initrd` parameter value is the location of the `initramfs` file, the `coreos.live.rootfs_url` parameter value is the location of the `rootfs` file, and the `coreos.inst.ignition_url` parameter value is the location of the bootstrap Ignition config file. You can also add more kernel arguments to the `APPEND` line to configure networking or other boot options.

        :::note

        This configuration does not enable serial console access on machines with a graphical console. To configure a different console, add one or more `console=` arguments to the `APPEND` line. For example, add `console=tty0 console=ttyS0` to set the first PC serial port as the primary console and the graphical console as a secondary console. For more information, see [How does one set up a serial terminal and/or console in Red Hat Enterprise Linux?](https://access.redhat.com/articles/7212) and "Enabling the serial console for PXE and ISO installation" in the "Advanced {{ op_system }} installation configuration" section.
        
        :::


{% if not only_pxe %}
    *   For iPXE (`x86_64`
        {%- if not openshift_origin %}
    + `aarch64`
{%- endif %}
    ):
        ```
        kernel http://<HTTP_server>/rhcos-<version>-live-kernel-<architecture> initrd=main coreos.live.rootfs_url=http://<HTTP_server>/rhcos-<version>-live-rootfs.<architecture>.img coreos.inst.install_dev=/dev/sda coreos.inst.ignition_url=http://<HTTP_server>/bootstrap.ign
        initrd --name main http://<HTTP_server>/rhcos-<version>-live-initramfs.<architecture>.img
        boot
        ```

        `kernel`
        :   Specify the locations of the {{ op_system }} files that you uploaded to your HTTP server. The `kernel` parameter value is the location of the `kernel` file, the `initrd=main` argument is needed for booting on UEFI systems, the `coreos.live.rootfs_url` parameter value is the location of the `rootfs` file, and the `coreos.inst.ignition_url` parameter value is the location of the bootstrap Ignition config file. If you use multiple NICs, specify a single interface in the `ip` option.
            For example, to use DHCP on a NIC that is named `eno1`, set `ip=eno1:dhcp`.

        `initrd`
        :   Specify the location of the `initramfs` file that you uploaded to your HTTP server.

        :::note

        This configuration does not enable serial console access on machines with a graphical console.  To configure a different console, add one or more `console=` arguments to the `kernel` line.  For example, add `console=tty0 console=ttyS0` to set the first PC serial port as the primary console and the graphical console as a secondary console.  For more information, see [How does one set up a serial terminal and/or console in Red Hat Enterprise Linux?](https://access.redhat.com/articles/7212) and "Enabling the serial console for PXE and ISO installation" in the "Advanced {{ op_system }} installation configuration" section.
        
        :::

{%- if not openshift_origin %}

        :::note

        To network boot the CoreOS `kernel` on `aarch64` architecture, you need to use a version of iPXE build with the `IMAGE_GZIP` option enabled. See [`IMAGE_GZIP` option in iPXE](https://ipxe.org/buildcfg/image_gzip).
        
        :::

{% endif %}
{% endif %}
{% if not (only_pxe or openshift_origin) %}
    *   For PXE (with UEFI and Grub as second stage) on `aarch64`:
        ```
        menuentry 'Install CoreOS' {
            linux rhcos-<version>-live-kernel-<architecture>  coreos.live.rootfs_url=http://<HTTP_server>/rhcos-<version>-live-rootfs.<architecture>.img coreos.inst.install_dev=/dev/sda coreos.inst.ignition_url=http://<HTTP_server>/bootstrap.ign
            initrd rhcos-<version>-live-initramfs.<architecture>.img
        }
        ```

        where:

        `coreos.live.rootfs_url`
        :   Specify the locations of the {{ op_system }} files that you uploaded to your HTTP/TFTP server.

        `kernel`
        :   The `kernel` parameter value is the location of the `kernel` file on your TFTP server. The `coreos.live.rootfs_url` parameter value is the location of the `rootfs` file, and the `coreos.inst.ignition_url` parameter value is the location of the bootstrap Ignition config file on your HTTP Server. If you use multiple NICs, specify a single interface in the `ip` option.
            For example, to use DHCP on a NIC that is named `eno1`, set `ip=eno1:dhcp`.

        `initrd rhcos`
        :   Specify the location of the `initramfs` file that you uploaded to your TFTP server.

{% endif %}

1.  Monitor the progress of the {{ op_system }} installation on the console of the machine.

    :::important

    Be sure that the installation is successful on each node before commencing with the {{ product_title }} installation. Observing the installation process can also help to determine the cause of {{ op_system }} installation issues that might arise.
    
    :::

1.  After {{ op_system }} installs, the system reboots. During reboot, the system applies the Ignition config file that you specified.
1.  Check the console output to verify that Ignition ran.
    ```terminal title="Example command"
    Ignition: ran on 2022/03/14 14:48:33 UTC (this boot)
    Ignition: user-provided config was applied
    ```
1.  Continue to create the machines for your cluster.

    :::important

    You must create the bootstrap and control plane machines at this time. If the
    control plane machines are not made schedulable, also
    create at least two compute machines before you install the cluster.
    
    :::


    If the required network, DNS, and load balancer infrastructure are in place, the {{ product_title }} bootstrap process begins automatically after the {{ op_system }} nodes have rebooted.

    :::note

    {{ op_system }} nodes do not include a default password for the  `core` user. You can access the nodes by running `ssh core@<node>.<cluster_name>.<base_domain>` as a user with access to the SSH private key that is paired to the public key that you specified in your `install_config.yaml` file. {{ product_title }} 4 cluster nodes running {{ op_system }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. However, when investigating installation issues, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on a target node, SSH access might be required for debugging or disaster recovery.
    
    :::


{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{%- set only_pxe = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{%- set only_pxe = false -%}
{% endif %}