{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing a healthy etcd member with a control plane machine set {id="replacing-healthy-etcd-member-cpms_{{ context }}"}

On clusters that use a control plane machine set, you can replace a healthy control plane machine by deleting the corresponding `Machine` object. {._abstract}

The control plane machine set creates a replacement machine, and the etcd Operator uses machine lifecycle hooks to protect etcd quorum during the replacement.

For more information about how quorum protection works during control plane machine deletion, see "Quorum protection with machine lifecycle hooks".

**Prerequisites**

*   The cluster has a `ControlPlaneMachineSet` resource.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have taken an etcd backup. For more information, see "Backing up etcd data".

    :::important

    Take an etcd backup before you replace a healthy etcd member so that you can restore your cluster if any issues occur.
    
    :::


**Procedure**

1.  List the control plane machines in your cluster by running the following command:
    ```terminal
    $ oc get machines \
      -l machine.openshift.io/cluster-api-machine-role=master \
      -n openshift-machine-api
    ```
1.  Identify the control plane machine that corresponds to the node that you want to replace.
1.  Optional. If you are performing planned maintenance, cordon the node by running the following command:
    ```terminal
    $ oc adm cordon <node_name>
    ```

    Replace `<node_name>` with the name of the node that you are replacing.

    :::important

    Delete only one control plane machine at a time. Deleting multiple control plane machines at the same time can cause etcd quorum loss.
    
    :::

1.  Delete the control plane machine by running the following command:
    ```terminal
    $ oc delete machine <control_plane_machine_name> -n openshift-machine-api
    ```

    Replace `<control_plane_machine_name>` with the name of the control plane machine to delete.

    :::note

    If you delete multiple control plane machines, the control plane machine set replaces them according to the configured update strategy:

    *   For clusters that use the default `RollingUpdate` update strategy, the Operator replaces one machine at a time until each machine is replaced.
    *   For clusters that are configured to use the `OnDelete` update strategy, the Operator creates all of the required replacement machines simultaneously.

    Both strategies maintain etcd health during control plane machine replacement.
    
    :::

1.  Monitor the replacement by running the following commands:
    1.  Verify that a new control plane machine is created:
        ```terminal
        $ oc get machines \
          -l machine.openshift.io/cluster-api-machine-role=master \
          -n openshift-machine-api -o wide
        ```
    1.  Verify that the etcd cluster Operator reports `Available=True` and `Degraded=False`:
        ```terminal
        $ oc get clusteroperator etcd
        ```

        :::note

        During the replacement `Progressing=True` is expected and transitions to `False` once the new member is fully reconciled.
        
        :::

    1.  Verify that all control plane nodes are in the `Ready` state:
        ```terminal
        $ oc get nodes -l node-role.kubernetes.io/control-plane
        ```

**Verification**

1.  Verify etcd health by running the following commands:
    1.  Open a remote shell session to a control plane etcd pod:
        ```terminal
        $ oc rsh -n openshift-etcd <etcd_pod_name>
        ```

        Replace `<etcd_pod_name>` with the name of a running etcd pod.
    1.  Check endpoint health:
        ```terminal
        sh-4.2# etcdctl endpoint health
        ```

        Expected output shows `is healthy` for each endpoint.
    1.  List etcd members and verify that the cluster has three members:
        ```terminal
        sh-4.2# etcdctl member list -w table
        ```
1.  Verify that all cluster Operators are available by running the following command:
    ```terminal
    $ oc get clusteroperators
    ```