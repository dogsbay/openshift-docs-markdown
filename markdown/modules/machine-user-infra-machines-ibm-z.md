{%- if context == "creating-multi-arch-compute-nodes-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "creating-multi-arch-compute-nodes-ibm-z-lpar" %}
{%- set ibm_z_lpar = true -%}
{% endif %}
{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if ibm_z %}
# Creating {{ op_system }} machines on {{ ibm_z_title }} with z/VM {id="machine-user-infra-machines-ibm-z_{{ context }}"}

You can create more {{ op_system_first }} compute machines running on {{ ibm_z_name }} with z/VM and attach them to your existing cluster.
{% endif %}
{% if ibm_z_lpar %}
= Creating {{ op_system }} machines on {{ ibm_z_title }} in an LPAR {._abstract}

You can create more {{ op_system_first }} compute machines running on {{ ibm_z_name }} in a logical partition (LPAR) and attach them to your existing cluster.
{% endif %} {._abstract}

**Prerequisites**

*   You have a domain name server (DNS) that can perform hostname and reverse lookup for the nodes.
*   You have an HTTP or HTTPS server running on your provisioning machine that is accessible to the machines you create.

**Procedure**

1.  Extract the Ignition config file from the cluster by running the following command:
    ```terminal
    $ oc extract -n openshift-machine-api secret/worker-user-data-managed --keys=userData --to=- > worker.ign
    ```
1.  Upload the `worker.ign` Ignition config file you exported from your cluster to your HTTP server. Note the URL of this file.
1.  Validate that the Ignition file is available on the URL. The following example gets the Ignition config file for the compute node:
    ```terminal
    $ curl -k http://<http_server>/worker.ign
    ```
1.  Download the {{ op_system_base }} live `kernel`, `initramfs`, and `rootfs` files by running the following commands:
    ```terminal
    $ curl -LO $(oc -n openshift-machine-config-operator get configmap/coreos-bootimages -o jsonpath='{.data.stream}' \
    | jq -r '.architectures.s390x.artifacts.metal.formats.pxe.kernel.location')
    ```
    ```terminal
    $ curl -LO $(oc -n openshift-machine-config-operator get configmap/coreos-bootimages -o jsonpath='{.data.stream}' \
    | jq -r '.architectures.s390x.artifacts.metal.formats.pxe.initramfs.location')
    ```
    ```terminal
    $ curl -LO $(oc -n openshift-machine-config-operator get configmap/coreos-bootimages -o jsonpath='{.data.stream}' \
    | jq -r '.architectures.s390x.artifacts.metal.formats.pxe.rootfs.location')
    ```
1.  Move the downloaded {{ op_system_base }} live `kernel`, `initramfs`, and `rootfs` files to an HTTP or HTTPS server that is accessible from the {{ op_system }} guest you want to add.
1.  Create a parameter file for the guest. The following parameters are specific to the virtual machine:
    *   Optional: To specify a static IP address, add an `ip=` parameter with the following entries, with each separated by a colon:
        1.  The IP address for the machine.
        1.  An empty string.
        1.  The gateway.
        1.  The netmask.
        1.  The machine host and domain name in the form `hostname.domainname`. If you omit this value, {{ op_system }} obtains the hostname through a reverse DNS lookup.
        1.  The network interface name. If you omit this value, {{ op_system }} applies the IP configuration to all available interfaces.
        1.  The value `none`.
    *   For `coreos.inst.ignition_url=`, specify the URL to the `worker.ign` file. Only HTTP and HTTPS protocols are supported.
    *   For `coreos.live.rootfs_url=`, specify the matching rootfs artifact for the `kernel` and `initramfs` you are booting. Only HTTP and HTTPS protocols are supported.
    *   For installations on DASD-type disks, complete the following tasks:
        1.  For `coreos.inst.install_dev=`, specify `/dev/dasda`.
        1.  Use `rd.dasd=` to specify the DASD where {{ op_system }} is to be installed.
        1.  You can adjust further parameters if required.

            The following is an example parameter file, `additional-worker-dasd.parm`:
            ```terminal
            cio_ignore=all,!condev rd.neednet=1 \
            console=ttysclp0 \
            coreos.inst.install_dev=/dev/dasda \
            coreos.inst.ignition_url=http://<http_server>/worker.ign \
            coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
            ip=<ip>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
            rd.znet=qeth,0.0.bdf0,0.0.bdf1,0.0.bdf2,layer2=1,portno=0 \
            rd.dasd=0.0.3490 \
            zfcp.allow_lun_scan=0
            ```

            Write all options in the parameter file as a single line and make sure that you have no newline characters.
    *   For installations on FCP-type disks, complete the following tasks:
        1.  Use `rd.zfcp=<adapter>,<wwpn>,<lun>` to specify the FCP disk where {{ op_system }} is to be installed. For multipathing, repeat this step for each additional path.

            :::note

            When you install with multiple paths, you must enable multipathing directly after the installation. Enabling multipathing much later can cause problems for your cluster.
            
            :::

        1.  Set the install device as: `coreos.inst.install_dev=/dev/sda`.

            :::note

            If additional LUNs are configured with NPIV, FCP requires `zfcp.allow_lun_scan=0`. If you must enable `zfcp.allow_lun_scan=1` because you use a CSI driver, for example, you must configure your NPIV so that each node cannot access the boot partition of another node.
            
            :::

        1.  You can adjust further parameters if required.

            :::important

            Additional postinstallation steps are required to fully enable multipathing. For more information, see “Enabling multipathing with kernel arguments on {{ op_system }}" in _Machine configuration_.
            
            :::


            The following is an example parameter file, `additional-worker-fcp.parm` for a worker node with multipathing:
            ```terminal
            cio_ignore=all,!condev rd.neednet=1 \
            console=ttysclp0 \
            coreos.inst.install_dev=/dev/sda \
            coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
            coreos.inst.ignition_url=http://<http_server>/worker.ign \
            ip=<ip>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
            rd.znet=qeth,0.0.bdf0,0.0.bdf1,0.0.bdf2,layer2=1,portno=0 \
            zfcp.allow_lun_scan=0 \
            rd.zfcp=0.0.1987,0x50050763070bc5e3,0x4008400B00000000 \
            rd.zfcp=0.0.19C7,0x50050763070bc5e3,0x4008400B00000000 \
            rd.zfcp=0.0.1987,0x50050763071bc5e3,0x4008400B00000000 \
            rd.zfcp=0.0.19C7,0x50050763071bc5e3,0x4008400B00000000
            ```

            Write all options in the parameter file as a single line and make sure that you have no newline characters.

{% if ibm_z %}
1.  Transfer the `initramfs`, `kernel`, parameter files, and {{ op_system }} images to z/VM, for example, by using FTP. For details about how to transfer the files with FTP and boot from the virtual reader, see [Booting the installation on {{ ibm_z_name }} to install {{ op_system_base }} in z/VM](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html-single/interactively_installing_rhel_over_the_network/index#installing-under-z-vm_booting-the-installation-media).
1.  Punch the files to the virtual reader of the z/VM guest virtual machine.

    See [PUNCH](https://www.ibm.com/docs/en/zvm/latest?topic=commands-punch) in {{ ibm_name }} Documentation.

    :::tip

    You can use the CP PUNCH command or, if you use Linux, the `vmur` command to transfer files between two z/VM guest virtual machines.
    
    :::

1.  Log in to CMS on the bootstrap machine.
1.  IPL the bootstrap machine from the reader by running the following command:
    ```terminal
    $ ipl c
    ```

    See [IPL](https://www.ibm.com/docs/en/zvm/latest?topic=commands-ipl) in {{ ibm_name }} Documentation.
{% endif %}

{% if ibm_z_lpar %}
1.  As an example for FTP, transfer the initramfs, kernel, parameter files, and {{ op_system }} images to the LPAR. For details about how to transfer the files with FTP and boot, see [Booting the installation on {{ ibm_z_name }} to install {{ op_system_base }} in an LPAR](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html-single/interactively_installing_rhel_over_the_network/index#installing-in-an-lpar_booting-the-installation-media).
1.  Boot the machine.
{% endif %}

{% if context == "creating-multi-arch-compute-nodes-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "creating-multi-arch-compute-nodes-ibm-z-lpar" %}
{%- set ibm_z_lpar = false -%}
{% endif %}