{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a backup by creating a DeleteBackupRequest CR {id="oadp-deleting-backups-using-oc_{{ context }}"}

Delete a backup by creating a `DeleteBackupRequest` custom resource (CR). This helps you to remove specific backups and their associated volume artifacts from storage. {._abstract}

**Prerequisites**

*   You have run a backup of your application.

**Procedure**

1.  Create a `DeleteBackupRequest` CR manifest file:
    ```yaml
    apiVersion: velero.io/v1
    kind: DeleteBackupRequest
    metadata:
      name: deletebackuprequest
      namespace: openshift-adp
    spec:
      backupName: <backup_name>
    ```

    Replace `<backup_name>` with the name of the backup.
1.  Apply the `DeleteBackupRequest` CR to delete the backup:
    ```terminal
    $ oc apply -f <deletebackuprequest_cr_filename> 
    ```