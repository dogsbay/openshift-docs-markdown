{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing a healthy etcd member by scaling up and scaling down {id="replacing-healthy-etcd-member-scale-up-down_{{ context }}"}

On bare-metal clusters that do not use a control plane machine set, replace a healthy control plane node by temporarily scaling the control plane to four nodes, and then removing the node that you want to replace. {._abstract}


:::important

Red&#160;Hat supports a cluster that has 4 or 5 control plane nodes only on bare-metal infrastructure.

:::


**Prerequisites**

*   The cluster does not have a `ControlPlaneMachineSet` resource.
*   The cluster is installed on bare-metal infrastructure.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have taken an etcd backup. For more information, see "Backing up etcd data".
*   You have created a single control plane node that you intend to add to your cluster as a postinstallation task.

    :::important

    Take an etcd backup before you replace a healthy etcd member so that you can restore your cluster if any issues occur.
    
    :::


**Procedure**

1.  Add the new control plane node to your cluster by following the steps in "Adding a control plane node to your cluster".
1.  Verify that the new control plane node is in the `Ready` state and that etcd has four members by running the following commands:
    ```terminal
    $ oc get nodes -l node-role.kubernetes.io/control-plane
    ```
    ```terminal
    $ oc rsh -n openshift-etcd <etcd_pod_name>
    ```

    Replace `<etcd_pod_name>` with the name of a running etcd pod.
    ```terminal
    sh-4.2# etcdctl member list -w table
    ```
    ```terminal
    sh-4.2# etcdctl endpoint health
    ```

    Expected output shows four etcd members and `is healthy` for each endpoint.
1.  Remove the control plane node that you want to replace.
    1.  Optional. If you are performing planned maintenance, cordon the node by running the following command:
        ```terminal
        $ oc adm cordon <node_name>
        ```

        Replace `<node_name>` with the name of the node that you are replacing.
    1.  Delete the `BareMetalHost` object for the control plane node that you want to replace by running the following command:
        ```terminal
        $ oc delete bmh <node_name> -n openshift-machine-api
        ```

        Replace `<node_name>` with the name of the node that you are replacing.
    1.  Delete the `Machine` object for the control plane node that you want to replace by running the following command:
        ```terminal
        $ oc delete machine <machine_name> -n openshift-machine-api
        ```

        Replace `<machine_name>` with the name of the machine that is associated with the node that you are replacing.

        :::note

        After you remove the `BareMetalHost` and `Machine` objects, the machine controller automatically deletes the `Node` object.
        
        :::

1.  Monitor the cluster until the control plane returns to three nodes and etcd is healthy by running the following commands:
    ```terminal
    $ oc get nodes -l node-role.kubernetes.io/control-plane
    ```
    ```terminal
    $ oc get clusteroperator etcd
    ```

**Verification**

1.  Verify etcd health by running the following commands:
    1.  Open a remote shell session to a control plane etcd pod:
        ```terminal
        $ oc rsh -n openshift-etcd <etcd_pod_name>
        ```
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