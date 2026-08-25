{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a storage class for boot source images {id="virt-configuring-storage-class-bootsource-update_{{ context }}"}

You can configure a specific storage class in the `HyperConverged` resource. {._abstract}


:::important

To ensure stable behavior and avoid unnecessary re-importing, you can specify the `storageClassName` in the `dataImportCronTemplates` section of the `HyperConverged` resource.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Add the `dataImportCronTemplate` to the spec section of the `HyperConverged` resource and set the `storageClassName`:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      dataImportCronTemplates:
      - metadata:
          name: rhel9-image-cron
        spec:
          template:
            spec:
              storage:
                storageClassName: <storage_class>
          schedule: "0 */12 * * *"
          managedDataSource: <data_source>
    # ...
    ```
    *   `spec.dataImportCronTemplates.spec.template.spec.storage.storageClassName` specifies the storage class.
    *   `spec.dataImportCronTemplates.spec.schedule` is a required field that specifies the schedule for the job in cron format.
    *   `spec.dataImportCronTemplates.spec.managedDataSource` is a required field that specifies the data source to use.

        :::note

        For the custom image to be detected as an available boot source, the value of the `spec.dataVolumeTemplates.spec.sourceRef.name` parameter in the VM template must match this value.
        
        :::

1.  Wait for the HyperConverged Operator (HCO) and Scheduling, Scale, and Performance (SSP) resources to complete reconciliation.
1.  Delete any outdated `DataVolume` and `VolumeSnapshot` objects from the `openshift-virtualization-os-images` namespace by running the following command.
    ```terminal
    $ oc delete DataVolume,VolumeSnapshot -n openshift-virtualization-os-images --selector=cdi.kubevirt.io/dataImportCron
    ```
1.  Wait for all `DataSource` objects to reach a "Ready - True" status. Data sources can reference either a PersistentVolumeClaim (PVC) or a VolumeSnapshot. To check the expected source format, run the following command:
    ```terminal
    $ oc get storageprofile <storage_class_name> -o json | jq .status.dataImportCronSourceFormat
    ```