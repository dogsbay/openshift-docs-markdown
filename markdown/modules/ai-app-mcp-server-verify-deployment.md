{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify the MCP gateway deployment {id="ai-app-mcp-server-verify-deployment_{{ context }}"}

Verify that the Model Context Protocol (MCP) gateway is deployed and running correctly before configuring routing, authentication, and authorization. {._abstract}

**Prerequisites**

*   Access to {{ product_title }} console with admin rights.
*   {{ oc_first }} is installed.
*   The MCP server Helm chart is installed.
*   MCP-compatible client connected.
*   MCP gateway is installed.

**Procedure**

1.  Check the status of your deployment by running the following command:
    ```terminal
    $ oc get pods -n gateway-namespace -l "app.kubernetes.io/name=mcp-gateway"
    ```

    :::note

    This example uses the namespace "gateway-namespace" for installing the gateway. If you install the gateway in a different namespace than "gateway-namespace", use that namespace instead throughout the procedure.
    
    :::

    ```terminal title="Example"
    NAME                                      READY   STATUS    RESTARTS   AGE
    mcp-gateway-controller-594b9649cf-zstfw   1/1     Running   0          22s
    ```
1.  Ensure that the MCP gateway Extension exists by running the following command:
    ```terminal
    $ oc get mcpgatewayextension -A
    ```
    ```terminal title="Example"
    NAMESPACE          NAME          READY   AGE
    gateway-namespace  mcp-gateway           105s
    ```
1.  Verify the broker-router deployment by running the following command:
    ```terminal
    $ oc logs -n gateway-namespace deployment/mcp-gateway
    ```
1.  Verify EnvoyFilter was created in the gateway namespace by running the following command:
    ```terminal
    $ oc get envoyfilter -n gateway-namespace -l app.kubernetes.io/managed-by=mcp-gateway-controller
    ```