{%- set _mod_docs_content_type = "PROCEDURE" %}
# Determining the state of the unhealthy etcd member {id="restore-determine-state-etcd-member_{{ context }}"}

Determine whether an unhealthy etcd member has a stopped machine or not-ready node, or a crashlooping pod, so you can follow the correct replacement procedure. {._abstract}

The steps to replace an unhealthy etcd member depend on which of the following states your etcd member is in:

*   The machine is not running or the node is not ready
*   The etcd pod is crashlooping


:::note

If you are aware that the machine is not running or the node is not ready, but you expect it to return to a healthy state soon, then you do not need to perform a procedure to replace the etcd member. The etcd cluster Operator will automatically sync when the machine or node returns to a healthy state.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have identified an unhealthy etcd member.

**Procedure**

1.  Determine if the **machine is not running**:
    ```terminal
    $ oc get machines -A -ojsonpath='{range .items[*]}{@.status.nodeRef.name}{"\t"}{@.status.providerStatus.instanceState}{"\n"}' | grep -v running
    ```
    ```terminal title="Example output"
    ip-10-0-131-183.ec2.internal  stopped
    ```

    This output lists the node and the status of the node’s machine. If the status is anything other than `running`, then the **machine is not running**.

    If the **machine is not running**, then follow the steps in "Replacing an unhealthy etcd member whose machine is not running or whose node is not ready".
1.  Determine if the **node is not ready**.

    If either of the following scenarios are true, then the **node is not ready**.
    *   If the machine is running, then check whether the node is unreachable:
        ```terminal
        $ oc get nodes -o jsonpath='{range .items[*]}{"\n"}{.metadata.name}{"\t"}{range .spec.taints[*]}{.key}{" "}' | grep unreachable
        ```
        ```terminal title="Example output"
        ip-10-0-131-183.ec2.internal	node-role.kubernetes.io/master node.kubernetes.io/unreachable node.kubernetes.io/unreachable
        ```

        If the node is listed with an `unreachable` taint, then the **node is not ready**.
    *   If the node is still reachable, then check whether the node is listed as `NotReady`:
        ```terminal
        $ oc get nodes -l node-role.kubernetes.io/master | grep "NotReady"
        ```
        ```terminal title="Example output"
        ip-10-0-131-183.ec2.internal   NotReady   master   122m   v1.35.4
        ```

        If the node is listed as `NotReady`, then the **node is not ready**.


        If the **node is not ready**, then follow the "Replacing an unhealthy etcd member whose machine is not running or whose node is not ready" procedure.
1.  Determine if the **etcd pod is crashlooping**.

    If the machine is running and the node is ready, then check whether the etcd pod is crashlooping.
    1.  Verify that all control plane nodes are listed as `Ready`:
        ```terminal
        $ oc get nodes -l node-role.kubernetes.io/master
        ```
        ```terminal title="Example output"
        NAME                           STATUS   ROLES    AGE     VERSION
        ip-10-0-131-183.ec2.internal   Ready    master   6h13m   v1.35.4
        ip-10-0-164-97.ec2.internal    Ready    master   6h13m   v1.35.4
        ip-10-0-154-204.ec2.internal   Ready    master   6h13m   v1.35.4
        ```
    1.  Check whether the status of an etcd pod is either `Error` or `CrashloopBackoff`:
        ```terminal
        $ oc -n openshift-etcd get pods -l k8s-app=etcd
        ```
        ```terminal title="Example output"
        etcd-ip-10-0-131-183.ec2.internal                2/3     Error       7          6h9m
        etcd-ip-10-0-164-97.ec2.internal                 3/3     Running     0          6h6m
        etcd-ip-10-0-154-204.ec2.internal                3/3     Running     0          6h6m
        ```

        Since the status of the `etcd-ip-10-0-131-183.ec2.internal` pod is `Error`, then the **etcd pod is crashlooping**.


        If the **etcd pod is crashlooping**, then follow the steps in "Replacing an unhealthy etcd member whose etcd pod is crashlooping".