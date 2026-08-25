{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting Volume Attributes Classes {id="storage-persistent-storage-pvc-volumeattributesclass-delete-vac_{{ context }}"}

Delete a Volume Attributes Class that is no longer needed by first removing or reassigning all persistent volume claims (PVCs) that reference it, since a Volume Attributes Class cannot be deleted while it is still in use. {._abstract}

If you try to delete a Volume Attributes Class while it is still being used by a PVC, the command does not complete until all resources that use the Volume Attributes Class are updated to not use it.

**Procedure**

1.  Search for PVCs that are using Volume Attributes Classes by running the following command:
    ```terminal
    $ oc get pvc -A -o jsonpath='{range .items[?(@.spec.volumeAttributesClassName=="<vac-name>")]}{.metadata.name}{"\n"}{end}'
    ```

    Where `<vac-name>` is the Volume Attributes Class name.
    ```terminal title="Example command output"
    $ mypvc
    ```
1.  Complete one of the following steps:
    *   Specify a different Volume Attributes Class name in the PVC’s `volumeAttributesClassName` parameter:
        ```yaml title="Example PVC definition specifying a Volume Attributes Class"
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
        name: mypvc
        spec:
        …
        volumeAttributesClassName: silver
        ```

        Where `spec.volumeAttributesClassName` specifies a different Volume Attributes Class. In this example, `silver`.
    *   Delete all PVCs that specify the Volume Attributes Class by running the following command:
        ```terminal
        $ oc delete pvc <pvc-name>
        ```

        Where `<pvc-name>` is the name of the PVC that you want to delete.
1.  Now that the Volume Attributes Class is no longer being used by any PVC, delete the Volume Attributes Class by running the following command:
    ```terminal
    $ oc delete vac <vac-name>
    ```

    Where `<pvc-name>` is the name of the Volume Attributes Class that you want to delete.