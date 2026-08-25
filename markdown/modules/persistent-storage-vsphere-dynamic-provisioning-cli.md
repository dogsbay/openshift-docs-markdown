{%- set _mod_docs_content_type = "PROCEDURE" %}
# Dynamically provisioning VMware vSphere volumes using the CLI {id="vsphere-dynamic-provisioning-cli_{{ context }}"}

You can dynamically provision VMware vSphere volumes from the CLI to provide persistent storage for your applications on-demand. {{ product_title }} installs a default StorageClass, named `thin`, that uses the `thin` disk format for provisioning. {._abstract}

**Prerequisites**

*   An {{ product_title }} cluster installed on a VMware vSphere version that meets the requirements for the components that you use. For more information, see "Installing a cluster on vSphere".
*   Storage must exist in the underlying infrastructure before it can be mounted as a volume in {{ product_title }}.

**Procedure**

1.  You can define a VMware vSphere PersistentVolumeClaim by creating a file, `pvc.yaml`, with the following contents:
    ```yaml
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: pvc
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 1Gi
    ```

    where:

    `metadata.name`
    :   Specifies a unique name that represents the persistent volume claim.

    `spec.accessModes.ReadWriteOnce`
    :   Specifies the access mode of the persistent volume claim. With `ReadWriteOnce`, the volume can be mounted with read and write permissions by a single node.

    `spec.resources.requests.storage`
    :   Specifies the size of the persistent volume claim.

1.  Enter the following command to create the `PersistentVolumeClaim` object from the file:
    ```terminal
    $ oc create -f pvc.yaml
    ```