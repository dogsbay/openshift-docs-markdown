{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ sno }} in an LPAR on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="installing-sno-on-ibm-z-lpar_{{ context }}"}

You can install {{ sno }} in an LPAR on {{ ibm_z_title }} and {{ ibm_linuxone_title }}. {._abstract}

**Prerequisites**

*   If you are deploying a single-node cluster there are zero compute nodes, the Ingress Controller pods run on the control plane nodes. In single-node cluster deployments, you must configure your application ingress load balancer to route HTTP and HTTPS traffic to the control plane nodes. See the _Load balancing requirements for user-provisioned infrastructure_ section for more information.

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
    $ tar zxvf oc.tar.gz
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
1.  Change to the directory that contains the {{ product_title }} installation program and generate the Kubernetes manifests for the cluster:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```

    Replace `<installation_directory>` with the installation directory that contains the `install-config.yaml` file you created.
1.  Check that the `mastersSchedulable` parameter in the `<installation_directory>/manifests/cluster-scheduler-02-config.yml` Kubernetes manifest file is set to `true`.
    1.  Open the `<installation_directory>/manifests/cluster-scheduler-02-config.yml` file.
    1.  Locate the `mastersSchedulable` parameter and ensure that it is set to `true` as shown in the following `spec` stanza:
        ```yaml
        spec:
          mastersSchedulable: true
        status: {}
        ```
    1.  Save and exit the file.
1.  Create the Ignition configuration files by running the following command from the directory that contains the installation program:
    ```terminal
    $ ./openshift-install create ignition-configs --dir <installation_directory>
    ```

    Replace `<installation_directory>` with the same installation directory.
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
1.  Create a parameter file for the bootstrap in an LPAR:
    ```terminal title="Example parameter file for the bootstrap machine"
    cio_ignore=all,!condev rd.neednet=1 \
    console=ttysclp0 \
    coreos.inst.install_dev=/dev/<block_device> \
    coreos.inst.ignition_url=http://<http_server>/bootstrap.ign \
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    ip=<ip>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
    rd.znet=qeth,0.0.1140,0.0.1141,0.0.1142,layer2=1,portno=0 \
    rd.dasd=0.0.4411 \
    rd.zfcp=0.0.8001,0x50050763040051e3,0x4000406300000000 \
    zfcp.allow_lun_scan=0
    ```
    *   For the `coreos.inst.install_dev=` artifact, specify the block device on the system to install to. For installations on DASD-type disk use `dasda`, for installations on FCP-type disks use `sda`.
    *   For the `coreos.inst.ignition_url=` artifact, specify the location of the `bootstrap.ign` config file. Only HTTP and HTTPS protocols are supported.
    *   For the `coreos.live.rootfs_url=` artifact, specify the matching `rootfs` artifact for the `kernel`and `initramfs` you are booting. Only HTTP and HTTPS protocols are supported.
    *   For the `ip=` parameter, assign the IP address manually as described in "Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }}".
    *   For installations on DASD-type disks, use `rd.dasd=` to specify the DASD where {{ op_system }} is to be installed. Omit this entry for FCP-type disks.
    *   For installations on FCP-type disks, use `rd.zfcp=<adapter>,<wwpn>,<lun>` to specify the FCP disk where {{ op_system }} is to be installed. Omit this entry for DASD-type disks.

        You can adjust further parameters if required.
1.  Create a parameter file for the control plane in an LPAR:
    ```terminal title="Example parameter file for the control plane machine"
    cio_ignore=all,!condev rd.neednet=1 \
    console=ttysclp0 \
    coreos.inst.install_dev=/dev/<block_device> \
    coreos.inst.ignition_url=http://<http_server>/master.ign \
    coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img \
    ip=<ip>::<gateway>:<netmask>:<hostname>::none nameserver=<dns> \
    rd.znet=qeth,0.0.1140,0.0.1141,0.0.1142,layer2=1,portno=0 \
    rd.dasd=0.0.4411 \
    rd.zfcp=0.0.8001,0x50050763040051e3,0x4000406300000000 \
    zfcp.allow_lun_scan=0
    ```

    For the `coreos.inst.ignition_url=` artifact, specify the location of the `master.ign` config file. Only HTTP and HTTPS protocols are supported.
1.  Transfer the following artifacts, files, and images to the LPAR. For example by using FTP:
    *   `kernel` and `initramfs` artifacts
    *   Parameter files
    *   {{ op_system }} images

        For details about how to transfer the files with FTP and boot, see [Installing in an LPAR](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/performing_a_standard_rhel_9_installation/assembly_installing-on-64-bit-ibm-z_installing-rhel#installing-in-an-lpar_installing-in-an-lpar).
1.  Boot the bootstrap machine.
1.  Boot the control plane machine.