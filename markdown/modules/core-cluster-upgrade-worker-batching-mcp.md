{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring worker node batching by using machine config pools {id="core-cluster-upgrade-worker-batching-mcp_{{ context }}"}

You can configure the `MachineConfigPool` resource to control how many worker nodes update simultaneously during a cluster update.
Adjusting the `maxUnavailable` setting balances update speed against workload availability. {._abstract}

**Prerequisites**

*   You have access to the target cluster with cluster-admin privileges.
*   The `oc` CLI tool is installed and configured.

**Procedure**

1.  Check the current `maxUnavailable` setting for the worker `MachineConfigPool` resource by running the following command:
    ```terminal
    $ oc get mcp worker -o jsonpath='{.spec.maxUnavailable}'
    ```
1.  Set the required `maxUnavailable` value in the worker `MachineConfigPool` resource by running the following command:
    ```terminal
    $ oc patch mcp worker --type merge -p '{"spec":{"maxUnavailable":"<max_unavailable>"}}'
    ```

    where `<max_unavailable>` is one of the following values:
    *   An integer, for example `1`, to specify the exact number of nodes that can be unavailable during the update.
    *   A percentage, for example `"50%"`, to specify the proportion of nodes that can be unavailable.

    :::note

    The default `maxUnavailable` value is 1 worker node or 33% of worker nodes, whichever is smaller. Setting a higher value accelerates updates but increases the number of nodes unavailable at any given time. Consult your application teams to find the appropriate value for your workloads.
    
    :::

1.  Verify the updated setting by running the following command:
    ```terminal
    $ oc get mcp worker -o yaml
    ```

**Verification**

*   Verify the `MachineConfigPool` resource reflects the updated `maxUnavailable` value by running the following command:
    ```terminal
    $ oc get mcp worker -o jsonpath='{.spec.maxUnavailable}'
    ```