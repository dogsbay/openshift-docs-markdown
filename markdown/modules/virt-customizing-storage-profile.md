{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing the storage profile {id="virt-customizing-storage-profile_{{ context }}"}

You can specify default parameters by editing the `StorageProfile` object for the storage class of the provisioner. These default parameters only apply to the persistent volume claim (PVC) if they are not configured in the `DataVolume` object. {._abstract}

You cannot modify storage class parameters. To make changes, delete and re-create the storage class. You must then reapply any customizations that were previously made to the storage profile.

An empty `status` section in a storage profile indicates that a storage provisioner is not recognized by the Containerized Data Importer (CDI). Customizing a storage profile is necessary if you have a storage provisioner that is not recognized by CDI. In this case, the administrator sets appropriate values in the storage profile to ensure successful allocations.

If you are creating a snapshot of a VM, a warning is displayed if the storage class of the disk has more than one `VolumeSnapshotClass` associated with it. In this case, you must specify one volume snapshot class. Otherwise, any disk that has more than one volume snapshot class is excluded from the snapshots list.


:::warning

If you create a data volume and omit YAML attributes and these attributes are not defined in the storage profile, then the requested storage will not be allocated and the underlying persistent volume claim (PVC) will not be created.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   Ensure that your planned configuration is supported by the storage class and its provider. Specifying an incompatible configuration in a storage profile causes volume provisioning to fail.

**Procedure**

1.  Edit the storage profile. In this example, the provisioner is not recognized by CDI.
    ```terminal
    $ oc edit storageprofile <storage_class>
    ```
1.  Specify the `accessModes` and `volumeMode` values you want to configure for the storage profile. For example:
    ```yaml title="Example storage profile"
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: StorageProfile
    metadata:
      name: <unknown_provisioner_class>
    # ...
    spec:
      claimPropertySets:
      - accessModes:
        - ReadWriteOnce
        volumeMode: Filesystem
    status:
      provisioner: <unknown_provisioner>
      storageClass: <unknown_provisioner_class>
    ```
    *   `spec.claimPropertySets.accessModes` defines how the volume can be mounted. For example, `ReadWriteOnce`
    *   `spec.claimPropertySets.accessModes.volumeMode` defines whether the volume uses a file system or raw block storage. For example, `volumeMode`.