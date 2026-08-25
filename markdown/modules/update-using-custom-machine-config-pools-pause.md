{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pausing the machine config pools {id="update-using-custom-machine-config-pools-pause_{{ context }}"}

After you create your custom machine config pools (MCPs), you then pause those MCPs. Pausing an MCP prevents the Machine Config Operator (MCO) from updating the nodes associated with that MCP. {._abstract}

**Procedure**

*   Patch the MCP that you want paused by running the following command:
    ```terminal
    $ oc patch mcp/<mcp_name> --patch '{"spec":{"paused":true}}' --type=merge
    ```

    For example:
    ```terminal
    $  oc patch mcp/workerpool-canary --patch '{"spec":{"paused":true}}' --type=merge
    ```
    ```terminal title="Example output"
    machineconfigpool.machineconfiguration.openshift.io/workerpool-canary patched
    ```