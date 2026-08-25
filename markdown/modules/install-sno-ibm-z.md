{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ sno }} with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="installing-sno-on-ibm-z_{{ context }}"}

You can install {{ sno }} with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}. {._abstract}

**Prerequisites**

*   You have installed `podman`.

**Procedure**

1.  Set the {{ product_title }} version by running the following command:
    ```terminal
    $ OCP_VERSION=<ocp_version>
    ```

    Replace `<ocp_version>` with the current version. For example, `latest-{{ product_version }}`{minja}.
1.  Set the host architecture by running the following command:
    ```terminal
    $ ARCH=<architecture>
    ```

    Replace `<architecture>` with the target host architecture `s390x`.
1.  Download the {{ product_title }} client (`oc`) and make it available for use by entering the following commands:
    ```terminal
    $ curl -k https://mirror.openshift.com/pub/openshift-v4/${ARCH}/clients/ocp/${OCP_VERSION}/openshift-client-linux.tar.gz -o oc.tar.gz
    ```
    ```terminal
    $ tar zxf oc.tar.gz
    ```
    ```terminal
    $ chmod +x oc
    ```
1.  Download the {{ product_title }} installer and make it available for use by entering the following commands:
    ```terminal
    $ curl -k https://mirror.openshift.com/pub/openshift-v4/${ARCH}/clients/ocp/${OCP_VERSION}/openshift-install-linux.tar.gz -o openshift-install-linux.tar.gz
    ```
    ```terminal
    $ tar zxvf openshift-install-linux.tar.gz
    ```
    ```terminal
    $ chmod +x openshift-install
    ```
1.  Prepare the `install-config.yaml` file:
    ```yaml
    apiVersion: v1
    baseDomain: <domain>
    compute:
    - name: worker
      replicas: 0
    controlPlane:
      name: master
      replicas: 1
    metadata:
      name: <name>
    networking:
      clusterNetwork:
      - cidr: 10.128.0.0/14
        hostPrefix: 23
      machineNetwork:
      - cidr: 10.0.0.0/16
      networkType: OVNKubernetes
      serviceNetwork:
      - 172.30.0.0/16
    platform:
      none: {}
    bootstrapInPlace:
      installationDisk: /dev/disk/by-id/<disk_id>
    pullSecret: '<pull_secret>'
    sshKey: |
      <ssh_key>
    ```

    where:

    `baseDomain`
    :   Specifies the cluster domain name.

    `compute.replicas`
    :   Specifies the `compute` replicas to `0`. This makes the control plane node schedulable.

    `controlPlane.replicas`
    :   Specifies the `controlPlane` replicas to `1`. In conjunction with the previous `compute` setting, this setting ensures the cluster runs on a single node.

    `metadata.name`
    :   Specifies the cluster name.

    `networking`
    :   Specifies the `networking` details. OVN-Kubernetes is the only allowed network plugin type for single-node clusters.

    `machineNetwork.cidr`
    :   Specifies the `cidr` value to match the subnet of the {{ sno }} cluster.

    `bootstrapInPlace.installationDisk`
    :   Specifies the path to the installation disk drive, for example, `/dev/disk/by-id/wwn-0x64cd98f04fde100024684cf3034da5c2`.

    `pullSecret`
    :   Specifies the `pullSecret` parameter. Copy the {{ cluster_manager_url_pull }} and add the contents to this configuration setting.

    `sshKey`
    :   Specifies the `sshKey` parameter. Add the public SSH key from the administration host so that you can log in to the cluster after installation.

1.  Generate {{ product_title }} assets by running the following commands:
    ```terminal
    $ mkdir ocp
    ```
    ```terminal
    $ cp install-config.yaml ocp
    ```
    ```terminal
    $ ./openshift-install --dir=ocp create single-node-ignition-config
    ```
1.  Obtain the {{ op_system_base }} `kernel`, `initramfs`, and `rootfs`  artifacts from the [Product Downloads](https://access.redhat.com/downloads/content/290) page on the Red Hat Customer Portal or from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/s390x/dependencies/rhcos/latest/) page.

    :::important

    The {{ op_system }} images might not change with every release of {{ product_title }}. You must download images with the highest version that is less than or equal to the {{ product_title }} version that you install. Only use the appropriate `kernel`, `initramfs`, and `rootfs` artifacts described in the following procedure.
    
    :::


    The file names contain the {{ product_title }} version number. They resemble the following examples:

    `kernel`
    :   `rhcos-<version>-live-kernel-<architecture>`

    `initramfs`
    :   `rhcos-<version>-live-initramfs.<architecture>.img`

    `rootfs`
    :   `rhcos-<version>-live-rootfs.<architecture>.img`

    :::note

    The `rootfs` image is the same for FCP and DASD.
    
    :::


1.  Move the following artifacts and files to an HTTP or HTTPS server:
    *   Downloaded {{ op_system_base }} live `kernel`, `initramfs`, and `rootfs` artifacts
    *   Ignition files
1.  Create parameter files for a particular virtual machine:
    ```terminal title="Example parameter file"
    cio_ignore=all,!condev rd.neednet=1 \
    console=ttysclp0 \
    ignition.firstboot ignition.platform.id=metal \
    ignition.config.url=http://<http_server>:8080/ignition/bootstrap-in-place-for-live-iso.ign \
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    ip=<ip>::<gateway>:<mask>:<hostname>::none nameserver=<dns> \
    rd.znet=qeth,0.0.bdd0,0.0.bdd1,0.0.bdd2,layer2=1 \
    rd.dasd=0.0.4411 \
    rd.zfcp=0.0.8001,0x50050763040051e3,0x4000406300000000 \
    zfcp.allow_lun_scan=0
    ```
    *   For the `ignition.config.url=` parameter, specify the Ignition file for the machine role. Only HTTP and HTTPS protocols are supported.
    *   For the `coreos.live.rootfs_url=` artifact, specify the matching `rootfs` artifact for the `kernel`and `initramfs` you are booting. Only HTTP and HTTPS protocols are supported.
    *   For the `ip=` parameter, assign the IP address automatically using DHCP or manually as described in "Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}".
    *   For installations on DASD-type disks, use `rd.dasd=` to specify the DASD where {{ op_system }} is to be installed. Omit this entry for FCP-type disks.
    *   For installations on FCP-type disks, use `rd.zfcp=<adapter>,<wwpn>,<lun>` to specify the FCP disk where {{ op_system }} is to be installed. Omit this entry for DASD-type disks.

    Leave all other parameters unchanged.
1.  Transfer the following artifacts, files, and images to z/VM. For example by using FTP:
    *   `kernel` and `initramfs` artifacts
    *   Parameter files
    *   {{ op_system }} images

        For details about how to transfer the files with FTP and boot from the virtual reader, see [Installing under Z/VM](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-installing-zvm-s390).
1.  Punch the files to the virtual reader of the z/VM guest virtual machine that is to become your bootstrap node.
1.  Log in to CMS on the bootstrap machine.
1.  IPL the bootstrap machine from the reader by running the following command:
    ```
    $ cp ipl c
    ```
1.  After the first reboot of the virtual machine, run the following commands directly after one another:
    1.  To boot a DASD device after first reboot, run the following commands:
        ```terminal
        $ cp i <devno> clear loadparm prompt
        ```

        Replace `<devno>` with the device number of the boot device as seen by the guest.

        ```terminal
        $ cp vi vmsg 0 <kernel_parameters>
        ```

        Replace `<kernel_parameters>` with a set of kernel parameters to be stored as system control program data (SCPDATA). When booting Linux, these kernel parameters are concatenated to the end of the existing kernel parameters that are used by your boot configuration. The combined parameter string must not exceed 896 characters.
    1.  To boot an FCP device after first reboot, run the following commands:
        ```terminal
        $ cp set loaddev portname <wwpn> lun <lun>
        ```

        Replace `<wwpn>` with the target port and `<lun>` with the logical unit in hexadecimal format.

        ```terminal
        $ cp set loaddev bootprog <n>
        ```

        Replace `<n>` with the kernel to be booted.

        ```terminal
        $ cp set loaddev scpdata {APPEND|NEW} '<kernel_parameters>'
        ```

        where:


        `<kernel_parameters>`
        :   Specifies a set of kernel parameters to be stored as system control program data (SCPDATA). When booting Linux, these kernel parameters are concatenated to the end of the existing kernel parameters that are used by your boot configuration. The combined parameter string must not exceed 896 characters.


        `<APPEND|NEW>`
        :   Optional: Specify `APPEND` to append kernel parameters to existing SCPDATA. This is the default. Specify `NEW` to replace existing SCPDATA.

            ```terminal title="Example"
            $ cp set loaddev scpdata 'rd.zfcp=0.0.8001,0x500507630a0350a4,0x4000409D00000000
            ip=encbdd0:dhcp::02:00:00:02:34:02 rd.neednet=1'
            ```


            To start the IPL and boot process, run the following command:

            ```terminal
            $ cp i <devno>
            ```


            Replace `<devno>` with the device number of the boot device as seen by the guest.