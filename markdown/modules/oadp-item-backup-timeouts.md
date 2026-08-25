{%- set _mod_docs_content_type = "PROCEDURE" %}
# Implementing item operation timeout - backup {id="item-operation-timeout-backup_{{ context }}"}

Configure the `ItemOperationTimeout` parameter in the `Backup` custom resource (CR) to define how long asynchronous `BackupItemAction` operations wait to complete. Adjusting this timeout prevents failures when Data Mover needs more time to upload large storage volumes. The default value is `1h`. {._abstract}

**Procedure**

*   Edit the values in the `Backup.spec.itemOperationTimeout` block of the `Backup` CR manifest, as shown in the following example:
    ```yaml
    apiVersion: velero.io/v1
    kind: Backup
    metadata:
     name: <backup_name>
    spec:
     itemOperationTimeout: 1h
    # ...
    ```