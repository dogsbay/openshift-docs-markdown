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
# LUKS encryption via CEX in an {{ ibm_z_title }} or {{ ibm_linuxone_title }} environment {id="configuring-luks-encryption-via-cex-ibm-z-linuxone-environment_{{ context }}"}

Enabling hardware-based Linux Unified Key Setup (LUKS) encryption via {{ ibm_name }} Crypto Express (CEX) in an {{ ibm_z_name }} or {{ ibm_linuxone_name }} environment requires additional steps. {._abstract}

**Prerequisites**

*   You have installed the `butane` utility.
*   You have reviewed the instructions for how to create machine configs with Butane.

**Procedure**

{% if ibm_z_kvm %}
1.  Create Butane configuration files for the control plane and compute nodes:
    *   Create a file named `main-storage.bu` by using the following Butane configuration for a control plane node with disk encryption, for example:
        ```yaml {minja}
        variant: openshift
        version: {{ product_version }}.0
        metadata:
          name: main-storage
          labels:
            machineconfiguration.openshift.io/role: master
        boot_device:
          layout: s390x-virt
          luks:
            cex:
              enabled: true
        openshift:
          fips: true
          kernel_arguments:
            - rd.luks.key=/etc/luks/cex.key
        ```

        where:

        `openshift.fips`
        :   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

        `openshift.kernel_arguments`
        :   Specifies the location of the key that is required to decrypt the device. You cannot change this value.
{% endif %}
{% if not ibm_z_kvm %}
        . Choose the appropriate method to create Butane configuration files for the control plane and compute nodes:
        ** For installations on DASD-type disks, create a file named `main-storage.bu` by using the following Butane configuration for a control plane node with disk encryption, for example:
        +
        ```yaml {minja}
        variant: openshift
        version: {{ product_version }}.0
        metadata:
          name: main-storage
          labels:
            machineconfiguration.openshift.io/role: master
        boot_device:
          layout: s390x-eckd
          luks:
            device: /dev/dasda
            cex:
              enabled: true
        openshift:
          fips: true
          kernel_arguments:
            - rd.luks.key=/etc/luks/cex.key
        ```
       \
        where:


`openshift.fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

`openshift.kernel_arguments`
:   Specifies the location of the key that is required to decrypt the device. You cannot change this value.
    *   For installations on FCP-type disks, create a file named `main-storage.bu` by using the following Butane configuration for a control plane node with disk encryption, for example:
    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: main-storage
      labels:
        machineconfiguration.openshift.io/role: master
    storage:
      filesystems:
        - device: /dev/mapper/root
          format: xfs
          label: root
          wipe_filesystem: true
      luks:
        - device: /dev/disk/by-label/root
          label: luks-root
          name: root
          wipe_volume: true
          cex:
            enabled: true
    openshift:
      fips: true
      kernel_arguments:
        - rd.luks.key=/etc/luks/cex.key
    ```

    where:

`openshift.fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.

`openshift.kernel_arguments`
:   Specifies the location of the key that is required to decrypt the device. You cannot change this value.
{% endif %}

1.  Create a parameter file that includes `ignition.platform.id=metal` and `ignition.firstboot`.

    **Example kernel parameter file for the control plane machine**

{% if ibm_z_kvm %}
    ```terminal
    cio_ignore=all,!condev rd.neednet=1 \
    console=ttysclp0 \
    ignition.firstboot ignition.platform.id=metal \
    coreos.inst.ignition_url=http://<http_server>/master.ign \
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    ip=<ip_address>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
    rd.znet=qeth,0.0.bdd0,0.0.bdd1,0.0.bdd2,layer2=1 \
    rd.zfcp=0.0.5677,0x600606680g7f0056,0x034F000000000000
    ```

    where:

    `coreos.inst.ignition_url`
    :   Specifies the location of the Ignition configuration file. Use `master.ign` or `worker.ign`. You can only use the HTTP and HTTPS protocols.

    `coreos.live.rootfs_url`
    :   Specifies the location of the `rootfs` artifact for the `kernel` and `initramfs` that you want to boot. You can only use the HTTP and HTTPS protocols.
{% endif %}
{% if not ibm_z_kvm %}
    ```terminal
    cio_ignore=all,!condev rd.neednet=1 \
    console=ttysclp0 \
    coreos.inst.install_dev=/dev/disk/by-id/scsi-<serial_number> \
    ignition.firstboot ignition.platform.id=metal \
    coreos.inst.ignition_url=http://<http_server>/master.ign \
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    ip=<ip_address>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
    rd.znet=qeth,0.0.bdd0,0.0.bdd1,0.0.bdd2,layer2=1 \
    rd.zfcp=0.0.5677,0x600606680g7f0056,0x034F000000000000
    ```

    where:

    `coreos.inst.install_dev`
    :   Specifies a unique fully qualified path depending on disk type. This can be DASD-type or FCP-type disks.

    `coreos.inst.ignition_url`
    :   Specifies the location of the Ignition configuration file. Use `master.ign` or `worker.ign`. You can only use the HTTP and HTTPS protocols.

    `coreos.live.rootfs_url`
    :   Specifies the location of the `rootfs` artifact for the `kernel` and `initramfs` that you want to boot. You can only use the HTTP and HTTPS protocols.

    `rd.zfcp`
    :   Specifies the FCP device. For installations on DASD-type disks, replace with `rd.dasd=0.0.xxxx` to specify the DASD device.
{% endif %}

    :::note

    Write all options in the parameter file as a single line and make sure you have no newline characters.
    
    :::


{% if context == "installing-ibm-z" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = "" -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z_lpar = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z_lpar = "" -%}
{% endif %}