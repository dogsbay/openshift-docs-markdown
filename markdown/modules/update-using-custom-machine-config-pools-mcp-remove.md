{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving a node to the original machine config pool {id="update-using-custom-machine-config-pools-mcp-remove_{{ context }}"}

After you update and verify applications on nodes in a custom machine config pool (MCP), move the nodes back to their original MCP by removing the custom label that you added to the nodes. {._abstract}


:::important

A node must have a role to be properly functioning in the cluster.

:::


**Procedure**

1.  For each node in a custom MCP, remove the custom label from the node by running the following command:
    ```terminal
    $ oc label node <node_name> node-role.kubernetes.io/<custom_label>-
    ```

    For example:
    ```terminal
    $ oc label node ci-ln-0qv1yp2-f76d1-kl2tq-worker-a-j2ssz node-role.kubernetes.io/workerpool-canary-
    ```
    ```terminal title="Example output"
    node/ci-ln-0qv1yp2-f76d1-kl2tq-worker-a-j2ssz labeled
    ```

    The Machine Config Operator moves the nodes back to the original MCP and reconciles the node to the MCP configuration.
1.  To ensure that node has been removed from the custom MCP, view the list of MCPs in the cluster and their current state by running the following command:
    ```terminal
    $ oc get mcp
    ```
    ```terminal title="Example output"
    NAME                CONFIG                                                   UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master              rendered-master-1203f157d053fd987c7cbd91e3fbc0ed         True      False      False      3              3                   3                     0                      61m
    workerpool-canary   rendered-mcp-noupdate-5ad4791166c468f3a35cd16e734c9028   True      False      False      0              0                   0                     0                      21m
    worker              rendered-worker-5ad4791166c468f3a35cd16e734c9028         True      False      False      3              3                   3                     0                      61m
    ```

    When the node is removed from the custom MCP and moved back to the original MCP, it can take several minutes to update the machine counts. In this example, one node was moved from the removed `workerpool-canary` MCP to the `worker` MCP.
1.  Optional: Delete the custom MCP by running the following command:
    ```terminal
    $ oc delete mcp <mcp_name>
    ```