{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ sno }} with {{ op_system_base }} KVM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="installing-sno-on-ibm-z-kvm_{{ context }}"}

You can install {{ sno }} with with {{ op_system_base }} KVM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}. {._abstract}

**Prerequisites**

*   You  have installed `podman`.

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
1.  Obtain the {{ op_system_base }} `kernel`, `initramfs`, and `rootfs` artifacts from the [Product Downloads](https://access.redhat.com/downloads/content/290) page on the Red Hat Customer Portal or from the [{{ op_system }} image mirror](https://mirror.openshift.com/pub/openshift-v4/s390x/dependencies/rhcos/latest/) page.

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
1.  Before you launch `virt-install`, move the following files and artifacts to an HTTP or HTTPS server:
    *   Downloaded {{ op_system_base }} live `kernel`, `initramfs`, and `rootfs` artifacts
    *   Ignition files
1.  Create the KVM guest nodes by using the following components:
    *   {{ op_system_base }} `kernel` and `initramfs` artifacts
    *   Ignition files
    *   The new disk image
    *   Adjusted parm line arguments
    ```terminal
    $ virt-install \
       --name <vm_name> \
       --autostart \
       --memory=<memory_mb> \
       --cpu host \
       --vcpus <vcpus> \
       --location <media_location>,kernel=<rhcos_kernel>,initrd=<rhcos_initrd> \
       --disk size=100 \
       --network network=<virt_network_parm> \
       --graphics none \
       --noautoconsole \
       --extra-args "rd.neednet=1 ignition.platform.id=metal ignition.firstboot" \
       --extra-args "ignition.config.url=http://<http_server>/bootstrap.ign" \
       --extra-args "coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img" \
       --extra-args "ip=<ip>::<gateway>:<mask>:<hostname>::none" \
       --extra-args "nameserver=<dns>" \
       --extra-args "console=ttysclp0" \
       --wait
    ```
    *   For the `--location` parameter, specify the location of the kernel/initrd on the HTTP or HTTPS server.
    *   For the `ignition.config.url=` artifact, specify the location of the `bootstrap.ign` config file. Only HTTP and HTTPS protocols are supported.
    *   For the `coreos.live.rootfs_url=` artifact, specify the matching `rootfs` artifact for the `kernel` and `initramfs` you are booting. Only HTTP and HTTPS protocols are supported.
    *   For the `ip=` parameter, assign the IP address manually as described in "Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}".