{%- set _mod_docs_content_type = "PROCEDURE" %}
# Statically provisioning hostPath volumes {id="hostpath-static-provisioning_{{ context }}"}

Statically provision hostPath volumes by creating a persistent volume (PV) that maps to a path on the host node’s filesystem, then creating a persistent volume claim (PVC) that binds to the PV. Dynamic provisioning is not supported for hostPath volumes. {._abstract}

A pod that uses a hostPath volume must be referenced by manual (static) provisioning.

**Procedure**

1.  Define the persistent volume (PV) by creating a `pv.yaml` file with the `PersistentVolume` object definition:
    ```yaml
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: task-pv-volume
      labels:
        type: local
    spec:
      storageClassName: manual
      capacity:
        storage: 5Gi
      accessModes:
        - ReadWriteOnce
      persistentVolumeReclaimPolicy: Retain
      hostPath:
        path: "/mnt/data"
    ```
    *   `metadata.name`: Specifies the name of the volume. This name is how the volume is identified by persistent volume (PV) claims or pods.
    *   `spec.storageClassName`: The storage class is used to bind persistent volume claim (PVC) requests to the PV.
    *   `spec.accessModes`: Specifies the access mode. The volume can be mounted as `read-write` by a single node.
    *   `spec.hostPath.path`: The configuration file specifies that the volume is at `/mnt/data` on the cluster’s node. To avoid corrupting your host system, do not mount to the container root, `/`, or any path that is the same in the host and the container. You can safely mount the host by using `/host` 
1.  Create the PV from the file:
    ```terminal
    $ oc create -f pv.yaml
    ```
1.  Define the PVC by creating a `pvc.yaml` file with the `PersistentVolumeClaim` object definition:
    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: task-pvc-volume
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 1Gi
      storageClassName: manual
    ```
1.  Create the PVC from the file:
    ```terminal
    $ oc create -f pvc.yaml
    ```