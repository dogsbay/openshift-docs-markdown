{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot ExecCPUAffinity configuration {id="troubleshooting-exec-cpu-affinity_{{ context }}"}

If a process initiated by using `oc exec` is not being pinned correctly despite the pod meeting the Guaranteed QoS and integer CPU requirements, use the following procedure to verify the configuration at the node level. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` permissions.
*   You have the OpenShift CLI (`oc`) installed.
*   You have identified the node where the pod is running.

**Procedure**

1.  Start a debug session for the targeted node:
    ```terminal
    $ oc debug node/<node_name>
    ```
1.  Set `/host` as the root directory for the debug shell:
    ```terminal
    # chroot /host
    ```
1.  Inspect the performance runtime configuration file:
    ```terminal
    # cat /etc/crio/crio.conf.d/99-runtimes.conf
    ```

    The following example shows the expected output:
    ```toml
    [crio.runtime.runtimes.high-performance]
    inherit_default_runtime = true
    exec_cpu_affinity = "first"
    ```

    :::note

    If `exec_cpu_affinity = "first"` is missing, ensure the `PerformanceProfile` does not contain the `performance.openshift.io/exec-cpu-affinity: "disable"` annotation. If you recently changed the annotation, verify that the MachineConfigPool (MCP) has finished updating.
    
    :::

1.  Verify the live CRI-O configuration to ensure the setting is loaded into memory:
    ```terminal
    # crio config | grep exec_cpu_affinity
    ```

    The following example shows the expected output:
    ```terminal
    exec_cpu_affinity = "first"
    ```

**Verification**

*   If both the runtime configuration file and live CRI-O configuration show `exec_cpu_affinity = "first"`, the ExecCPUAffinity feature is correctly configured. Processes initiated by `oc exec` on Guaranteed QoS pods with integer CPU requests are pinned to the first available core.
*   If `exec_cpu_affinity = "first"` is missing from either output, check that the `PerformanceProfile` does not contain the `performance.openshift.io/exec-cpu-affinity: "disable"` annotation and verify that the MachineConfigPool (MCP) has finished updating by running:
    ```terminal
    $ oc get mcp
    ```

    All pools should show `UPDATED=True` and `UPDATING=False`.