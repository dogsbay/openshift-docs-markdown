{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a volume snapshot {id="microshift-storage-vol-snapshot-restore_{{ context }}"}

To recover data from a point-in-time copy, restore a volume snapshot to a new `PersistentVolumeClaim` (PVC). This process ensures that data from the source volume is preserved and you can verify the integrity of the restored content on the new claim. {._abstract}

The following workflow demonstrates snapshot restoration. In this example, the verification steps are also given to ensure that data written to a source persistent volume claim (PVC) is preserved and restored on a new PVC.


:::important

A snapshot must be restored to a PVC of exactly the same size as the source volume of the snapshot. You can resize the PVC after the snapshot is restored successfully if a larger PVC is needed.

:::


**Procedure**

*   Restore a snapshot by specifying the `VolumeSnapshot` object as the data source in a persistent volume claim by entering the following command:
    ```terminal
    $ oc apply -f <<EOF
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: snapshot-restore
    spec:
      accessModes:
      - ReadWriteOnce
      dataSource:
        apiGroup: snapshot.storage.k8s.io
        kind: VolumeSnapshot
        name: my-snap
      resources:
        requests:
          storage: 1Gi
      storageClassName: topolvm-provisioner-thin
    ---
    apiVersion: v1
    kind: Pod
    metadata:
      name: base
    spec:
      containers:
      - command:
          - nginx
    	    - -g
    	    - 'daemon off;'
        image: registry.redhat.io/rhel8/nginx-122@sha256:908ebb0dec0d669caaf4145a8a21e04fdf9ebffbba5fd4562ce5ab388bf41ab2
        name: test-container
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
            - ALL
        volumeMounts:
        - mountPath: /vol
          name: test-vol
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      volumes:
      - name: test-vol
        persistentVolumeClaim:
          claimName: snapshot-restore
    EOF
    ```

**Verification**

1.  Wait for the pod to reach the `Ready` state:
    ```terminal
    $ oc wait --for=condition=Ready pod/base
    ```
1.  When the new pod is ready, verify that the data from your application is correct in the snapshot.