{%- set _mod_docs_content_type = "PROCEDURE" %}
# Defining a storage class {id="virt-defining-storageclass_{{ context }}"}

You can define the storage class that the Containerized Data Importer (CDI) uses when allocating scratch space by adding the `spec.scratchSpaceStorageClass` field to the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Edit the `HyperConverged` CR by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Add the `spec.scratchSpaceStorageClass` field to the CR and set the value to the name of a storage class that exists in the cluster. If you do not specify a storage class, CDI uses the storage class of the persistent volume claim that is being populated.
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      scratchSpaceStorageClass: "<storage_class>"
    ```
1.  Save and exit your default editor to update the `HyperConverged` CR.