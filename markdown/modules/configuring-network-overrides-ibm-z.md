{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring network overrides in an {{ ibm_z_title }} environment {id="configuring-network-overrides-ibm_{{ context }}"}

You can specify a static IP address on {{ ibm_z_title }} machines that use Logical Partition (LPAR) and z/VM. This is useful when the network devices do not have a static MAC address assigned to them. {._abstract}


:::note

If you are using an OSA network device in Processor Resource/Systems Manager (PR/SM) mode, the lack of persistent MAC addresses can lead to a dynamic assignment of roles for nodes. This means that the roles of individual nodes are not fixed and can change, as the system is unable to reliably associate specific MAC addresses with designated node roles. If MAC addresses are not persistent for any of the interfaces, roles for the nodes are assigned randomly during Agent-based installation.

:::


**Procedure**

*   If you have an existing `.parm` file, edit it to include the following entry:
    ```terminal
    ai.ip_cfg_override=1
    ```

    This parameter allows the file to add the network settings to the {{ op_system_first }} installer.

    :::note

    The `override` parameter overrides the host’s network configuration settings.
    
    :::

    ```terminal title="Example .parm file"
    rd.neednet=1 cio_ignore=all,!condev
    console=ttysclp0
    coreos.live.rootfs_url=<coreos_url>
    ip=<ip>::<gateway>:<netmask>:<hostname>::none nameserver=<dns>
    rd.znet=qeth,<network_adaptor_range>,layer2=1
    rd.<disk_type>=<adapter>
    rd.zfcp=<adapter>,<wwpn>,<lun> random.trust_cpu=on
    zfcp.allow_lun_scan=0
    ai.ip_cfg_override=1
    ignition.firstboot ignition.platform.id=metal
    random.trust_cpu=on
    ```
    *   For the `coreos.live.rootfs_url` artifact, specify the matching `rootfs` artifact for the `kernel` and `initramfs` that you are booting. Only HTTP and HTTPS protocols are supported.
    *   For installations on direct access storage devices (DASD) type disks, use `rd.` to specify the DASD where {{ op_system_first }} is to be installed. For installations on Fibre Channel Protocol (FCP) disks, use `rd.zfcp=<adapter>,<wwpn>,<lun>` to specify the FCP disk where {{ op_system }} is to be installed.
    *   Specify values for `<adapter>`, `<wwpn>`, and `<lun>` as in the following example: `rd.zfcp=0.0.8002,0x500507630400d1e3,0x4000404600000000`.

    :::important

    The `ip=` kernel parameter uses the following syntax:

    `ip=[IP]:[Gateway]:[Netmask]:[Hostname]:[Interface]:[None]:[DNS]`

    For VLAN configurations:

    *   Define both the **base interface** and the **tagged VLAN interface** separately.
    *   The `vlan=` parameter links the tagged interface (for example, `encbdf0.300`) to the underlying physical interface (`encbdf0`).

    For bonded interfaces:

    *   No changes are required in the default kernel command-line parameters.
    *   To install nodes by using bonded interfaces, provide the appropriate bond configuration in the `agent-config` file.
    
    :::