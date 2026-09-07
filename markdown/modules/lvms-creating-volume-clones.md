{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating volume clones {id="lvms-creating-volume-clones_{{ context }}"}

Create volume clones to duplicate persistent volume claim (PVC) data for testing, development, or creating independent writable copies by creating a `PersistentVolumeClaim` object that references the source PVC. {._abstract}

You must create a `PersistentVolumeClaim` object in the namespace where you created the source PVC.


:::important

The cloned PVC has write access.

:::


**Prerequisites**

*   You ensured that the source PVC is in `Bound` state. This is required for a consistent clone.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Create a `PersistentVolumeClaim` object:
    ```yaml title="Example PersistentVolumeClaim object to create a volume clone"
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: lvm-pvc-clone
    spec:
      accessModes:
      - ReadWriteOnce
      storageClassName: lvms-vg1
      volumeMode: Filesystem
      dataSource:
        kind: PersistentVolumeClaim
        name: lvm-pvc
      resources:
        requests:
          storage: 1Gi
    ```
    *   `spec.storageClassName`: Set this field to the value of the `storageClassName` field in the source PVC.
    *   `spec.volumeMode`: Set this field to the `volumeMode` field in the source PVC.
    *   `spec.dataSource.name`: Specifies the name of the source PVC.
    *   `spec.resources.requests.storage`: Specifies the storage size for the cloned PVC. The storage size of the cloned PVC must be greater than or equal to the storage size of the source PVC.
1.  Create the PVC in the namespace where you created the source PVC by running the following command:
    ```terminal
    $ oc create -f <file_name> -n <namespace>
    ```

**Verification**

*   To verify that the volume clone is created, run the following command:
    ```terminal
    $ oc get pvc -n <namespace>
    ```
    ```terminal title="Example output"
    NAME                STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    lvm-block-1-clone   Bound    pvc-e90169a8-fd71-4eea-93b8-817155f60e47   1Gi        RWO            lvms-vg1       5s
    ```