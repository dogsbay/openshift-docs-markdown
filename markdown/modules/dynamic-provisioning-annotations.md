{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the default storage class {id="storage-class-annotations_{{ context }}"}

A default storage class automatically provisions persistent volumes when you create persistent volume claims (PVCs) without specifying a storage class. This simplifies storage management by removing the need for users to select a storage class for each claim. To designate a storage class as the cluster-wide default, add an annotation to the storage class metadata. {._abstract}

**Prerequisites**

*   Logged in to a running {{ product_title }} cluster with administrator privileges.

**Procedure**

1.  For your required storage class, set the `metadata.annotations.storageclass.kubernetes.io/is-default-class` field to `true` as in the following example:
    ```yaml title="Example storage class YAML file"
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      annotations:
        storageclass.kubernetes.io/is-default-class: "true"
    ...
    ```

    :::note

    The beta annotation `storageclass.beta.kubernetes.io/is-default-class` is still working; however, it will be removed in a future release.
    
    :::

1.  Optional: Create a storage class description in the `metadata.annotations.kubernetes.io/description` field as in the following example:
    ```yaml title="Example storage class YAML file"
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      annotations:
        kubernetes.io/description: My Storage Class Description
    ...
    ```