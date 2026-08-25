{%- set _mod_docs_content_type = "PROCEDURE" %}
# Remove the cloud provider uninitialized taint from bare-metal nodes {id="bare-metal-vsphere-remove-uninit-taint_{{ context }}"}

After a bare-metal node joins a {{ vmw_first }} cluster, the {{ vmw_short }} Cloud Controller Manager (CCM) cannot remove the `node.cloudprovider.kubernetes.io/uninitialized` taint automatically. You must manually remove this taint so that workloads can be scheduled on the node. {._abstract}

The {{ vmw_short }} CCM attempts to initialize each node by searching vCenter for a matching virtual machine. Because a bare-metal node is physical hardware and not a VM in vCenter, the CCM cannot find a match and never removes the taint automatically.


:::note

The CCM logs errors similar to `No VM found` for bare-metal nodes. These errors are expected and do not indicate a problem with the node or the cluster.

:::


**Prerequisites**

*   The bare-metal node has joined the cluster and its certificate signing requests (CSRs) have been approved.
*   You have installed the {{ oc_first }}.
*   You have cluster administrator privileges.

**Procedure**

*   Remove the `node.cloudprovider.kubernetes.io/uninitialized` taint from each bare-metal node by running the following command:
    ```terminal
    $ oc adm taint nodes <node_name> node.cloudprovider.kubernetes.io/uninitialized:NoSchedule-
    ```

    Replace `<node_name>` with the name of the bare-metal node as shown in the output of `oc get nodes`.

**Verification**

*   Verify that the taint has been removed by running the following command and confirming that `node.cloudprovider.kubernetes.io/uninitialized` does not appear in the output:
    ```terminal
    $ oc describe node <node_name> | grep Taint
    ```

    Replace `<node_name>` with the name of the bare-metal node as shown in the output of `oc get nodes`.