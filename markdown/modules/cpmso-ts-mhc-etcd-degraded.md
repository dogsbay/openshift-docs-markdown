{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recovering a degraded etcd Operator {id="cpmso-ts-etcd-degraded_{{ context }}"}

Recover a degraded etcd Operator by removing failed members to restore cluster state after machine health check operations. {._abstract}

For example, while performing remediation, the machine health check might delete a control plane machine that is hosting etcd. If the etcd member is not reachable at that time, the etcd Operator becomes degraded.

When the etcd Operator is degraded, manual intervention is required to force the Operator to remove the failed member and restore the cluster state.

**Procedure**

1.  List the control plane machines in your cluster by running the following command:
    ```terminal
    $ oc get machines \
      -l machine.openshift.io/cluster-api-machine-role==master \
      -n openshift-machine-api \
      -o wide
    ```

    Any of the following conditions might indicate a failed control plane machine:
    *   The `STATE` value is `stopped`.
    *   The `PHASE` value is `Failed`.
    *   The `PHASE` value is `Deleting` for more than ten minutes.

    :::important

    Before continuing, ensure that your cluster has two healthy control plane machines. Performing the actions in this procedure on more than one control plane machine risks losing etcd quorum and can cause data loss.

    If you have lost the majority of your control plane hosts, leading to etcd quorum loss, then you must follow the disaster recovery procedure "Restoring to an earlier cluster state" instead of this procedure.
    
    :::

1.  Edit the machine CR for the failed control plane machine by running the following command:
    ```terminal
    $ oc edit machine <control_plane_machine_name>
    ```
1.  Remove the contents of the `lifecycleHooks` parameter from the failed control plane machine and save your changes.

    The etcd Operator removes the failed machine from the cluster and can then safely add new etcd members.