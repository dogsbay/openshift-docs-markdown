{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pausing worker nodes before the update {id="update-pause-worker-nodes-before-update_{{ context }}"}

You must pause the worker nodes before you proceed with the update.
In the following example, there are 2 `mcp` groups, `mcp-1` and `mcp-2`.
You patch the `spec.paused` field to `true` for each of the `MachineConfigPool` groups. {._abstract}

**Procedure**

1.  Patch the `mcp` CRs to pause the nodes and drain and remove the pods from those nodes by running the following command:
    ```terminal
    $ oc patch mcp/mcp-1 --type merge --patch '{"spec":{"paused":true}}'
    ```
    ```terminal
    $ oc patch mcp/mcp-2 --type merge --patch '{"spec":{"paused":true}}'
    ```
1.  Get the status of the paused `mcp` groups:
    ```terminal
    $ oc get mcp -o json | jq -r '["MCP","Paused"], ["---","------"], (.items[] | [(.metadata.name), (.spec.paused)]) | @tsv' | grep -v worker
    ```
    ```terminal title="Example output"
    MCP     Paused
    ---     ------
    master  false
    mcp-1   true
    mcp-2   true
    ```

    :::note

    The default control plane and worker `mcp` groups are not changed during an update.
    
    :::