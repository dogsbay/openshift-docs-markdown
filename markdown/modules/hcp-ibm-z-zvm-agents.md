{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding {{ ibm_title }} z/VM as agents {id="hcp-ibm-z-zvm-agents_{{ context }}"}

If you want to use a static IP for z/VM guest, you must configure the `NMStateConfig` attribute for the z/VM agent so that the IP parameter persists in the second start. {._abstract}

Complete the following steps to start your {{ ibm_z_title }} environment with the downloaded PXE images from the `InfraEnv` resource. After the Agents are created, the host communicates with the Assisted Service and registers in the same namespace as the `InfraEnv` resource on the management cluster.

**Procedure**

1.  Update the parameter file to add the `rootfs_url`, `network_adaptor` and `disk_type` values.
    ```yaml title="Example parameter file"
    rd.neednet=1 cio_ignore=all,!condev \
    console=ttysclp0  \
    ignition.firstboot ignition.platform.id=metal \
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    coreos.inst.persistent-kargs=console=ttysclp0
    ip=<ip>::<gateway>:<netmask>::<interface>:none nameserver=<dns> \
    rd.znet=qeth,<network_adaptor_range>,layer2=1
    rd.<disk_type>=<adapter> \
    zfcp.allow_lun_scan=0
    ai.ip_cfg_override=1 \
    ```

    where:

    `coreos.live.rootfs_url`
    :   For the `coreos.live.rootfs_url` artifact, specify the matching `rootfs` artifact for the `kernel` and `initramfs` that you are starting. Only HTTP and HTTPS protocols are supported.

    `ip`
    :   For the `ip` parameter, manually assign the IP address, as described in "Installing a cluster with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}".

    `rd`
    :   For installations on DASD-type disks, use `rd.dasd` to specify the DASD where Red Hat Enterprise Linux CoreOS (RHCOS) is to be installed. For installations on FCP-type disks, use `rd.zfcp=<adapter>,<wwpn>,<lun>` to specify the FCP disk where RHCOS is to be installed.

    :::note

    For FCP multipath configurations, provide two disks instead of one.
    
    :::

    ```yaml title="Example "
    rd.zfcp=<adapter1>,<wwpn1>,<lun1> \
    rd.zfcp=<adapter2>,<wwpn2>,<lun2>
    ```

    `ai.ip_cfg_override`
    :   Specify this parameter when you use an Open Systems Adapter (OSA) or HiperSockets.

1.  Move `initrd`, kernel images, and the parameter file to the guest VM by running the following commands:
    ```terminal
    vmur pun -r -u -N kernel.img $INSTALLERKERNELLOCATION/<image name>
    ```
    ```terminal
    vmur pun -r -u -N generic.parm $PARMFILELOCATION/paramfilename
    ```
    ```terminal
    vmur pun -r -u -N initrd.img $INSTALLERINITRAMFSLOCATION/<image name>
    ```
1.  Run the following command from the guest VM console:
    ```terminal
    cp ipl c
    ```
1.  To list the agents and their properties, enter the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agents
    ```
    ```terminal title="Example output"
    NAME    CLUSTER APPROVED    ROLE    STAGE
    50c23cda-cedc-9bbd-bcf1-9b3a5c75804d    auto-assign
    5e498cd3-542c-e54f-0c58-ed43e28b568a    auto-assign
    ```
1.  Run the following command to approve the agent.
    ```terminal
    $ oc -n <hosted_control_plane_namespace> patch agent \
      50c23cda-cedc-9bbd-bcf1-9b3a5c75804d -p \
      '{"spec":{"installation_disk_id":"/dev/sda","approved":true,"hostname":"worker-zvm-0.hostedn.example.com"}}' \
      --type merge
    ```

    Optionally, you can set the agent ID `<installation_disk_id>` and `<hostname>` in the specification.
1.  Run the following command to verify that the agents are approved:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agents
    ```
    ```terminal title="Example output"
    NAME                                            CLUSTER     APPROVED   ROLE          STAGE
    50c23cda-cedc-9bbd-bcf1-9b3a5c75804d             true       auto-assign
    5e498cd3-542c-e54f-0c58-ed43e28b568a             true       auto-assign
    ```