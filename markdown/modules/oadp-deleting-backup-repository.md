{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a backup repository {id="oadp-deleting-backup-repository_{{ context }}"}

Delete the `backuprepository` custom resource (CR) to complete the backup deletion process. This helps you to ensure that all backup metadata and artifacts are fully removed from storage. {._abstract}

After you delete the backup, and after the Kopia repository maintenance cycles to delete the related artifacts are complete, the backup is no longer referenced by any metadata or manifest objects.

**Prerequisites**

*   You have deleted the backup of your application.
*   You have waited up to 72 hours after the backup is deleted. This time frame allows Kopia to run the repository maintenance cycles.

**Procedure**

1.  To get the name of the backup repository CR for a backup, run the following command:
    ```terminal
    $ oc get backuprepositories.velero.io -n openshift-adp
    ```
1.  To delete the backup repository CR, run the following command:
    ```terminal
    $ oc delete backuprepository <backup_repository_name> -n openshift-adp
    ```

    Replace `<backup_repository_name>` with the name of the backup repository.