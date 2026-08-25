{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling volume expansion support {id="add-volume-expansion_{{ context }}"}

To enable volume expansion, the `StorageClass` object must have the `allowVolumeExpansion` field set to `true`. This prerequisite configuration allows persistent volume claims (PVCs) to be expanded after creation as your storage needs grow. {._abstract}

**Procedure**

*   Edit the `StorageClass` object and add the `allowVolumeExpansion` attribute by running the following command:
    ```terminal
    $ oc edit storageclass <storage_class_name>
    ```

    Enter the name of storage class in `<storage_class_name>`.

    The following example shows adding this line at the bottom of the storage class configuration.
    ```yaml title="Example storage class YAML file with allowVolumeExpansion field set to true"
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    ...
    parameters:
      type: gp2
    reclaimPolicy: Delete
    allowVolumeExpansion: true
    ```
    *   `parameters.allowVolumeExpansion`: Setting this field to `true` allows persistent volume claims (PVCs) to be expanded after creation.