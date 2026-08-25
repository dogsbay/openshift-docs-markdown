{%- set _mod_docs_content_type = "PROCEDURE" %}
# Consuming storage using FlexVolume drivers {id="flexvolume-driver-consuming_{{ context }}"}

You can consume a Fibre Channel volume by using a `PersistentVolume` object. {._abstract}

Each `PersistentVolume` object in {{ product_title }} represents one storage asset in the storage back-end, such as a volume.

**Procedure**

*   Use the `PersistentVolume` object to reference the installed storage.
    ```yaml title="Persistent volume object definition using FlexVolume drivers example"
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: pv0001
    spec:
      capacity:
        storage: 1Gi
      accessModes:
        - ReadWriteOnce
      flexVolume:
        driver: openshift.com/foo
        fsType: "ext4"
        secretRef: foo-secret
        readOnly: true
        options:
          fooServer: 192.168.0.1:1234
          fooVolumeName: bar
    ```

    where:

    `metadata.name`
    :   Specifies the name of the volume. This is how it is identified through persistent volume claims or from pods. This name can be different from the name of the volume on back-end storage.

    `spec.capacity.storage`
    :   Specifies the amount of storage allocated to this volume.

    `spec.flexVolume.driver`
    :   Specifies the name of the driver. This field is mandatory.

    `spec.flexVolume.fsType`
    :   Specifies the file system that is present on the volume. This field is optional.

    `spec.flexVolume.secretRef`
    :   Specifies the reference to a secret. Keys and values from this secret are provided to the FlexVolume driver on invocation. This field is optional.

    `spec.flexVolume.readOnly`
    :   Specifies the read-only flag. This field is optional.

    `spec.flexVolume.options`
    :   Specifies the additional options for the FlexVolume driver. In addition to the flags specified by the user in the `options` field, the following flags are also passed to the executable:
    "fsType":"&lt;FS type>",
    "readwrite":"&lt;rw>",
    "secret/key1":"&lt;secret1>"
    "secret/keyN":"&lt;secretN>"


:::note

Secrets are passed only to mount or unmount call-outs.

:::