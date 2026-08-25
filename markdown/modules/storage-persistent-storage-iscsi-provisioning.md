{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning {id="persistent-storage-iscsi-provisioning_{{ context }}"}

You can verify that the storage exists in the underlying infrastructure before mounting it as a volume in {{ product_title }}. All that is required for the iSCSI is the iSCSI target portal, a valid iSCSI Qualified Name (IQN), a valid LUN number, the filesystem type, and the `PersistentVolume` API. {._abstract}

**Procedure**

*   Verify that the storage exists in the underlying infrastructure before mounting it as a volume in {{ product_title }} by creating the following `PersistentVolume` object definition:
    ```yaml title="Example PersistentVolume object definition"
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: iscsi-pv
    spec:
      capacity:
        storage: 1Gi
      accessModes:
        - ReadWriteOnce
      iscsi:
         targetPortal: 10.16.154.81:3260
         iqn: iqn.2014-12.example.server:storage.target00
         lun: 0
         fsType: 'ext4'
    ```