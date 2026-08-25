{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a single automated etcd backup {id="creating-single-etcd-backup_{{ context }}"}

Follow these steps to create a single etcd backup by creating and applying a custom resource (CR). {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to the OpenShift CLI (`oc`).

**Procedure**

*   If dynamically-provisioned storage is available, complete the following steps to create a single automated etcd backup:
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
              storage: <storage_amount>
          volumeMode: Filesystem
        ```

        where:

        `<storage_amount>`
        :   Specifies the amount of storage available to the PVC. Adjust this value for your requirements, such as `200Gi`.
    1.  Apply the PVC by running the following command:
        ```terminal
        $ oc apply -f etcd-backup-pvc.yaml
        ```
    1.  Verify the creation of the PVC by running the following command:
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

    1.  Create a CR file named `etcd-single-backup.yaml` with contents such as the following example:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: EtcdBackup
        metadata:
          name: etcd-single-backup
          namespace: openshift-etcd
        spec:
          pvcName: <pvc_name>
        ```

        where:

        `<pvc_name>`
        :   Specifies the name of the PVC to save the backup to. Adjust this value according to your environment, such as `etcd-backup-pvc`.
    1.  Apply the CR to start a single backup:
        ```terminal
        $ oc apply -f etcd-single-backup.yaml
        ```
*   If dynamically-provisioned storage is not available, complete the following steps to create a single automated etcd backup:
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
    1.  Create a PV named `etcd-backup-pv-fs.yaml` with contents such as the following example:
        ```yaml
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: etcd-backup-pv-fs
        spec:
          capacity:
            storage: <storage_amount>
          volumeMode: Filesystem
          accessModes:
          - ReadWriteOnce
          persistentVolumeReclaimPolicy: Retain
          storageClassName: etcd-backup-local-storage
          local:
            path: /mnt
          nodeAffinity:
            required:
              nodeSelectorTerms:
              - matchExpressions:
              - key: kubernetes.io/hostname
                 operator: In
                 values:
                 - <node_name>
        ```

        where:

        `<storage_amount>`
        :   Specifies the amount of storage available to the PV. Adjust this value for your requirements, such as `100Gi`.

        `<node_name>`
        :   Specifies the node to attach this PV to. Replace with the actual node name, such as `master-0`.
    1.  Verify the creation of the PV by running the following command:
        ```terminal
        $ oc get pv
        ```
        ```terminal title="Example output"
        NAME                    CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS                REASON   AGE
        etcd-backup-pv-fs       100Gi      RWO            Retain           Available           etcd-backup-local-storage            10s
        ```
    1.  Create a PVC named `etcd-backup-pvc.yaml` with contents such as the following example:
        ```yaml
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: etcd-backup-pvc
          namespace: openshift-etcd
        spec:
          accessModes: 
          - ReadWriteOnce
          volumeMode: Filesystem
          resources:
            requests:
              storage: <storage_amount>
        ```

        where:

        `<storage_amount>`
        :   Specifies the amount of storage available to the PVC. Adjust this value for your requirements, such as `10Gi`.
    1.  Apply the PVC by running the following command:
        ```terminal
        $ oc apply -f etcd-backup-pvc.yaml
        ```
    1.  Create a CR file named `etcd-single-backup.yaml` with contents such as the following example:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: EtcdBackup
        metadata:
          name: etcd-single-backup
          namespace: openshift-etcd
        spec:
          pvcName: <pvc_name>
        ```

        where:

        `<pvc_name>`
        :   Specifies the name of the persistent volume claim (PVC) to save the backup to. Adjust this value according to your environment, such as `etcd-backup-pvc`.
    1.  Apply the CR to start a single backup:
        ```terminal
        $ oc apply -f etcd-single-backup.yaml
        ```