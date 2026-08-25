{%- set _mod_docs_content_type = "PROCEDURE" %}
# iSCSI multipathing {id="iscsi-multipath_{{ context }}"}

For iSCSI-based storage, you can configure multiple paths by using the same IQN for more than one target portal IP address. Multipathing ensures access to the persistent volume when one or more of the components in a path fail. {._abstract}

**Procedure**

*   To specify multi-paths in the pod specification, specify a value in the `portals` field of the `PersistentVolume` definition object.
    ```yaml title="Example PersistentVolume object with a value specified in the portals field."
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
        fsType: ext4
        readOnly: false
    ```

    where:

    `spec.iscsi.portals`
    :   Add additional target portals by using the `portals` field.