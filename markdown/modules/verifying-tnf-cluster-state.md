{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying TNF cluster state {id="verifying-tnf-cluster-state_{{ context }}"}

You can diagnose and resolve common issues during degraded operation of a Two-Node with Fencing (TNF) cluster by assessing the health of Pacemaker, etcd, and node status. {._abstract}

**Procedure**

1.  Check Pacemaker status from the surviving node by running the following command:
    ```terminal
    $ oc debug node/<surviving-node> -- chroot /host pcs status
    ```
1.  Check etcd membership by running the following command:
    ```terminal
    $ oc debug node/<surviving-node> -- chroot /host podman exec etcd etcdctl member list -w table
    ```
1.  Check node status by running the following command:
    ```terminal
    $ oc get nodes
    ```
1.  Check cluster Operators by running the following command:
    ```terminal
    $ oc get co
    ```