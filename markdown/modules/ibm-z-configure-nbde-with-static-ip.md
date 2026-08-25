{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z_lpar = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z_lpar = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring NBDE with static IP in an {{ ibm_z_title }} or {{ ibm_linuxone_title }} environment {id="configuring-nbde-static-ip-ibm-z-linuxone-environment_{{ context }}"}

Enabling NBDE disk encryption in an {{ ibm_z_name }} or {{ ibm_linuxone_name }} environment requires additional steps. {._abstract}

**Prerequisites**

*   You have set up the External Tang Server. See [Network-bound disk encryption](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening#network-bound-disk-encryption_configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption) for instructions.
*   You have installed the `butane` utility.
*   You have reviewed the instructions for how to create machine configs with Butane.

**Procedure**

1.  Create Butane configuration files for the control plane and compute nodes.

    The following example of a Butane configuration for a control plane node creates a file named `master-storage.bu` for disk encryption:
    ```yaml
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: master-storage
      labels:
        machineconfiguration.openshift.io/role: master
    storage:
      luks:
        - clevis:
            tang:
              - thumbprint: QcPr_NHFJammnRCA3fFMVdNBwjs
                url: http://clevis.example.com:7500
          device: /dev/disk/by-partlabel/root
          label: luks-root
          name: root
          wipe_volume: true
      filesystems:
        - device: /dev/mapper/root
          format: xfs
          label: root
          wipe_filesystem: true
    openshift:
      fips: true
    ```

    where:

{% if not ibm_z_kvm %}

    `storage.luks.device`
    :   Specifies the device to encrypt. For installations on DASD-type disks, replace with `device: /dev/disk/by-label/root`.
{%- endif %}

    `openshift.fips`
    :   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

1.  Create a customized initramfs file to boot the machine, by running the following command:
    ```terminal
    $ coreos-installer pxe customize \
        /root/rhcos-bootfiles/rhcos-<release>-live-initramfs.s390x.img \
        --dest-device /dev/disk/by-id/scsi-<serial_number> --dest-karg-append \
        ip=<ip_address>::<gateway_ip>:<subnet_mask>::<network_device>:none \
        --dest-karg-append nameserver=<nameserver_ip> \
        --dest-karg-append rd.neednet=1 -o \
        /root/rhcos-bootfiles/<node_name>-initramfs.s390x.img
    ```

    :::note

    Before first boot, you must customize the initramfs for each node in the cluster, and add PXE kernel parameters.
    
    :::

1.  Create a parameter file that includes `ignition.platform.id=metal` and `ignition.firstboot`.

    **Example kernel parameter file for the control plane machine**

{% if not ibm_z_kvm %}
```terminal
cio_ignore=all,!condev rd.neednet=1 \
console=ttysclp0 \
coreos.inst.install_dev=/dev/<block_device> \
ignition.firstboot ignition.platform.id=metal \
coreos.inst.ignition_url=http://<http_server>/master.ign \
coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
ip=<ip>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
rd.znet=qeth,0.0.bdd0,0.0.bdd1,0.0.bdd2,layer2=1 \
rd.zfcp=0.0.5677,0x600606680g7f0056,0x034F000000000000 \
zfcp.allow_lun_scan=0
```

where:

{% if ibm_z %}

`coreos.inst.install_dev`
:   Specifies the block device type. For installations on DASD-type disks, specify `/dev/dasda`. For installations on FCP-type disks, specify `/dev/sda`.
{% endif %}
{% if ibm_z_lpar %}

`coreos.inst.install_dev`
:   Specifies the block device type. For installations on DASD-type disks, specify `/dev/dasda`. For installations on FCP-type disks, specify `/dev/sda`. For installations on NVMe-type disks, specify `/dev/nvme0n1`.
{%- endif %}

`coreos.inst.ignition_url`
:   Specifies the location of the Ignition config file. Use `master.ign` or `worker.ign`. Only HTTP and HTTPS protocols are supported.

`coreos.live.rootfs_url`
:   Specifies the location of the `rootfs` artifact for the `kernel` and `initramfs` you are booting. Only HTTP and HTTPS protocols are supported.

`rd.zfcp`
:   Specifies the FCP device. For installations on DASD-type disks, replace with `rd.dasd=0.0.xxxx` to specify the DASD device.
{% endif %}
{% if ibm_z_kvm %}
    ```terminal
    cio_ignore=all,!condev rd.neednet=1 \
    console=ttysclp0 \
    ignition.firstboot ignition.platform.id=metal \
    coreos.inst.ignition_url=http://<http_server>/master.ign \
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    ip=<ip>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
    rd.znet=qeth,0.0.bdd0,0.0.bdd1,0.0.bdd2,layer2=1 \
    rd.zfcp=0.0.5677,0x600606680g7f0056,0x034F000000000000 \
    zfcp.allow_lun_scan=0
    ```

    where:


`coreos.inst.ignition_url`
:   Specifies the location of the Ignition config file. Use `master.ign` or `worker.ign`. Only HTTP and HTTPS protocols are supported.

`coreos.live.rootfs_url`
:   Specifies the location of the `rootfs` artifact for the `kernel` and `initramfs` you are booting. Only HTTP and HTTPS protocols are supported.

{%- endif %}


:::note

Write all options in the parameter file as a single line and make sure you have no newline characters.

:::


{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}