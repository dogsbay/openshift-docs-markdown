{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the local volume persistent volume claim {id="create-local-pvc_{{ context }}"}

Create a persistent volume claim (PVC) to access local volumes in your pod, because local volumes must be statically created and cannot use dynamic provisioning. {._abstract}

**Prerequisites**

*   Persistent volumes have been created using the local volume provisioner.

**Procedure**

1.  Create the PVC using the corresponding storage class:
    ```yaml
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: local-pvc-name
    spec:
      accessModes:
      - ReadWriteOnce
      volumeMode: Filesystem
      resources:
        requests:
          storage: 100Gi
      storageClassName: local-sc
    ```
    *   `metadata.name`: Specifies the name of the PVC.
    *   `spec.volumeMode`: Specifies the type of the PVC. Defaults to `Filesystem`.
    *   `spec.resources.requests.storage`: Specifies the amount of storage available to the PVC.
    *   `spec.storageClassName`: Specifies the name of the storage class required by the claim.
1.  Create the PVC in the {{ product_title }} cluster, specifying the file you just created, by running the following command:
    ```terminal
    $ oc create -f <local-pvc>.yaml
    ```