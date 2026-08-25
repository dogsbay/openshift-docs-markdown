{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning kernel modules by using a MachineConfig object {id="provision-kernel-modules-via-machineconfig_{{ context }}"}

Package kernel module software with a `MachineConfig` object to deliver that software to compute or control plane nodes at installation time or through the Machine Config Operator (MCO). {._abstract}

**Procedure**

1.  Register a {{ op_system_base }} 8 system:
    ```terminal
    # subscription-manager register
    ```
1.  Attach a subscription to the {{ op_system_base }} 8 system:
    ```terminal
    # subscription-manager attach --auto
    ```
1.  Install software needed to build the software:
    ```terminal
    # yum install podman make git -y
    ```
1.  Create a directory to host the kernel module and tooling:
    ```terminal
    $ mkdir kmods; cd kmods
    ```
1.  Get the `kmods-via-containers` software:
    1.  Clone the `kmods-via-containers` repository:
        ```terminal
        $ git clone https://github.com/kmods-via-containers/kmods-via-containers
        ```
    1.  Clone the `kvc-simple-kmod` repository:
        ```terminal
        $ git clone https://github.com/kmods-via-containers/kvc-simple-kmod
        ```
1.  Get your module software. In this example, `kvc-simple-kmod` is used.
1.  Create a fakeroot directory and populate it with files that you want to deliver through Ignition, using the repositories cloned earlier:
    1.  Create the directory:
        ```terminal
        $ FAKEROOT=$(mktemp -d)
        ```
    1.  Change to the `kmod-via-containers` directory:
        ```terminal
        $ cd kmods-via-containers
        ```
    1.  Install the KVC framework instance:
        ```terminal
        $ make install DESTDIR=${FAKEROOT}/usr/local CONFDIR=${FAKEROOT}/etc/
        ```
    1.  Change to the `kvc-simple-kmod` directory:
        ```terminal
        $ cd ../kvc-simple-kmod
        ```
    1.  Create the instance:
        ```terminal
        $ make install DESTDIR=${FAKEROOT}/usr/local CONFDIR=${FAKEROOT}/etc/
        ```
1.  Clone the fakeroot directory, replacing any symbolic links with copies of their targets, by running the following command:
    ```terminal
    $ cd .. && rm -rf kmod-tree && cp -Lpr ${FAKEROOT} kmod-tree
    ```
1.  Create a Butane config file, `99-simple-kmod.bu`, that embeds the kernel module tree and enables the systemd service.

    :::note

    See "Creating machine configs with Butane" for information about Butane.
    
    :::

    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 99-simple-kmod
      labels:
        machineconfiguration.openshift.io/role: worker
    storage:
      trees:
        - local: kmod-tree
    systemd:
      units:
        - name: kmods-via-containers@simple-kmod.service
          enabled: true
    ```

    `metadata.labels.machineconfiguration.openshift.io/role`: Specifies the node role. To deploy on control plane nodes, change `worker` to `master`. To deploy on both control plane and compute nodes, perform the remainder of these instructions once for each node type.
1.  Use Butane to generate a machine config YAML file, `99-simple-kmod.yaml`, containing the files and configuration to be delivered:
    ```terminal
    $ butane 99-simple-kmod.bu --files-dir . -o 99-simple-kmod.yaml
    ```
1.  If the cluster is not up yet, generate manifest files and add this file to the
`openshift` directory. If the cluster is already running, apply the file as follows:
    ```terminal
    $ oc create -f 99-simple-kmod.yaml
    ```

    Your nodes will start the `kmods-via-containers@simple-kmod.service` service and the kernel modules will be loaded.
1.  To confirm that the kernel modules are loaded, list the modules by running the following command:
    ```terminal
    $ lsmod | grep simple_
    ```
    ```terminal title="Example output"
    simple_procfs_kmod     16384  0
    simple_kmod            16384  0
    ```

    :::note

    You can log in to a node running the `oc debug node/<openshift-node>`command and then the `chroot /host` command.
    
    :::