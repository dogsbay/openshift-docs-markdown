{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning persistent storage using NFS {id="persistent-storage-nfs-provisioning_{{ context }}"}

You can provision persistent storage for {{ product_title }} by creating persistent volume (PV) and persistent volume claim (PVC) objects that reference your NFS servers and export paths. {._abstract}

**Prerequisites**

*   You have NFS storage available in the underlying infrastructure with the appropriate export paths configured.

**Procedure**

1.  Create an object definition for the PV:
    ```yaml
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: pv0001
    spec:
      capacity:
        storage: 5Gi
      accessModes:
      - ReadWriteOnce
      nfs:
        path: /tmp
        server: 172.17.0.2
      persistentVolumeReclaimPolicy: Retain
    ```

    where:

    `metadata.name`
    :   Specifies the name of the volume. This is the PV identity in various `oc` commands.

    `spec.capacity.storage`
    :   Specifies the amount of storage allocated to this volume.

    `spec.accessModes.ReadWriteOnce`
    :   Though this appears to be related to controlling access to the volume, it is actually used similarly to labels and used to match a PVC to a PV. Currently, no access rules are enforced based on the `accessModes`.

    `spec.nfs`
    :   Specifies the volume type being used, in this case the `nfs` plugin.

    `spec.nfs.path`
    :   Specifies the path that is exported by the NFS server.

    `spec.nfs.server`
    :   Specifies the hostname or IP address of the NFS server.

    `spec.persistentVolumeReclaimPolicy`
    :   Specifies the reclaim policy for the PV. This defines what happens to a volume when released.

    :::note

    Each NFS volume must be mountable by all schedulable nodes in the cluster.
    
    :::


1.  Verify that the PV was created:
    ```terminal
    $ oc get pv
    ```
    ```terminal title="Example output"
    NAME     LABELS    CAPACITY     ACCESSMODES   STATUS      CLAIM  REASON    AGE
    pv0001   <none>    5Gi          RWO           Available                    31s
    ```
1.  Create a persistent volume claim that binds to the new PV:
    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: nfs-claim1
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 5Gi
      volumeName: pv0001
      storageClassName: ""
    ```

    where:

    `spec.accessModes.ReadWriteOnce`
    :   Specifies the access modes do not enforce security, but rather act as labels to match a PV to a PVC.

    `spec.resources.requests.storage`
    :   This claim looks for PVs offering **5Gi** or greater capacity.

1.  Verify that the persistent volume claim was created:
    ```terminal
    $ oc get pvc
    ```
    ```terminal title="Example output"
    NAME         STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    nfs-claim1   Bound    pv0001   5Gi        RWO                           2m
    ```