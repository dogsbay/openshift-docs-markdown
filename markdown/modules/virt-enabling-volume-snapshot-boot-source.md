{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling volume snapshot boot sources {id="virt-enabling-volume-snapshot-boot-source_{{ context }}"}

You can enable volume snapshot boot sources by setting the parameter in the `StorageProfile` associated with the storage class that stores operating system base images. {._abstract}

Although `DataImportCron` was originally designed to maintain only PVC sources, `VolumeSnapshot` sources scale better than PVC sources for certain storage types.


:::note

Use volume snapshots on a storage profile that is proven to scale better when cloning from a single snapshot.

:::


**Prerequisites**

*   You must have access to a volume snapshot with the operating system image.
*   The storage must support snapshotting.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the storage profile object that corresponds to the storage class used to provision boot sources by running the following command:
    ```terminal
    $ oc edit storageprofile <storage_class>
    ```
1.  Review the `dataImportCronSourceFormat` specification of the `StorageProfile` to confirm whether or not the VM is using PVC or volume snapshot by default.
1.  Edit the storage profile, if needed, by updating the `dataImportCronSourceFormat` specification to `snapshot`.

    Example storage profile:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: StorageProfile
    metadata:
    # ...
    spec:
      dataImportCronSourceFormat: snapshot
    ```

**Verification**

1.  Open the storage profile object that corresponds to the storage class used to provision boot sources.
    ```terminal
    $ oc get storageprofile <storage_class>  -oyaml
    ```
1.  Confirm that the `dataImportCronSourceFormat` specification of the `StorageProfile` is set to 'snapshot', and that any `DataSource` objects that the `DataImportCron` points to now reference volume snapshots.

You can now use these boot sources to create virtual machines.