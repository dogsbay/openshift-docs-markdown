{%- set _mod_docs_content_type = "PROCEDURE" %}
# Machine config pools {id="cnf-debugging-low-latency-cnf-tuning-status-machineconfigpools_{{ context }}"}

To apply performance profiles to specific nodes, associate them with a machine config pool (MCP). The MCP tracks the status of tuning updates, such as kernel arguments, huge pages, and real-time kernels, ensuring your cluster configurations are applied correctly. {._abstract}

The Performance Profile controller monitors changes in the MCP and updates the performance profile status accordingly.

The only conditions returned by the MCP to the performance profile status is when the MCP is `Degraded`, which leads to `performanceProfile.status.condition.Degraded = true`.

**Procedure**

1.  Check the state of the associated machine config pool by entering the following command. The output example shows a performance profile with an associated machine config pool (`worker-cnf`) that is in a degraded state.
    ```terminal
    # oc get mcp
    ```
    ```terminal title="Example output"
    NAME         CONFIG                                                 UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master       rendered-master-2ee57a93fa6c9181b546ca46e1571d2d       True      False      False      3              3                   3                     0                      2d21h
    worker       rendered-worker-d6b2bdc07d9f5a59a6b68950acf25e5f       True      False      False      2              2                   2                     0                      2d21h
    worker-cnf   rendered-worker-cnf-6c838641b8a08fff08dbd8b02fb63f7c   False     True       True       2              1                   1                     1                      2d20h
    ```
1.  To check the reason for the degraded state, enter the following command, ensuring that you change the example machine config pool with your machine config pool. The `describe` section of the MCP shows the reason.
    ```terminal
    # oc describe mcp worker-cnf
    ```
    ```terminal title="Example output"
      Message:               Node node-worker-cnf is reporting: "prepping update:
      machineconfig.machineconfiguration.openshift.io \"rendered-worker-cnf-40b9996919c08e335f3ff230ce1d170\" not
      found"
        Reason:                1 nodes are reporting degraded status on sync
    ```
1.  Optional: You can also run the `oc describe` command against the performance profile to check the degraded state status. The example output shows the performance profile `status` field marked as `degraded = true`:
    ```terminal
    # oc describe performanceprofiles performance
    ```
    ```terminal title="Example output"
    Message: Machine config pool worker-cnf Degraded Reason: 1 nodes are reporting degraded status on sync.
    Machine config pool worker-cnf Degraded Message: Node yquinn-q8s5v-w-b-z5lqn.c.openshift-gce-devel.internal is
    reporting: "prepping update: machineconfig.machineconfiguration.openshift.io
    \"rendered-worker-cnf-40b9996919c08e335f3ff230ce1d170\" not found".    Reason:  MCPDegraded
       Status:  True
       Type:    Degraded
    ```