{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring storage on nodes {id="configuring-storage-on-nodes_{{ context }}"}

You can make changes to operating systems on {{ product_title }} nodes by creating `MachineConfig` objects that are managed by the Machine Config Operator (MCO). {._abstract}

The `MachineConfig` specification includes an ignition config for configuring the machines at first boot. This config object can be used to modify files, systemd services, and other operating system features running on {{ product_title }} machines.

Use the ignition config to configure storage on nodes. The following `MachineSet` manifest example demonstrates about adding a partition to a device on a primary node. In this example, apply the manifest before installation to have a partition named `recovery` with a size of 16 GiB on the primary node.

**Procedure**

1.  Create a `custom-partitions.yaml` file and include a `MachineConfig` object that contains your partition layout:
    ```terminal
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: primary
      name: 10_primary_storage_config
    spec:
      config:
        ignition:
          version: 3.2.0
        storage:
          disks:
            - device: </dev/xxyN>
              partitions:
                - label: recovery
                  startMiB: 32768
                  sizeMiB: 16384
          filesystems:
            - device: /dev/disk/by-partlabel/recovery
              label: recovery
              format: xfs
    ```
1.  Save and copy the `custom-partitions.yaml` file to the `clusterconfigs/openshift` directory:
    ```terminal
    $ cp ~/<MachineConfig_manifest> ~/clusterconfigs/openshift
    ```