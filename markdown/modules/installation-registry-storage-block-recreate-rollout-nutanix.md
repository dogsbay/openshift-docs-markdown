{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring block registry storage for Nutanix volumes {id="installation-registry-storage-block-recreate-rollout-nutanix_{{ context }}"}

To allow the image registry to use block storage types such as Nutanix volumes during upgrades as a cluster administrator, you can use the `Recreate` rollout strategy. {._abstract}


:::important

Block storage volumes, or block persistent volumes, are supported but not recommended for use with the image registry on production clusters. An installation where the registry is configured on block storage is not highly available because the registry cannot have more than one replica.

If you choose to use a block storage volume with the image registry, you must use a filesystem persistent volume claim (PVC).

:::


**Procedure**

1.  Enter the following command to set the image registry storage as a block storage type, patch the registry so that it uses the `Recreate` rollout strategy, and runs with only one (`1`) replica:
    ```terminal
    $ oc patch config.imageregistry.operator.openshift.io/cluster --type=merge -p '{"spec":{"rolloutStrategy":"Recreate","replicas":1}}'
    ```
1.  Provision the PV for the block storage device, and create a PVC for that volume. The requested block volume uses the ReadWriteOnce (RWO) access mode.
    1.  Create a `pvc.yaml` file with the following contents to define a Nutanix `PersistentVolumeClaim` object:
        ```yaml
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: image-registry-storage
          namespace: openshift-image-registry
        spec:
          accessModes:
          - ReadWriteOnce
          resources:
            requests:
              storage: 100Gi
        ```

        where:

        `metadata.name`
        :   Specifies a unique name that represents the `PersistentVolumeClaim` object.

        `metadata.namespace`
        :   Specifies the namespace for the `PersistentVolumeClaim` object, which is `openshift-image-registry`.

        `spec.accessModes`
        :   Specifies the access mode of the persistent volume claim. With `ReadWriteOnce`, the volume can be mounted with read and write permissions by a single node.

        `spec.resources.requests.storage`
        :   Specifies the size of the persistent volume claim.
    1.  Enter the following command to create the `PersistentVolumeClaim` object from the file:
        ```terminal
        $ oc create -f pvc.yaml -n openshift-image-registry
        ```
1.  Enter the following command to edit the registry configuration so that it references the correct PVC:
    ```terminal
    $ oc edit config.imageregistry.operator.openshift.io -o yaml
    ```
    ```yaml title="Example output"
    storage:
      pvc:
        claim: (1)
    ```

    By creating a custom PVC, you can leave the `claim` field blank for the default automatic creation of an `image-registry-storage` PVC.