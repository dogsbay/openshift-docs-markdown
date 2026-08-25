{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating LVM cluster labels {id="updating-lvm-cluster-labels_{{ context }}"}

To organize and categorize your storage resources, you can update, remove, or clear custom StorageClass labels by patching the additionalLabels field in the LVMCluster custom resource. {._abstract}

**Procedure**

1.  Patch the `LVMCluster` resource to update `additionalLabels` by running the following command:
    ```terminal
    $ oc -n openshift-lvm-storage patch lvmcluster <name> --type=json \
      -p '[{"op":"replace","path":"/spec/storage/deviceClasses/0/storageClassOptions/additionalLabels","value":{"environment":"staging"}}]'
    ```
1.  To remove a specific label, update `additionalLabels` without the label you want to remove. The Operator removes the label from the `StorageClass` during the next reconciliation.
1.  To remove all custom labels, set `additionalLabels` to an empty map `{}`.

    :::note

    The Operator preserves labels that you add directly to the `StorageClass`, for example with `oc label storageclass lvms-vg1 my-label=value`. The Operator prunes only the labels that you manage through the `additionalLabels` field in the `LVMCluster` custom resource (CR) when you remove them from the CR.
    
    :::