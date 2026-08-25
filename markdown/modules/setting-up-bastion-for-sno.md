{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up bastion for {{ sno }} with {{ ibm_power_title }} {id="setting-up-bastion-for-sno_{{ context }}"}

Before installing {{ sno }} on {{ ibm_power_name }}, you must set up bastion. {._abstract}

Setting up a bastion server for {{ sno }} on {{ ibm_power_name }} requires the configuration of the following services:

*   PXE is used for the {{ sno }} cluster installation. PXE requires the following services to be configured and run:
    *   DNS to define api, api-int, and *.apps
    *   DHCP service to enable PXE and assign an IP address to {{ sno }} node
    *   HTTP to provide ignition and {{ op_system }} rootfs image
    *   TFTP to enable PXE
*   You must install `dnsmasq` to support DNS, DHCP and PXE, httpd for HTTP.

Use the following procedure to configure a bastion server that meets these requirements.

**Procedure**

1.  Use the following command to install `grub2`, which is required to enable PXE for PowerVM:
    ```terminal
    grub2-mknetdir --net-directory=/var/lib/tftpboot
    ```
    ```terminal title="Example /var/lib/tftpboot/boot/grub2/grub.cfg file"
    default=0
    fallback=1
    timeout=1
    if [ ${net_default_mac} == fa:b0:45:27:43:20 ]; then
    menuentry "CoreOS (BIOS)" {
       echo "Loading kernel"
       linux "/rhcos/kernel" ip=dhcp rd.neednet=1 ignition.platform.id=metal ignition.firstboot coreos.live.rootfs_url=http://192.168.10.5:8000/install/rootfs.img ignition.config.url=http://192.168.10.5:8000/ignition/sno.ign
       echo "Loading initrd"
       initrd  "/rhcos/initramfs.img"
    }
    fi
    ```
1.  Use the following commands to download {{ op_system }} image files from the mirror repo for PXE.
    1.  Enter the following command to assign the `RHCOS_URL` variable the follow 4.12 URL:
        ```terminal
        $ export RHCOS_URL=https://mirror.openshift.com/pub/openshift-v4/ppc64le/dependencies/rhcos/4.12/latest/
        ```
    1.  Enter the following command to navigate to the `/var/lib/tftpboot/rhcos` directory:
        ```terminal
        $ cd /var/lib/tftpboot/rhcos
        ```
    1.  Enter the following command to download the specified {{ op_system }} kernel file from the URL stored in the `RHCOS_URL` variable:
        ```terminal
        $ wget ${RHCOS_URL}/rhcos-live-kernel-ppc64le -o kernel
        ```
    1.  Enter the following command to download the {{ op_system }} `initramfs` file from the URL stored in the `RHCOS_URL` variable:
        ```terminal
        $ wget ${RHCOS_URL}/rhcos-live-initramfs.ppc64le.img -o initramfs.img
        ```
    1.  Enter the following command to navigate to the `/var//var/www/html/install/` directory:
        ```terminal
        $ cd /var//var/www/html/install/
        ```
    1.  Enter the following command to download, and save, the {{ op_system }} `root filesystem` image file from the URL stored in the `RHCOS_URL` variable:
        ```terminal
        $ wget ${RHCOS_URL}/rhcos-live-rootfs.ppc64le.img -o rootfs.img
        ```
1.  To create the ignition file for a {{ sno }} cluster, you must create the `install-config.yaml` file.
    1.  Enter the following command to create the work directory that holds the file:
        ```terminal
        $ mkdir -p ~/sno-work
        ```
    1.  Enter the following command to navigate to the `~/sno-work` directory:
        ```terminal
        $ cd ~/sno-work
        ```
    1.  Use the following sample file can to create the required `install-config.yaml` in the `~/sno-work` directory:
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

1.  Download the `openshift-install` image to create the ignition file and copy it to the `http` directory.
    1.  Enter the following command to download the `openshift-install-linux-4.12.0` .tar file:
        ```terminal
        $ wget https://mirror.openshift.com/pub/openshift-v4/ppc64le/clients/ocp/4.12.0/openshift-install-linux-4.12.0.tar.gz
        ```
    1.  Enter the following command to unpack the `openshift-install-linux-4.12.0.tar.gz` archive:
        ```terminal
        $ tar xzvf openshift-install-linux-4.12.0.tar.gz
        ```
    1.  Enter the following command to
        ```terminal
        $ ./openshift-install --dir=~/sno-work create create single-node-ignition-config
        ```
    1.  Enter the following command to create the ignition file:
        ```terminal
        $ cp ~/sno-work/single-node-ignition-config.ign /var/www/html/ignition/sno.ign
        ```
    1.  Enter the following command to restore SELinux file for the `/var/www/html` directory:
        ```terminal
        $ restorecon -vR /var/www/html || true
        ```

        Bastion now has all the required files and is properly configured in order to install {{ sno }}.