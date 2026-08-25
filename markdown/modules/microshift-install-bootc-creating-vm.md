{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a virtual machine {id="microshift-install-bootc-creating-vm_{{ context }}"}

You can create a virtual machine by using the {{ op_system_base_full }} boot ISO image. {._abstract}

**Prerequisites**

*   You created the Kickstart file.
*   You installed the {{ oc_first }}.
*   You have `redhat` credentials.

**Procedure**

1.  Download the {{ op_system_base_full }} boot ISO image from the [Download Red&#160;Hat Enterprise Linux](https://developers.redhat.com/products/rhel/download).
1.  Copy the downloaded file to the `/var/lib/libvirt/images` directory.
1.  Configure the VMNAME environment variable with your value by running the following command:
    ```terminal {minja}
    $ VMNAME=microshift-{{ product_version }}-bootc
    ```
1.  Configure the NETNAME environment variable with your value by running the following command:
    ```terminal
    $ NETNAME=default
    ```
1.  Create a {{ op_system_base }} virtual machine with 2 cores, 2GB of RAM and 20GB of storage by running the following command:
    ```terminal {minja}
    $ sudo virt-install \
        --name ${{ VMNAME }} \
        --vcpus 2 \
        --memory 2048 \
        --disk path=/var/lib/libvirt/images/${{ VMNAME }}.qcow2,size=20 \
        --network network=${{ NETNAME }},model=virtio \
        --events on_reboot=restart \
        --location /var/lib/libvirt/images/rhel-{{ op_system_version }}-$(uname -m)-boot.iso \
        --initrd-inject kickstart.ks \
        --extra-args "inst.ks=file://kickstart.ks" \
        --wait
    ```

    :::note

    The `sudo virt-install` command uses the Kickstart file to pull a bootc image from the remote registry and install the {{ op_system_base }} operating system.
    
    :::

1.  Log in to the virtual machine by using your `redhat` credentials.

**Verification**

1.  Verify that all of the {{ microshift_short }} pods are running without error by entering the following command:
    ```terminal
    $ watch sudo oc get pods -A \
        --kubeconfig /var/lib/microshift/resources/kubeadmin/kubeconfig
    ```
    ```text title="Example output"
    NAMESPACE                  NAME                                       READY   STATUS    RESTARTS      AGE
    kube-system                csi-snapshot-controller-7cfb9df49c-kc9dx   1/1     Running   0             31s
    openshift-dns              dns-default-rpnlt                          2/2     Running   0             14s
    openshift-dns              node-resolver-rxvdk                        1/1     Running   0             31s
    openshift-ingress          router-default-69cd7b5545-7zcw7            1/1     Running   0             29s
    openshift-ovn-kubernetes   ovnkube-master-c7hlh                       4/4     Running   1 (16s ago)   31s
    openshift-ovn-kubernetes   ovnkube-node-mkpht                         1/1     Running   1 (17s ago)   31s
    openshift-service-ca       service-ca-5d5d96459d-5pd5s                1/1     Running   0             28s
    openshift-storage          topolvm-controller-677cbfcdb9-28dqr        5/5     Running   0             31s
    openshift-storage          topolvm-node-6fzbl                         3/3     Running   0             14s
    ```