{%- set _mod_docs_content_type = "PROCEDURE" %}

# Restoring a MySQL database {id="restoring-the-mysql-database_{{ context }}"}

Restore a MySQL database by scaling down Red&#160;Hat 3scale API Management components and creating a Velero `Restore` custom resource (CR). This helps you to recover your 3scale MySQL data, persistent volumes, and associated resources. {._abstract}


:::warning

Do not delete the default PV and PVC associated with the database. If you do, your backups are deleted.

:::


**Prerequisites**

*   You restored the `Secret` and APIManager custom resources (CRs).

**Procedure**

1.  Scale down the Red&#160;Hat 3scale API Management operator by running the following command:
    ```terminal
    $ oc scale deployment threescale-operator-controller-manager-v2 --replicas=0 -n threescale
    ```
    ```terminal title="Example output"
    deployment.apps/threescale-operator-controller-manager-v2 scaled
    ```
1.  Create the following script to scale down the 3scale operator:
    ```terminal
    $ vi ./scaledowndeployment.sh
    ```
    ```terminal title="Example script:"
    for deployment in apicast-production apicast-staging backend-cron backend-listener backend-redis backend-worker system-app system-memcache system-mysql system-redis system-searchd system-sidekiq zync zync-database zync-que; do
        oc scale deployment/$deployment --replicas=0 -n threescale
    done
    ```
1.  Scale down all the deployment 3scale components by running the following script:
    ```terminal
    $ ./scaledowndeployment.sh
    ```
    ```terminal title="Example output"
    deployment.apps.openshift.io/apicast-production scaled
    deployment.apps.openshift.io/apicast-staging scaled
    deployment.apps.openshift.io/backend-cron scaled
    deployment.apps.openshift.io/backend-listener scaled
    deployment.apps.openshift.io/backend-redis scaled
    deployment.apps.openshift.io/backend-worker scaled
    deployment.apps.openshift.io/system-app scaled
    deployment.apps.openshift.io/system-memcache scaled
    deployment.apps.openshift.io/system-mysql scaled
    deployment.apps.openshift.io/system-redis scaled
    deployment.apps.openshift.io/system-searchd scaled
    deployment.apps.openshift.io/system-sidekiq scaled
    deployment.apps.openshift.io/zync scaled
    deployment.apps.openshift.io/zync-database scaled
    deployment.apps.openshift.io/zync-que scaled
    ```
1.  Delete the `system-mysql` `Deployment` object by running the following command:
    ```terminal
    $ oc delete deployment system-mysql -n threescale
    ```
    ```terminal title="Example output"
    Warning: apps.openshift.io/v1 deployment is deprecated in v4.14+, unavailable in v4.10000+
    deployment.apps.openshift.io "system-mysql" deleted
    ```
1.  Create the following YAML file to restore the MySQL database:
    ```yaml title="Example restore-mysql.yaml file"
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: restore-mysql
      namespace: openshift-adp
    spec:
      backupName: mysql-backup
      excludedResources:
        - nodes
        - events
        - events.events.k8s.io
        - backups.velero.io
        - restores.velero.io
        - csinodes.storage.k8s.io
        - volumeattachments.storage.k8s.io
        - backuprepositories.velero.io
        - resticrepositories.velero.io
      hooks:
        resources:
          - name: restoreDB
            postHooks:
              - exec:
                  command:
                    - /bin/sh
                    - '-c'
                    - >
                      sleep 30

                      mysql -h 127.0.0.1 -D system -u root
                      --password=$MYSQL_ROOT_PASSWORD <
                      /var/lib/mysqldump/data/dump.sql
                  container: system-mysql
                  execTimeout: 80s
                  onError: Fail
                  waitTimeout: 5m
      itemOperationTimeout: 1h0m0s
      restorePVs: true
    ```

    where:

    `mysql-backup`
    :   Specifies the name of the MySQL backup to restore.

    `/var/lib/mysqldump/data/dump.sql`
    :   Specifies the path where the data is restored from.

1.  Restore the MySQL database by running the following command:
    ```terminal
    $ oc create -f restore-mysql.yaml
    ```
    ```terminal
    restore.velerio.io/restore-mysql created
    ```

**Verification**

1.  Verify that the `PodVolumeRestore` restore is completed by running the following command:
    ```terminal
    $ oc get podvolumerestores.velero.io -n openshift-adp
    ```
    ```terminal title="Example output"
    NAME                    NAMESPACE    POD                     UPLOADER TYPE   VOLUME                  STATUS      TOTALBYTES   BYTESDONE   AGE
    restore-mysql-rbzvm     threescale   system-mysql-2-kjkhl    kopia           mysql-storage           Completed   771879108    771879108   40m
    restore-mysql-z7x7l     threescale   system-mysql-2-kjkhl    kopia           example-claim           Completed   380415       380415      40m
    ```
1.  Verify that the additional PVC has been restored by running the following command:
    ```terminal
    $ oc get pvc -n threescale
    ```
    ```terminal title="Example output"
    NAME                    STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    backend-redis-storage   Bound    pvc-3dca410d-3b9f-49d4-aebf-75f47152e09d   1Gi        RWO            gp3-csi        <unset>                 68m
    example-claim           Bound    pvc-cbaa49b0-06cd-4b1a-9e90-0ef755c67a54   1Gi        RWO            gp3-csi        <unset>                 57m
    mysql-storage           Bound    pvc-4549649f-b9ad-44f7-8f67-dd6b9dbb3896   1Gi        RWO            gp3-csi        <unset>                 68m
    system-redis-storage    Bound    pvc-04dadafd-8a3e-4d00-8381-6041800a24fc   1Gi        RWO            gp3-csi        <unset>                 68m
    system-searchd          Bound    pvc-afbf606c-d4a8-4041-8ec6-54c5baf1a3b9   1Gi        RWO            gp3-csi        <unset>                 68m
    ```