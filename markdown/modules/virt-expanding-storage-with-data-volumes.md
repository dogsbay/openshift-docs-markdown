{%- set _mod_docs_content_type = "PROCEDURE" %}
# Expanding available virtual storage by adding blank data volumes {id="virt-expanding-storage-with-data-volumes_{{ context }}"}

You can expand the available storage of a virtual machine (VM) by adding blank data volumes. {._abstract}

**Prerequisites**

*   You must have at least one persistent volume.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `DataVolume` manifest as shown in the following example:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: DataVolume
    metadata:
      name: blank-image-datavolume
    spec:
      source:
        blank: {}
      storage:
        resources:
          requests:
            storage: <2Gi>
      storageClassName: "<storage_class>"
    ```
    *   `spec.storage.resources.requests.storage` specifies the amount of available space requested for the data volume.
    *   `spec.storageClassName` is an optional field that specifies a storage class. If you do not specify a storage class, the default storage class is used.
1.  Create the data volume by running the following command:
    ```terminal
    $ oc create -f <blank-image-datavolume>.yaml
    ```