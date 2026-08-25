{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating {{ op_system }} machines using `virt-install` {id="machine-user-infra-machines-ibm-z-kvm_{{ context }}"}

You can create more {{ op_system_first }} compute machines for your cluster by using `virt-install`. {._abstract}

**Prerequisites**

*   You have at least one LPAR running on {{ op_system_base }} 8.7 or later with KVM, referred to as {{ op_system_base }} KVM host in this procedure.
*   The KVM/QEMU hypervisor is installed on the {{ op_system_base }} KVM host.
*   You have a domain name server (DNS) that can perform hostname and reverse lookup for the nodes.
*   An HTTP or HTTPS server is set up.

**Procedure**

1.  Extract the Ignition config file from the cluster by running the following command:
    ```terminal
    $ oc extract -n openshift-machine-api secret/worker-user-data-managed --keys=userData --to=- > worker.ign
    ```
1.  Upload the `worker.ign` Ignition config file you exported from your cluster to your HTTP server. Note the URL of this file.
1.  You can validate that the Ignition file is available on the URL. The following example gets the Ignition config file for the compute node:
    ```terminal
    $ curl -k http://<HTTP_server>/worker.ign
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
1.  Move the downloaded {{ op_system_base }} live `kernel`, `initramfs`, and `rootfs` files to an HTTP or HTTPS server before you launch `virt-install`.
1.  Create the new KVM guest nodes using the {{ op_system_base }} `kernel`, `initramfs`, and Ignition files; the new disk image; and adjusted parm line arguments.
    ```terminal
    $ virt-install \
       --connect qemu:///system \
       --name <vm_name> \
       --autostart \
       --os-variant rhel9.4 \
       --cpu host \
       --vcpus <vcpus> \
       --memory <memory_mb> \
       --disk <vm_name>.qcow2,size=<image_size> \
       --network network=<virt_network_parm> \
       --location <media_location>,kernel=<rhcos_kernel>,initrd=<rhcos_initrd> \
       --extra-args "rd.neednet=1" \
       --extra-args "coreos.inst.install_dev=/dev/vda" \
       --extra-args "coreos.inst.ignition_url=http://<http_server>/worker.ign " \
       --extra-args "coreos.live.rootfs_url=http://<http_server>/rhcos-<version>-live-rootfs.<architecture>.img" \
       --extra-args "ip=<ip>::<gateway>:<netmask>:<hostname>::none" \
       --extra-args "nameserver=<dns>" \
       --extra-args "console=ttysclp0" \
       --noautoconsole \
       --wait
    ```

    where:

    `os-variant`
    :   Specifies the {{ op_system_base }} version for the {{ op_system }} compute machine. `rhel9.4` is the recommended version. To query the supported {{ op_system_base }} version of your operating system, run the following command:
    ```terminal
    $ osinfo-query os -f short-id
    ```

    :::note

    The `os-variant` is case sensitive.
    
    :::


    `location`
    :   Specifies the location of the kernel/initrd on the HTTP or HTTPS server.

    `coreos.inst.ignition_url`
    :   Specifies the location of the `worker.ign` config file. Only HTTP and HTTPS protocols are supported.

    `coreos.live.rootfs_url`
    :   Specifies the location of the `rootfs` artifact for the `kernel` and `initramfs` you are booting. Only HTTP and HTTPS protocols are supported

    `hostname`
    :   Optional parameter. Specifies the fully qualified hostname of the client machine.

    :::note

    If you are using HAProxy as a load balancer, update your HAProxy rules for `ingress-router-443` and `ingress-router-80` in the `/etc/haproxy/haproxy.cfg` configuration file.
    
    :::


1.  Continue to create more compute machines for your cluster.