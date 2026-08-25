{%- set _mod_docs_content_type = "PROCEDURE" %}
# Observing the backup and restore process {id="hcp-dr-oadp-observe_{{ context }}"}

When you use {{ oadp_first }} to back up and restore a hosted cluster, you can monitor and observe the process. {._abstract}

**Procedure**

1.  Observe the backup process by running the following command:
    ```terminal
    $ watch "oc get backups.velero.io -n openshift-adp <backup_resource_name> -o jsonpath='{.status}'"
    ```
1.  Observe the restore process by running the following command:
    ```terminal
    $ watch "oc get restores.velero.io -n openshift-adp <backup_resource_name> -o jsonpath='{.status}'"
    ```
1.  Observe the Velero logs by running the following command:
    ```terminal
    $ oc logs -n openshift-adp -ldeploy=velero -f
    ```
1.  Observe the progress of all of the {{ oadp_short }} objects by running the following command:
    ```terminal
    $ watch "echo BackupRepositories:;echo;oc get backuprepositories.velero.io -A;echo; echo BackupStorageLocations: ;echo; oc get backupstoragelocations.velero.io -A;echo;echo DataUploads: ;echo;oc get datauploads.velero.io -A;echo;echo DataDownloads: ;echo;oc get datadownloads.velero.io -n openshift-adp; echo;echo VolumeSnapshotLocations: ;echo;oc get volumesnapshotlocations.velero.io -A;echo;echo Backups:;echo;oc get backup -A; echo;echo Restores:;echo;oc get restore -A"
    ```