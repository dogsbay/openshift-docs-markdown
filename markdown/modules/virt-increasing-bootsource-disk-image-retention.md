{%- set _mod_docs_content_type = "PROCEDURE" %}
# Increasing boot source disk image retention {id="virt-increasing-bootsource-disk-image-retention_{{ context }}"}

You can configure image retention settings to increase the number of older operating system image versions preserved on the cluster. {._abstract}

When automatic boot source updates are enabled, the Containerized Data Importer (CDI) tracks and downloads the latest versions of operating system images. By default, the system aggressively minimizes the retention of older versions to conserve disk space. However, if you require a safety mechanism that allows you to roll back if a newly imported version introduces issues, you can increase the retention count.


:::note

Manually deleting older `PersistentVolumeClaim` or `DataVolume` objects associated with historic boot source imports does not impact cluster stability or future updates.

:::


**Procedure**

1.  Open the `HyperConverged` custom resource (CR) in your default editor:
    ```terminal
    $ oc edit hyperconverged kubevirt-hyperconverged -n openshift-cnv
    ```
1.  Edit the `spec.dataImportCronTemplates` field to adjust the `importsToKeep` parameter to your preferred retention threshold:
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
            garbageCollect: Outdated (1)
            importsToKeep: 3
            schedule: "0 */12 * * *"
            managedDataSource: rhel9
    ```