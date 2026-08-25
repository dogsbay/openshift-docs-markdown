{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the reclaim policy of a persistent volume {id="reclaim-policy_{{ context }}"}

Change a persistent volume’s reclaim policy to control whether storage is automatically deleted or retained when claims are removed. Switching from Delete to Retain protects data from accidental loss, while changing to Delete enables automatic cleanup of unused volumes. {._abstract}

**Procedure**

1.  List the persistent volumes in your cluster:
    ```terminal
    $ oc get pv
    ```
    ```terminal title="Example output"
    NAME                                       CAPACITY   ACCESSMODES   RECLAIMPOLICY   STATUS    CLAIM             STORAGECLASS     REASON    AGE
     pvc-b6efd8da-b7b5-11e6-9d58-0ed433a7dd94   4Gi        RWO           Delete          Bound     default/claim1    manual                     10s
     pvc-b95650f8-b7b5-11e6-9d58-0ed433a7dd94   4Gi        RWO           Delete          Bound     default/claim2    manual                     6s
     pvc-bb3ca71d-b7b5-11e6-9d58-0ed433a7dd94   4Gi        RWO           Delete          Bound     default/claim3    manual                     3s
    ```
1.  Choose one of your persistent volumes and change its reclaim policy:
    ```terminal
    $ oc patch pv <your-pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
    ```
1.  Verify that your chosen persistent volume has the right policy:
    ```terminal
    $ oc get pv
    ```
    ```terminal title="Example output"
    NAME                                       CAPACITY   ACCESSMODES   RECLAIMPOLICY   STATUS    CLAIM             STORAGECLASS     REASON    AGE
     pvc-b6efd8da-b7b5-11e6-9d58-0ed433a7dd94   4Gi        RWO           Delete          Bound     default/claim1    manual                     10s
     pvc-b95650f8-b7b5-11e6-9d58-0ed433a7dd94   4Gi        RWO           Delete          Bound     default/claim2    manual                     6s
     pvc-bb3ca71d-b7b5-11e6-9d58-0ed433a7dd94   4Gi        RWO           Retain          Bound     default/claim3    manual                     3s
    ```

    In the preceding output, the volume bound to claim `default/claim3` now has a `Retain` reclaim policy. The volume will not be automatically deleted when a user deletes claim `default/claim3`.