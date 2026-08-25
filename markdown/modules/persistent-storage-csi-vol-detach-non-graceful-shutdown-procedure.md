{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding an out-of-service taint manually for automatic volume detachment {id="persistent-storage-csi-vol-detach-non-graceful-shutdown-procedure_{{ context }}"}

[role="_abstract"] 
After non-graceful shutdowns, to trigger automatic volume detachment and enable pod rescheduling, apply an out-of-service taint to the node. This recovers workloads faster than manually detaching volumes from failed nodes.

**Prerequisites**

*   Access to the cluster with cluster-admin privileges.

**Procedure**

1.  After a node is detected as unhealthy, shut down the worker node.
1.  Ensure that the node is shutdown by running the following command and checking the status:
    ```terminal
    $ oc get node <node_name>
    ```
    *   Use the `<node_name>` to specify the node that shut down non-gracefully.

        :::important

        If the node is not completely shut down, do not proceed with tainting the node. If the node is still up and the taint is applied, filesystem corruption can occur.
        
        :::

1.  Taint the corresponding node object by running the following command:

    :::important

    Tainting a node this way deletes all pods on that node. This also causes any pods that are backed by statefulsets to be evicted, and replacement pods to be created on a different node.
    
    :::

    ```terminal
    $ oc adm taint node <node_name> node.kubernetes.io/out-of-service=nodeshutdown:NoExecute
    ```
    *   Use the `<node_name>` to specify the node that shut down non-gracefully.

        After the taint is applied, the volumes detach from the shutdown node allowing their disks to be attached to a different node.

        The resulting YAML file resembles the following example file:
        ```yaml title="Example node YAML file with out-of-service taint applied"
        spec:
          taints:
          - effect: NoExecute
            key: node.kubernetes.io/out-of-service
            value: nodeshutdown
        ```
1.  Restart the node.
1.  Remove the taint from the corresponding node object by running the following command:
    ```terminal
    $ oc adm taint node <node_name> node.kubernetes.io/out-of-service=nodeshutdown:NoExecute-
    ```
    *   Use the `<node_name>` to specify the node that shut down non-gracefully