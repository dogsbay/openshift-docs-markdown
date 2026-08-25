{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing machine configuration inheritance for a worker pool canary {id="update-using-custom-machine-config-pools-mcp-inheritance_{{ context }}"}

You can configure a machine config pool (MCP) canary to inherit any `MachineConfig` assigned to an existing MCP.
This configuration is useful when you want to use an MCP canary to test as you update nodes one at a time for an existing MCP. {._abstract}

**Prerequisites**

*   You have created one or more MCPs.

**Procedure**

1.  Create a secondary MCP as described in the following two steps:
    1.  Save the following configuration file as `machineConfigPool.yaml`.
        ```yaml title="Example machineConfigPool YAML"
        apiVersion: machineconfiguration.openshift.io/v1
        kind: MachineConfigPool
        metadata:
          name: worker-perf
        spec:
          machineConfigSelector:
            matchExpressions:
              - {
                 key: machineconfiguration.openshift.io/role,
                 operator: In,
                 values: [worker,worker-perf]
                }
          nodeSelector:
            matchLabels:
              node-role.kubernetes.io/worker-perf: ""
        # ...
        ```
    1.  Create the new machine config pool by running the following command:
        ```terminal
        $ oc create -f machineConfigPool.yaml
        ```
        ```terminal title="Example output"
        machineconfigpool.machineconfiguration.openshift.io/worker-perf created
        ```
1.  Add some machines to the secondary MCP. The following example labels the worker nodes `worker-a`, `worker-b`, and `worker-c` to the MCP `worker-perf`:
    ```terminal
    $ oc label node worker-a node-role.kubernetes.io/worker-perf=''
    ```
    ```terminal
    $ oc label node worker-b node-role.kubernetes.io/worker-perf=''
    ```
    ```terminal
    $ oc label node worker-c node-role.kubernetes.io/worker-perf=''
    ```
1.  Create a new `MachineConfig` for the MCP `worker-perf` as described in the following two steps:
    1.  Save the following `MachineConfig` example as a file called `new-machineconfig.yaml`:
        ```yaml title="Example MachineConfig YAML"
        apiVersion: machineconfiguration.openshift.io/v1
        kind: MachineConfig
        metadata:
          labels:
            machineconfiguration.openshift.io/role: worker-perf
          name: 06-kdump-enable-worker-perf
        spec:
          config:
            ignition:
              version: 3.2.0
            systemd:
              units:
              - enabled: true
                name: kdump.service
          kernelArguments:
            - crashkernel=512M
        # ...
        ```
    1.  Apply the `MachineConfig` by running the following command:
        ```terminal
        $ oc create -f new-machineconfig.yaml
        ```
1.  Create the new canary MCP and add machines from the MCP you created in the previous steps. The following example creates an MCP called `worker-perf-canary`, and adds machines from the `worker-perf` MCP that you previosuly created.
    1.  Label the canary worker node `worker-a` by running the following command:
        ```terminal
        $ oc label node worker-a node-role.kubernetes.io/worker-perf-canary=''
        ```
    1.  Remove the canary worker node `worker-a` from the original MCP by running the following command:
        ```terminal
        $ oc label node worker-a node-role.kubernetes.io/worker-perf-
        ```
    1.  Save the following file as `machineConfigPool-Canary.yaml`.
        ```yaml title="Example machineConfigPool-Canary.yaml file"
        apiVersion: machineconfiguration.openshift.io/v1
        kind: MachineConfigPool
        metadata:
          name: worker-perf-canary
        spec:
          machineConfigSelector:
            matchExpressions:
              - {
                 key: machineconfiguration.openshift.io/role,
                 operator: In,
                 values: [worker,worker-perf,worker-perf-canary]
                }
          nodeSelector:
            matchLabels:
              node-role.kubernetes.io/worker-perf-canary: ""
        ```

        where:

        `spec.machineConfigSelector.matchExpressions.values`
        :   Specifies a value you can use to configure members of an additional `MachineConfig`. This example includes `worker-perf-canary` as an additional value. This is an optional value.
    1.  Create the new `worker-perf-canary` by running the following command:
        ```terminal
        $ oc create -f machineConfigPool-Canary.yaml
        ```
        ```terminal title="Example output"
        machineconfigpool.machineconfiguration.openshift.io/worker-perf-canary created
        ```
1.  Check if the `MachineConfig` is inherited in `worker-perf-canary`.
    1.  Verify that no MCP is degraded by running the following command:
        ```terminal
        $ oc get mcp
        ```
        ```terminal title="Example output"
        NAME                  CONFIG                                                          UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
        master                rendered-master-2bf1379b39e22bae858ea1a3ff54b2ac                True      False      False      3              3                   3                     0                      5d16h
        worker                rendered-worker-b9576d51e030413cfab12eb5b9841f34                True      False      False      0              0                   0                     0                      5d16h
        worker-perf          rendered-worker-perf-b98a1f62485fa702c4329d17d9364f6a          True      False      False      2              2                   2                     0                      56m
        worker-perf-canary   rendered-worker-perf-canary-b98a1f62485fa702c4329d17d9364f6a   True      False      False      1              1                   1                     0                      44m
        ```
    1.  Verify that the machines are inherited from `worker-perf` into `worker-perf-canary`.
        ```terminal
        $ oc get nodes
        ```
        ```terminal title="Example output"
        NAME       STATUS   ROLES                        AGE     VERSION
        ...
        worker-a   Ready    worker,worker-perf-canary   5d15h   v1.27.13+e709aa5
        worker-b   Ready    worker,worker-perf          5d15h   v1.27.13+e709aa5
        worker-c   Ready    worker,worker-perf          5d15h   v1.27.13+e709aa5
        ```
    1.  Verify that `kdump` service is enabled on `worker-a` by running the following command:
        ```terminal
        $ systemctl status kdump.service
        ```
        ```terminal title="Example output"
        NAME       STATUS   ROLES                        AGE     VERSION
        ...
        kdump.service - Crash recovery kernel arming
             Loaded: loaded (/usr/lib/systemd/system/kdump.service; enabled; preset: disabled)
             Active: active (exited) since Tue 2024-09-03 12:44:43 UTC; 10s ago
            Process: 4151139 ExecStart=/usr/bin/kdumpctl start (code=exited, status=0/SUCCESS)
           Main PID: 4151139 (code=exited, status=0/SUCCESS)
        ```
    1.  Verify that the MCP has updated the `crashkernel` by running the following command:
        ```terminal
        $ cat /proc/cmdline
        ```

        The output should include the updated `crashekernel` value, for example:
        ```terminal title="Example output"
        crashkernel=512M
        ```
1.  Optional: If you are satisfied with the upgrade, you can return `worker-a` to `worker-perf`.
    1.  Return `worker-a` to `worker-perf` by running the following command:
        ```terminal
        $ oc label node worker-a node-role.kubernetes.io/worker-perf=''
        ```
    1.  Remove `worker-a` from the canary MCP by running the following command:
        ```terminal
        $ oc label node worker-a node-role.kubernetes.io/worker-perf-canary-
        ```