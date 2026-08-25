{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the persistent volume {id="persistent-storage-cinder-creating-pv_{{ context }}"}

You can create a persistent volume (PV) that provisions storage from an {{ rh_openstack_first }} Cinder volume for use with {{ product_title }}. {._abstract}

**Prerequisites**

*   You have defined your PV in an object definition before creating it in {{ product_title }}.

**Procedure**

1.  Save your object definition to a file.
    ```yaml title="cinder-persistentvolume.yaml"
    apiVersion: "v1"
    kind: "PersistentVolume"
    metadata:
      name: "pv0001"
    spec:
      capacity:
        storage: "5Gi"
      accessModes:
        - "ReadWriteOnce"
      cinder:
        fsType: "ext3"
        volumeID: "f37a03aa-6212-4c62-a805-9ce139fab180"
    ```

    where:

    `metadata.name`
    :   Specifies the name of the volume that is used by persistent volume claims or pods.

    `spec.capacity.storage`
    :   Specifies the amount of storage allocated to this volume.

    `spec.cinder`
    :   Indicates `cinder` for {{ rh_openstack_first }} Cinder volumes.

    `spec.cinder.fsType`
    :   Specifies the file system that is created when the volume is mounted for the first time.

    `spec.cinder.volumeID`
    :   Specifies the Cinder volume to use.


:::important

Do not change the `fstype` parameter value after the volume is formatted and provisioned. Changing this value can result in data loss and pod failure.

:::


1.  Create the object definition file you saved in the previous step.
    ```terminal
    $ oc create -f cinder-persistentvolume.yaml
    ```