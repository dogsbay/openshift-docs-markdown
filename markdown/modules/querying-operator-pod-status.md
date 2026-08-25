{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying Operator pod status {id="querying-operator-pod-status_{{ context }}"}

You can list Operator pods within a cluster and their status. You can also collect a detailed Operator pod summary. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Your API service is still functional.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  List Operators running in the cluster. The output includes Operator version, availability, and up-time information:
    ```terminal
    $ oc get clusteroperators
    ```
1.  List Operator pods running in the Operator’s namespace, plus pod status, restarts, and age:
    ```terminal
    $ oc get pod -n <operator_namespace>
    ```
1.  Output a detailed Operator pod summary:
    ```terminal
    $ oc describe pod <operator_pod_name> -n <operator_namespace>
    ```

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  If an Operator issue is node-specific, query Operator container status on that node.
    1.  Start a debug pod for the node:
        ```terminal
        $ oc debug node/my-node
        ```
    1.  Set `/host` as the root directory within the debug shell. The debug pod mounts the host’s root file system in `/host` within the pod. By changing the root directory to `/host`, you can run binaries contained in the host’s executable paths:
        ```terminal
        # chroot /host
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>` instead.
        
        :::

    1.  List details about the node’s containers, including state and associated pod IDs:
        ```terminal
        # crictl ps
        ```
    1.  List information about a specific Operator container on the node. The following example lists information about the `network-operator` container:
        ```terminal
        # crictl ps --name network-operator
        ```
    1.  Exit from the debug shell.
{% endif %}