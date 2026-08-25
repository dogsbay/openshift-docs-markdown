{%- set _mod_docs_content_type = "PROCEDURE" %}
# Optional: Creating a separate `/var` partition {id="installation-disk-partitioning-upi-templates_{{ context }}"}

To isolate growing storage for containers, etcd, or logs, you can optionally create a separate `/var` partition on worker nodes before you generate Ignition configs. {._abstract}

It is recommended that disk partitioning for {{ product_title }} be left to the installation program. However, there are cases where you might want to create separate partitions in a part of the filesystem that you expect to grow.

{{ product_title }} supports the addition of a single partition to attach storage to either the `/var` partition or a subdirectory of `/var`. For example:

*   `/var/lib/containers`: Holds container-related content that can grow as more images and containers are added to a system.
*   `/var/lib/etcd`: Holds data that you might want to keep separate for purposes such as performance optimization of etcd storage.
*   `/var`: Holds data that you might want to keep separate for purposes such as auditing.

Storing the contents of a `/var` directory separately makes it easier to grow storage for those areas as needed and reinstall {{ product_title }} at a later date and keep that data intact. With this method, you will not have to pull all your containers again, nor will you have to copy massive log files when you update systems.

Because `/var` must be in place before a fresh installation of {{ op_system_first }}, the following procedure sets up the separate `/var` partition by creating a machine config manifest that is inserted during the `openshift-install` preparation phases of an {{ product_title }} installation.


:::important

If you follow the steps to create a separate `/var` partition in this procedure, it is not necessary to create the Kubernetes manifest and Ignition config files again as described later in this section.

:::


**Procedure**

1.  Create a directory to hold the {{ product_title }} installation files:
    ```terminal
    $ mkdir $HOME/clusterconfig
    ```
1.  Run `openshift-install` to create a set of files in the `manifest` and `openshift` subdirectories. Answer the system questions as you are prompted:
    ```terminal
    $ openshift-install create manifests --dir $HOME/clusterconfig
    ```

    ```terminal title="Example output"
    ? SSH Public Key ...
    INFO Credentials loaded from the "myprofile" profile in file "/home/myuser/.aws/credentials"
    INFO Consuming Install Config from target directory
    INFO Manifests created in: $HOME/clusterconfig/manifests and $HOME/clusterconfig/openshift
    ```
1.  Optional: Confirm that the installation program created manifests in the `clusterconfig/openshift` directory:
    ```terminal
    $ ls $HOME/clusterconfig/openshift/
    ```

    ```terminal title="Example output"
    99_kubeadmin-password-secret.yaml
    99_openshift-cluster-api_master-machines-0.yaml
    99_openshift-cluster-api_master-machines-1.yaml
    99_openshift-cluster-api_master-machines-2.yaml
    ...
    ```
1.  Create a Butane config that configures the additional partition. For example, name the file `$HOME/clusterconfig/98-var-partition.bu`, change the disk device name to the name of the storage device on the `worker` systems, and set the storage size as appropriate. This example places the `/var` directory on a separate partition:
    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 98-var-partition
    storage:
      disks:
      - device: /dev/disk/by-id/<device_name>
        partitions:
        - label: var
          start_mib: <partition_start_offset>
          size_mib: <partition_size>
          number: 5
      filesystems:
        - device: /dev/disk/by-partlabel/var
          path: /var
          format: xfs
          mount_options: [defaults, prjquota]
          with_mount_unit: true
    ```

    where:

    `<device_name>`
    :   Specifies the storage device name of the disk that you want to partition.

    `<partition_start_offset>`
    :   Specifies the `start_mib` parameter. When adding a data partition to the boot disk, a minimum value of 25000 MiB (Mebibytes) is recommended. The root file system is automatically resized to fill all available space up to the specified offset. If no value is specified, or if the specified value is smaller than the recommended minimum, the resulting root file system will be too small, and future reinstalls of {{ op_system }} might overwrite the beginning of the data partition.

    `<partition_size>`
    :   Specifies the size of the data partition in mebibytes.

    `storage.filesystems.mount_options`
    :   The `prjquota` mount option must be enabled for filesystems used for container storage.

    :::note

    When creating a separate `/var` partition, you cannot use different instance types for worker nodes, if the different instance types do not have the same device name.
    
    :::


1.  Create a manifest from the Butane config and save it to the `clusterconfig/openshift` directory. For example, run the following command:
    ```terminal
    $ butane $HOME/clusterconfig/98-var-partition.bu -o $HOME/clusterconfig/openshift/98-var-partition.yaml
    ```
1.  Run `openshift-install` again to create Ignition configs from a set of files in the `manifest` and `openshift` subdirectories:
    ```terminal
    $ openshift-install create ignition-configs --dir $HOME/clusterconfig
    ```
    ```terminal
    $ ls $HOME/clusterconfig/
    auth  bootstrap.ign  master.ign  metadata.json  worker.ign
    ```

    You can now use the Ignition config files as input to the installation procedures to install {{ op_system_first }} systems.