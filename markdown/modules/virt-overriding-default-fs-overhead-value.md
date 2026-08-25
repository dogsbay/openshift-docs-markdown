{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding the default file system overhead value {id="virt-overriding-default-fs-overhead-value_{{ context }}"}

Change the amount of persistent volume claim (PVC) space that the {{ VirtProductName }} reserves for file system overhead by editing the `spec.filesystemOverhead` attribute of the `HCO` object. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.

**Procedure**

1.  Open the `HCO` object for editing by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Edit the `spec.filesystemOverhead` fields, populating them with your chosen values:
    ```yaml
    # ...
    spec:
      filesystemOverhead:
        global: "<new_global_value>"
        storageClass:
          <storage_class_name>: "<new_value_for_this_storage_class>"
    ```
    *   `spec.filesystemOverhead.global` specifies the default file system overhead percentage used for any storage classes that do not already have a set value. For example, `global: "0.07"` reserves 7% of the PVC for file system overhead.
    *   `spec.filesystemOverhead.storageClass` specifies the file system overhead percentage for the specified storage class. For example, `mystorageclass: "0.04"` changes the default overhead value for PVCs in the `mystorageclass` storage class to 4%.
1.  Save and exit the editor to update the `HCO` object.

**Verification**

*   View the `CDIConfig` status and verify your changes by running one of the following commands:

    To generally verify changes to `CDIConfig`:
    ```terminal
    $ oc get cdiconfig -o yaml
    ```

    To view your specific changes to `CDIConfig`:
    ```terminal
    $ oc get cdiconfig -o jsonpath='{.items..status.filesystemOverhead}'
    ```