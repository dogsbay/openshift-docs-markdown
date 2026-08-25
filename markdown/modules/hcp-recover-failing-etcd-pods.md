{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recovering a failing etcd pod {id="hcp-recover-failing-etcd-pods_{{ context }}"}

Each etcd pod of a 3-node cluster has its own persistent volume claim (PVC) to store its data. An etcd pod might fail because of corrupted or missing data. You can recover a failing etcd pod and its PVC. {._abstract}

**Procedure**

1.  To confirm that the etcd pod is failing, enter the following command:
    ```terminal
    $ oc get pods -l app=etcd -n clusters-<hosted_cluster_name>
    ```

    Replace `<hosted_cluster_name>` with the name of the hosted cluster of the etcd instance.
    ```terminal title="Example output"
    NAME     READY   STATUS             RESTARTS     AGE
    etcd-0   2/2     Running            0            64m
    etcd-1   2/2     Running            0            45m
    etcd-2   1/2     CrashLoopBackOff   1 (5s ago)   64m
    ```

    The failing etcd pod might have the `CrashLoopBackOff` or `Error` status.
1.  Delete the failing pod and its PVC by entering the following command:
    ```terminal
    $ oc delete pods <etcd_pod_name> -n clusters-<hosted_cluster_name>
    ```

    Replace `<etcd_pod_name>` with the name of the failing pod.

**Verification**

*   Verify that a new etcd pod is up and running by entering the following command:
    ```terminal
    $ oc get pods -l app=etcd -n clusters-<hosted_cluster_name>
    ```
    ```terminal title="Example output"
    NAME     READY   STATUS    RESTARTS   AGE
    etcd-0   2/2     Running   0          67m
    etcd-1   2/2     Running   0          48m
    etcd-2   2/2     Running   0          2m2s
    ```