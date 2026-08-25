{%- set _mod_docs_content_type = "PROCEDURE" %}

# Restoring the back-end Redis database {id="restoring-the-backend-redis-database_{{ context }}"}

Restore the back-end Redis database by creating a `Restore` custom resource (CR) that excludes non-essential cluster resources. This helps you to recover the Redis data store as part of the Red&#160;Hat 3scale API Management restoration process. {._abstract}

**Prerequisites**

*   You restored the Red&#160;Hat 3scale API Management operator resources, `Secret`, and APIManager custom resources.
*   You restored the MySQL database.

**Procedure**

1.  Delete the `backend-redis` deployment by running the following command:
    ```terminal
    $ oc delete deployment backend-redis -n threescale
    ```
    ```terminal
    Warning: apps.openshift.io/v1 deployment is deprecated in v4.14+, unavailable in v4.10000+

    deployment.apps.openshift.io "backend-redis" deleted
    ```
1.  Create a YAML file with the following configuration to restore the Redis database:
    ```yaml title="Example restore-backend.yaml file"
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: restore-backend
      namespace: openshift-adp
    spec:
      backupName: redis-backup
      excludedResources:
        - nodes
        - events
        - events.events.k8s.io
        - backups.velero.io
        - restores.velero.io
        - resticrepositories.velero.io
        - csinodes.storage.k8s.io
        - volumeattachments.storage.k8s.io
        - backuprepositories.velero.io
      itemOperationTimeout: 1h0m0s
      restorePVs: true
    ```

    where:

    `redis-backup`
    :   Specifies the name of the Redis backup to restore.

1.  Restore the Redis database by running the following command:
    ```terminal
    $ oc create -f restore-backend.yaml
    ```
    ```terminal
    restore.velerio.io/restore-backend created
    ```

**Verification**

*   Verify that the `PodVolumeRestore` restore is completed by running the following command:
    ```terminal
    $ oc get podvolumerestores.velero.io -n openshift-adp
    ```

    ```terminal
    NAME                    NAMESPACE    POD                     UPLOADER TYPE   VOLUME                  STATUS      TOTALBYTES   BYTESDONE   AGE
    restore-backend-jmrwx   threescale   backend-redis-1-bsfmv   kopia           backend-redis-storage   Completed   76123        76123       21m
    ```