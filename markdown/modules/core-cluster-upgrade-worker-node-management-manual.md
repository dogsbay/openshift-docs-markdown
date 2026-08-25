{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pausing and unpausing worker nodes by using machine config pools {id="core-cluster-upgrade-worker-node-management-manual_{{ context }}"}

You can pause and unpause worker nodes directly by patching the `MachineConfigPool` resource on the target cluster.
Use this method when you are managing a single cluster or when you do not have {{ cgu_operator_full }} ({{ cgu_operator }}) configured. {._abstract}

**Prerequisites**

*   You have access to the target cluster with cluster-admin privileges.
*   The `oc` CLI tool is installed and configured.

**Procedure**

1.  Pause the worker `MachineConfigPool` resource by running the following command:
    ```terminal
    $ oc patch mcp worker --type merge -p '{"spec":{"paused":true}}'
    ```
1.  Verify the worker `MachineConfigPool` resource is paused and workloads continue running by running the following commands:
    ```terminal
    $ oc get mcp worker -o jsonpath='{.spec.paused}'
    $ oc get mcp worker
    $ oc get pods -A -o wide | grep worker
    ```
1.  After the control plane update completes and you are ready to update worker nodes, unpause the worker `MachineConfigPool` resource by running the following command:
    ```terminal
    $ oc patch mcp worker --type merge -p '{"spec":{"paused":false}}'
    ```
1.  Monitor worker node updates after unpausing by running the following commands:
    ```terminal
    $ oc get mcp worker -w
    $ oc get nodes -l node-role.kubernetes.io/worker= -w
    ```

    Nodes progress through the following states:
    *   `Ready,SchedulingDisabled`: Node is being drained
    *   `NotReady,SchedulingDisabled`: Node is rebooting with new configuration
    *   `Ready`: Node update complete

**Verification**

*   Verify that worker nodes are updated and workloads are healthy by running the following commands:
    ```terminal
    $ oc get nodes
    $ oc get mcp worker
    $ oc get pods -A | grep -v Running | grep -v Completed
    ```

    All nodes must show `Ready` status and the expected kubelet version.
    For the `MachineConfigPool` output, verify that `MACHINECOUNT` = `READYMACHINECOUNT` = `UPDATEDMACHINECOUNT`.
    The `oc get pods` command must return no unexpected pods.