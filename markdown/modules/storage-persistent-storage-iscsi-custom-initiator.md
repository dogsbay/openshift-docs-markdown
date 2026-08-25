{%- set _mod_docs_content_type = "PROCEDURE" %}
# iSCSI custom initiator IQN {id="iscsi-custom-iqn_{{ context }}"}

You can configure the custom initiator iSCSI Qualified Name (IQN) if the iSCSI targets are restricted to certain IQNs, but the nodes that the iSCSI PVs are attached to are not guaranteed to have these IQNs. {._abstract}

**Procedure**

*   To specify a custom initiator IQN, update the `initiatorName` field in the `PersistentVolume` definition object.
    ```yaml title="Example PersistentVolume object with a value specified in the initiatorName field."
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
        targetPortal: 10.0.0.1:3260
        portals: ['10.0.2.16:3260', '10.0.2.17:3260', '10.0.2.18:3260']
        iqn: iqn.2016-04.test.com:storage.target00
        lun: 0
        initiatorName: iqn.2016-04.test.com:custom.iqn
        fsType: ext4
        readOnly: false
    ```

    where:

    `spec.iscsi.initiatorName`
    :   Specifies the name of the initiator.