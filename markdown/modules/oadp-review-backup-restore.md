{%- set _mod_docs_content_type = "PROCEDURE" %}
# Previewing resources before running backup and restore {id="oadp-review-backup-restore_{{ context }}"}

Preview the backup and restore resources in advance by doing a dry run of the backup and restore operations. This helps you to verify which resources will be included before committing to a full backup or restore. {._abstract}

{{ oadp_short }} backs up application resources based on the type, namespace, or label. This means that you can view the resources after the backup is complete. Similarly, you can view the restored objects based on the namespace, persistent volume (PV), or label after a restore operation is complete. 

**Prerequisites**

*   You have installed the {{ oadp_short }} Operator.

**Procedure**

1.  To preview the resources included in the backup before running the actual backup, run the following command:
    ```terminal
    $ velero backup create <backup-name> --snapshot-volumes false
    ```

    Specify the value of `--snapshot-volumes` parameter as `false`.
1.  To know more details about the backup resources, run the following command:
    ```terminal
    $ velero describe backup <backup_name> --details
    ```

    Replace `<backup_name>` with the name of the backup.
1.  To preview the resources included in the restore before running the actual restore, run the following command:
    ```terminal
    $ velero restore create --from-backup <backup_name>
    ```

    Replace `<backup_name>` with the name of the backup.

    :::important

    The `velero restore create` command creates restore resources in the cluster. You must delete the resources created as part of the restore, after you review the resources.
    
    :::

1.  To know more details about the restore resources, run the following command:
    ```terminal
    $ velero describe restore <restore_name> --details
    ```

    Replace `<restore_name>` with the name of the restore.