{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing a healthy etcd member with the Machine API {id="replacing-healthy-etcd-member-machine-api_{{ context }}"}

On clusters that access the Machine API but do not use a control plane machine set, you can replace a healthy control plane machine by deleting the corresponding `Machine` object. The Machine API provisions a replacement machine, and the etcd cluster Operator adds the new node as an etcd member. {._abstract}

**Prerequisites**

*   The cluster has access to the Machine API.
*   The cluster does not have a `ControlPlaneMachineSet` resource.
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
      -n openshift-machine-api -o wide
    ```
1.  Identify the control plane machine that corresponds to the node that you want to replace.
1.  Optional. If you are performing planned maintenance, cordon the node by running the following command:
    ```terminal
    $ oc adm cordon <node_name>
    ```

    Replace `<node_name>` with the name of the node that you are replacing.
1.  Delete the control plane machine by running the following command:
    ```terminal
    $ oc delete machine <control_plane_machine_name> -n openshift-machine-api
    ```

    Replace `<control_plane_machine_name>` with the name of the control plane machine to delete.

    :::important

    Delete only one control plane machine at a time. Deleting multiple control plane machines at the same time can cause etcd quorum loss.
    
    :::


    A new machine is automatically provisioned after you delete the control plane machine.
1.  Monitor the replacement by running the following commands until the new machine reaches the `Running` phase:
    ```terminal
    $ oc get machines \
      -l machine.openshift.io/cluster-api-machine-role=master \
      -n openshift-machine-api -o wide
    ```
    ```terminal
    $ oc get clusteroperator etcd
    ```
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