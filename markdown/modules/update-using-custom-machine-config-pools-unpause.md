{%- set _mod_docs_content_type = "PROCEDURE" %}
# Unpausing the machine config pools {id="update-using-custom-machine-config-pools-unpause_{{ context }}"}

After the {{ product_title }} update is complete, unpause your custom machine config pools (MCP) one at a time. Unpausing an MCP allows the Machine Config Operator (MCO) to update the nodes associated with that MCP. {._abstract}

**Procedure**

1.  Patch the MCP that you want to unpause:
    ```terminal
    $ oc patch mcp/<mcp_name> --patch '{"spec":{"paused":false}}' --type=merge
    ```

    For example:
    ```terminal
    $  oc patch mcp/workerpool-canary --patch '{"spec":{"paused":false}}' --type=merge
    ```
    ```terminal title="Example output"
    machineconfigpool.machineconfiguration.openshift.io/workerpool-canary patched
    ```
1.  Optional: Check the progress of the update by using one of the following options:
    1.  Check the progress from the web console by clicking **Administration** -> **Cluster settings**.
    1.  Check the progress by running the following command:
        ```terminal
        $ oc get machineconfigpools
        ```
1.  Test your applications on the updated nodes to ensure that they are working as expected.
1.  Repeat this process for any other paused MCPs, one at a time.

    :::note

    In case of a failure, such as your applications not working on the updated nodes, you can cordon and drain the nodes in the pool, which moves the application pods to other nodes to help maintain the quality-of-service for the applications. This first MCP should be no larger than the excess capacity.
    
    :::