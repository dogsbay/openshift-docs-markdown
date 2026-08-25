{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the local provisioner {id="configuring-local-provisioner_{{ context }}"}

{{ product_title }} depends on an external provisioner to create PVs for local devices and to clean up PVs when they are not in use to enable reuse.

**Prerequisites**

*   All local volumes must be manually mounted before they can be consumed by {{ product_title }} as PVs.


:::note

The local volume provisioner is different from most provisioners and does not support dynamic provisioning.

:::



:::note

The local volume provisioner requires administrators to preconfigure the local volumes on each node and mount them under discovery directories. The provisioner then manages the volumes by creating and cleaning up PVs for each volume.

:::


**Procedure**

1.  Configure the external provisioner using a ConfigMap to relate directories with storage classes, for example:
    ```
     kind: ConfigMap
    metadata:
      name: local-volume-config
    data:
        storageClassMap: |
            local-ssd:
                hostDir:  /mnt/local-storage/ssd
                mountDir: /mnt/local-storage/ssd
            local-hdd:
                hostDir: /mnt/local-storage/hdd
                mountDir: /mnt/local-storage/hdd
    ```
    1.  Name of the storage class.
    1.  Path to the directory on the host. It must be a subdirectory of `**/mnt/local-storage**`.
    1.  Path to the directory in the provisioner Pod. We recommend using the same directory structure as used on the host and `mountDir` can be omitted in this case.
1.  Create a standalone namespace for the local volume provisioner and its configuration, for example:
    ```
    $ oc new-project local-storage
    ```

With this configuration, the provisioner creates:

*   One PV with storage class `local-ssd` for every subdirectory mounted in the `**/mnt/local-storage/ssd**` directory
*   One PV with storage class `local-hdd` for every subdirectory mounted in the `**/mnt/local-storage/hdd**` directory


:::warning

The syntax of the ConfigMap has changed between {{ product_title }} 3.9 and 3.10. Since this feature is in Technology Preview, the ConfigMap is not automatically converted during the update.

:::