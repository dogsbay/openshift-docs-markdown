{% if context == "installing-with-agent-based-installer" %}
{%- set agent = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if not agent %}
# Disk partitioning {id="installation-user-infra-machines-advanced-disk_{{ context }}"}

Disk partitions are created on {{ product_title }} cluster nodes during the {{ op_system_first }} installation. Each {{ op_system }} node of a particular architecture uses the same partition layout, unless you override the default partitioning configuration. {._abstract}

During the {{ op_system }} installation, the size of the root file system is increased to use any remaining available space on the target device.


:::important

The use of a custom partition scheme on your node might result in {{ product_title }} not monitoring or alerting on some node partitions. For more information on monitoring host file systems when using custom partitioning, see [Understanding OpenShift File System Monitoring (eviction conditions)](https://access.redhat.com/articles/4766521).

:::


{{ product_title }} monitors the following two filesystem identifiers:

*   `nodefs`, which is the filesystem that contains `/var/lib/kubelet`.
*   `imagefs`, which is the filesystem that contains `/var/lib/containers`.

For the default partition scheme, `nodefs` and `imagefs` monitor the same root filesystem, `/`.

To override the default partitioning when installing {{ op_system }} on an {{ product_title }} cluster node, you must create separate partitions. Consider a situation where you want to add a separate storage partition for your containers and container images. For example, by mounting `/var/lib/containers` in a separate partition, the kubelet separately monitors `/var/lib/containers` as the `imagefs` directory and the root file system as the `nodefs` directory.


:::important

If you have resized your disk size to host a larger file system, consider creating a separate `/var/lib/containers` partition. Consider resizing a disk that has an `xfs` format to reduce CPU time issues caused by a high number of allocation groups.

:::

{% endif %}
{% if agent %}
# Creating disk partitions {id="installation-user-infra-machines-advanced-disk_{{ context }}"}

In general, you must use the default disk partitioning that is created during the {{ op_system }} installation. However, there are cases where you might want to create a separate partition for a directory that you expect to grow.
{% endif %} {._abstract}

{{ product_title }} supports the addition of a single partition to attach storage to either the `/var` directory or a subdirectory of `/var`. For example:

*   `/var/lib/containers`: Holds container-related content that can grow
as more images and containers are added to a system.
*   `/var/lib/etcd`: Holds data that you might want to keep separate for purposes such as performance optimization of etcd storage.
*   `/var`: Holds data that you might want to keep separate for purposes such as auditing.

    :::important

    For disk sizes larger than 100GB, and especially larger than 1TB, create a separate `/var` partition.
    
    :::


Storing the contents of a `/var` directory separately makes it easier to grow storage for those areas as needed and reinstall {{ product_title }} at a later date to keep that data intact. This method eliminates the need to re-pull containers or copy large log files during system updates.

The use of a separate partition for the `/var` directory or a subdirectory of `/var` also prevents data growth in the partitioned directory from filling up the root file system.

The following procedure sets up a separate `/var` partition by adding a machine config manifest that is wrapped into the Ignition config file for a node type during the preparation phase of an installation.

{% if agent %}
**Prerequisites**

*   You have created an `openshift` subdirectory within your installation directory.
{% endif %}

**Procedure**

{% if not agent %}
1.  On your installation host, change to the directory that contains the {{ product_title }} installation program and generate the Kubernetes manifests for the cluster:
    ```terminal
    $ openshift-install create manifests --dir <installation_directory>
    ```
{% endif %}
1.  Create a Butane config that configures the additional partition. For example, name the file `$HOME/clusterconfig/98-var-partition.bu`, change the disk device name to the name of the storage device on the `worker` systems, and set the storage size as appropriate. This example places the `/var` directory on a separate partition:
    ```yaml
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
    :   Specifies the minimum offset value for the boot disk. For best performance, specify a minimum offset value of 25000 mebibytes. The root file system is automatically resized to fill all available space up to the specified offset. If no offset value is specified, or if the specified value is smaller than the recommended minimum, the resulting root file system will be too small, and future reinstalls of {{ op_system }} might overwrite the beginning of the data partition.

    `<partition_size>`
    :   Specifies the size of the data partition in mebibytes.

    `mount_options`
    :   The `prjquota` mount option must be enabled for filesystems used for container storage.

    :::note

    When creating a separate `/var` partition, you cannot use different instance types for compute nodes, if the different instance types do not have the same device name.
    
    :::


1.  Create a manifest from the Butane config and save it to the `clusterconfig/openshift` directory. For example, run the following command:
    ```terminal
    $ butane $HOME/clusterconfig/98-var-partition.bu -o $HOME/clusterconfig/openshift/98-var-partition.yaml
    ```

{% if not agent %}
1.  Create the Ignition config files by running the following command:
    ```terminal
    $ openshift-install create ignition-configs --dir <installation_directory>
    ```

    where:

    `<installation_directory>`
    :   Specifies the name of the installation directory.
    Ignition config files are created for the bootstrap, control plane, and compute nodes in the installation directory:
    ```
    .
    ├── auth
    │   ├── kubeadmin-password
    │   └── kubeconfig
    ├── bootstrap.ign
    ├── master.ign
    ├── metadata.json
    └── worker.ign
    ```
    The files in the `<installation_directory>/manifest` and `<installation_directory>/openshift` directories are wrapped into the Ignition config files, including the file that contains the `98-var-partition` custom `MachineConfig` object.

1.  Optional: You can apply the custom disk partitioning by referencing the Ignition config files during the {{ op_system }} installations.
{% endif %}

{% if context == "installing-with-agent-based-installer" %}
{%- set agent = false -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}