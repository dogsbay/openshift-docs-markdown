{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing etcd issues during control plane updates {id="core-cluster-upgrade-ts-etcd_{{ context }}"}

If etcd members become unhealthy during a control plane update, identify the affected members and investigate the root cause before proceeding. {._abstract}

**Prerequisites**

*   You have a control plane update with suspected etcd issues.
*   You have access to the target cluster with cluster-admin privileges.

**Procedure**

1.  Check etcd cluster health by running the following command:
    ```terminal
    $ oc get etcd -o yaml
    ```

    Look for the `EtcdMembersAvailable` condition in the output.
1.  Check etcd pod status by running the following command:
    ```terminal
    $ oc get pods -n openshift-etcd -l app=etcd
    ```

    All etcd pods must be running.
1.  View etcd member status by running the following command:
    ```terminal
    $ oc rsh -n openshift-etcd <etcd_pod> etcdctl member list -w table
    ```
1.  Monitor etcd logs for errors by running the following command:
    ```terminal
    $ oc logs -n openshift-etcd <etcd_pod> etcd
    ```