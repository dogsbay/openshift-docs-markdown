{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mapping storage classes with OADP {id="oadp-storage-class-mapping-oadp_{{ context }}"}

Change the storage class of a persistent volume (PV) during a restore by configuring a storage class mapping in the Velero namespace. This helps you customize storage destinations when recovering applications with {{ oadp_short }}. {._abstract}

To deploy ConfigMap with OADP, use the `change-storage-class-config` field. You must change the storage class mapping based on your cloud provider.

**Procedure**

1.  Change the storage class mapping by running the following command:
    ```terminal
    $ cat change-storageclass.yaml
    ```
1.  Create a config map in the Velero namespace as shown in the following example:
    ```yaml title="Example"
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: change-storage-class-config
      namespace: openshift-adp
      labels:
        velero.io/plugin-config: ""
        velero.io/change-storage-class: RestoreItemAction
    data:
      standard-csi: ssd-csi
    ```
1.  Save your storage class mapping preferences by running the following command:
    ```terminal
    $ oc create -f change-storage-class-config
    ```