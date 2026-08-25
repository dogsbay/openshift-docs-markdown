{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a machine config pool to target nodes for performance tuning {id="creating-mcp-for-ppc_{{ context }}"}

For multi-node clusters, you can define a machine config pool (MCP) to identify the target nodes that you want to configure with a performance profile.  {._abstract}

In {{ sno }} clusters, you must use the `master` MCP because there is only one node in the cluster. You do not need to create a separate MCP for {{ sno }} clusters.

**Prerequisites**

*   You have `cluster-admin` role access.
*   You installed the {{ oc_first }}.

**Procedure**

1.  Label the target nodes for configuration by running the following command:
    ```terminal
    $ oc label node <node_name> node-role.kubernetes.io/worker-cnf=""
    ```
    *   `<node_name>`: Specifies the name of your node. This example applies the `worker-cnf` label.
1.  Create a `MachineConfigPool` resource containing the target nodes:
    1.  Create a YAML file that defines the `MachineConfigPool` resource:
        ```yaml title="Example mcp-worker-cnf.yaml file"
        apiVersion: machineconfiguration.openshift.io/v1
        kind: MachineConfigPool
        metadata:
          name: worker-cnf
          labels:
            machineconfiguration.openshift.io/role: worker-cnf
        spec:
          machineConfigSelector:
            matchExpressions:
              - {
                   key: machineconfiguration.openshift.io/role,
                   operator: In,
                   values: [worker, worker-cnf],
                }
          paused: false
          nodeSelector:
            matchLabels:
              node-role.kubernetes.io/worker-cnf: ""
        ```
        where:


        `metadata.name`
        :   Specifies a name for the `MachineConfigPool` resource.


        `machineconfiguration.openshift.io/role`
        :   Specifes a unique label for the machine config pool.


        `node-role.kubernetes.io/worker-cnf`
        :   Specifies the nodes with the target label that you defined.
    1.  Apply the `MachineConfigPool` resource by running the following command:
        ```terminal
        $ oc apply -f mcp-worker-cnf.yaml
        ```
        ```terminal title="Example output"
        machineconfigpool.machineconfiguration.openshift.io/worker-cnf created
        ```

**Verification**

*   Check the machine config pools in your cluster by running the following command:
    ```terminal
    $ oc get mcp
    ```
    ```terminal title="Example output"
    NAME         CONFIG                                                 UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master       rendered-master-58433c7c3c1b4ed5ffef95234d451490       True      False      False      3              3                   3                     0                      6h46m
    worker       rendered-worker-168f52b168f151e4f853259729b6azc4       True      False      False      2              2                   2                     0                      6h46m
    worker-cnf   rendered-worker-cnf-168f52b168f151e4f853259729b6azc4   True      False      False      1              1                   1                     0                      73s
    ```