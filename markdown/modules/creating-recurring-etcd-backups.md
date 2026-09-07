{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating recurring automated etcd backups {id="creating-recurring-etcd-backups_{{ context }}"}

You can create recurring automated etcd backups by applying a custom resource (CR) that defines a backup schedule and retention policy. Backup data is stored on either dynamically-provisioned or local storage. {._abstract}

Use dynamically-provisioned storage to keep the created etcd backup data in a safe, external location if possible. If dynamically-provisioned storage is not available, consider storing the backup data on an NFS share to make backup recovery more accessible.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to the {{ oc_first }}.

**Procedure**

1.  If dynamically-provisioned storage is available, complete the following steps to create automated recurring backups:
    1.  Create a persistent volume claim (PVC) named `etcd-backup-pvc.yaml` with contents such as the following example:
        ```yaml
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: etcd-backup-pvc
          namespace: openshift-etcd
        spec:
          accessModes:
            - ReadWriteOnce
          resources:
            requests:
              storage: 200Gi
          volumeMode: Filesystem
          storageClassName: etcd-backup-local-storage
        ```

        where:

        `spec.resources.requests.storage`
        :   Specifies the amount of storage available to the PVC. Adjust this value for your requirements.

        :::note

        Each of the following providers requires changes to the `accessModes` and `storageClassName` keys:

        | Provider | `accessModes` value | `storageClassName` value |
        | --- | --- | --- |
        | AWS with the `versioned-installer-efc_operator-ci` profile | `- ReadWriteMany` | `efs-sc` |
        | {{ gcp_full }} | `- ReadWriteMany` | `filestore-csi` |
        | Microsoft Azure | `- ReadWriteMany` | `azurefile-csi` |

        
        :::


    1.  Apply the PVC by running the following command:
        ```terminal
        $ oc apply -f etcd-backup-pvc.yaml
        ```
    1.  Verify that the PVC was created by running the following command:
        ```terminal
        $ oc get pvc
        ```
        ```terminal title="Example output"
        NAME              STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
        etcd-backup-pvc   Bound                                                       51s
        ```

        :::note

        Dynamic PVCs stay in the `Pending` state until they are mounted.
        
        :::

1.  If dynamically-provisioned storage is unavailable, create a local storage PVC by completing the following steps:

    :::warning

    If you delete or otherwise lose access to the node that contains the stored backup data, you can lose data.
    
    :::

    1.  Create a `StorageClass` CR file named `etcd-backup-local-storage.yaml` with the following contents:
        ```yaml
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
          name: etcd-backup-local-storage
        provisioner: kubernetes.io/no-provisioner
        volumeBindingMode: Immediate
        ```
    1.  Apply the `StorageClass` CR by running the following command:
        ```terminal
        $ oc apply -f etcd-backup-local-storage.yaml
        ```
    1.  Create a PV named `etcd-backup-pv-fs.yaml` from the applied `StorageClass` with contents such as the following example:
        ```yaml
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: etcd-backup-pv-fs
        spec:
          capacity:
            storage: 100Gi
          volumeMode: Filesystem
          accessModes:
          - ReadWriteMany
          persistentVolumeReclaimPolicy: Delete
          storageClassName: etcd-backup-local-storage
          local:
            path: /mnt/
          nodeAffinity:
            required:
              nodeSelectorTerms:
              - matchExpressions:
                - key: kubernetes.io/hostname
                  operator: In
                  values:
                  - <example_control_plane_node>
        ```

        where:

        `spec.capacity.storage`
        :   Specifies the amount of storage available to the PV. Adjust this value for your requirements.

        `spec.nodeAffinity.required.nodeSelectorTerms.matchExpressions.values`
        :   Specifies the control plane node to attach this PV to. Replace with the actual node name.

        :::tip

        List the available nodes by running the following command:

        ```terminal
        $ oc get nodes
        ```
        
        :::


    1.  Verify that the PV was created by running the following command:
        ```terminal
        $ oc get pv
        ```
        ```terminal title="Example output"
        NAME                    CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS                REASON   AGE
        etcd-backup-pv-fs       100Gi      RWX            Delete           Available           etcd-backup-local-storage            10s
        ```
    1.  Create a PVC named `etcd-backup-pvc.yaml` with contents such as the following example:
        ```yaml
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: etcd-backup-pvc
        spec:
          accessModes:
          - ReadWriteMany
          volumeMode: Filesystem
          resources:
            requests:
              storage: 10Gi
          storageClassName: etcd-backup-local-storage
        ```

        where:

        `spec.resources.requests.storage`
        :   Specifies the amount of storage available to the PVC. Adjust this value for your requirements.

    1.  Apply the PVC by running the following command:
        ```terminal
        $ oc apply -f etcd-backup-pvc.yaml
        ```
1.  Create a CR file named `etcd-recurring-backups.yaml`. The contents of the CR define the schedule and retention type of automated backups.
    *   For the default retention type of `RetentionNumber` with 15 retained backups, use contents such as the following example:
        ```yaml
        apiVersion: config.openshift.io/v1alpha1
        kind: Backup
        metadata:
          name: etcd-recurring-backup
        spec:
          etcd:
            schedule: "20 4 * * *"
            timeZone: "UTC"
            pvcName: etcd-backup-pvc
        ```

        where:

        `spec.etcd.schedule`
        :   Specifies the `CronTab` schedule for recurring backups. Adjust this value for your needs.
1.  To use retention based on the maximum number of backups, add the following key-value pairs to the `etcd` key:
    ```yaml
    spec:
      etcd:
        retentionPolicy:
          retentionType: RetentionNumber
          retentionNumber:
            maxNumberOfBackups: 5
    ```

    where:

    `spec.etcd.retentionPolicy.retentionType`
    :   Specifies the retention type. Defaults to `RetentionNumber` if unspecified.

    `spec.etcd.retentionPolicy.retentionNumber.maxNumberOfBackups`
    :   Specifies the maximum number of backups to retain. Adjust this value for your needs. Defaults to 15 backups if unspecified.

    :::warning

    A known issue causes the number of retained backups to be one greater than the configured value.
    
    :::

1.  For retention based on the file size of backups, use the following:
    ```yaml
    spec:
      etcd:
        retentionPolicy:
          retentionType: RetentionSize
          retentionSize:
            maxSizeOfBackupsGb: 20
    ```

    where:

    `spec.etcd.retentionPolicy.retentionSize.maxSizeOfBackupsGb`
    :   Specifies the maximum file size of the retained backups in gigabytes. Adjust this value for your needs. Defaults to 10 GB if unspecified.

    :::warning

    A known issue causes the maximum size of retained backups to be up to 10 GB greater than the configured value.
    
    :::


1.  Create the cron job defined by the CRD by running the following command:
    ```terminal
    $ oc create -f etcd-recurring-backup.yaml
    ```
1.  To find the created cron job, run the following command:
    ```terminal
    $ oc get cronjob -n openshift-etcd
    ```