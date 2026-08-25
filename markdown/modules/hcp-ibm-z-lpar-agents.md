{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding {{ ibm_z_title }} LPAR as agents {id="hcp-ibm-z-lpar-agents_{{ context }}"}

To attach compute nodes to a hosted control plane, create agents that help you to scale the node pool.  {._abstract}

Adding agents in an {{ ibm_z_title }} environment requires additional steps, which are described in detail in this section.

Unless stated otherwise, this procedure applies to both z/VM and RHEL KVM installations on {{ ibm_z_title }} and {{ ibm_linuxone_title }}.

You can add the Logical Partition (LPAR) on {{ ibm_z_title }} or {{ ibm_linuxone_title }} as a compute node to a hosted control plane.

**Procedure**

1.  Create a boot parameter file for the agents:
    ```yaml title="Example parameter file"
    rd.neednet=1 cio_ignore=all,!condev \
    console=ttysclp0 \
    ignition.firstboot ignition.platform.id=metal
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    coreos.inst.persistent-kargs=console=ttysclp0
    ip=<ip>::<gateway>:<netmask>::<interface>:none nameserver=<dns> \
    rd.znet=qeth,<network_adaptor_range>,layer2=1
    rd.<disk_type>=<adapter> \
    zfcp.allow_lun_scan=0
    ai.ip_cfg_override=1 \
    random.trust_cpu=on rd.luks.options=discard
    ```

    where:

    `coreos.live.rootfs_url`
    :   For the `coreos.live.rootfs_url` artifact, specify the matching `rootfs` artifact for the `kernel` and `initramfs` that you are starting. Only HTTP and HTTPS protocols are supported.

    `ip`
    :   For the `ip` parameter, manually assign the IP address, as described in "Installing a cluster with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}".

    `rd`
    :   For installations on DASD-type disks, use `rd.dasd` to specify the DASD where {{ op_system_first }} is to be installed. For installations on FCP-type disks, use `rd.zfcp=<adapter>,<wwpn>,<lun>` to specify the FCP disk where {{ op_system }} is to be installed.

    `ai.ip_cfg_override`
    :   Specify this parameter when you use an Open Systems Adapter (OSA) or HiperSockets.

1.  Download the `.ins` and `initrd.img.addrsize` files from the `InfraEnv` resource.

    By default, the URL for the `.ins` and `initrd.img.addrsize` files is not available in the `InfraEnv` resource. You must edit the URL to fetch those artifacts.
    1.  Update the kernel URL endpoint to include `ins-file` by running the followign command:
        ```terminal
        $ curl -k -L -o generic.ins "< url for ins-file >"
        ```
        ```yaml title="Example URL"
        https://…/boot-artifacts/ins-file?arch=s390x&version=4.17.0
        ```
    1.  Update the `initrd` URL endpoint to include `s390x-initrd-addrsize`:
        ```yaml title="Example URL"
        https://…./s390x-initrd-addrsize?api_key=<api-key>&arch=s390x&version=4.17.0
        ```
1.  Transfer the `initrd`, `kernel`, `generic.ins`, and `initrd.img.addrsize` parameter files to the file server. For more information about how to transfer the files with FTP and boot, see "Installing in an LPAR".
1.  Start the machine.
1.  Repeat the procedure for all other machines in the cluster.