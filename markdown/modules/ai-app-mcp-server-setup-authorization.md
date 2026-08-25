{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up MCP gateway authorization {id="ai-app-mcp-server-setup-authorization_{{ context }}"}

Set up tool-level authorization for the Model Context Protocol (MCP) gateway to control which users can access specific MCP server tools, ensuring that each user can only use the operations permitted by their role. {._abstract}

**Prerequisites**

*   Access to OpenShift console with admin rights.
*   The MCP server Helm chart is installed.
*   MCP-compatible client connected.
*   MCP gateway is installed and verified.
*   RBAC is configured.
*   You have revoked access to specific Custom Resources (CRs) as needed.
*   MCP gateway authentication is configured.
*   Your identity provider is configured to include group/role claims in JWT tokens.

**Procedure**

1.  Ensure that your identity provider includes necessary group/role claims in the issued JWT tokens.

    The issued OAuth token should include claims similar to:
    ```json title="Example"
    {
      "resource_access": {
        "mcp-ns/openshift-mcp-server": {
          "roles": ["pods_list", "events_list", "nodes_list", "deployments_get"]
        },
        "mcp-ns/geometry-mcp-server": {
          "roles": ["pods_list", "events_list", "nodes_list", "deployments_get"]
        }
      }
    }
    ```
    *   The namespace should match the namespace of the `MCPServerRegistration` CR.
    *   The <q>roles</q> represent the allowed tools. In this example, pods_list, events_list, nodes_list, deployments_get.
1.  Configure tool-level authorization by applying an AuthPolicy that enforces tool-level access control by running the following command:
    ```terminal
    $ oc apply -f - <<EOF
    apiVersion: kuadrant.io/v1
    kind: AuthPolicy
    metadata:
      name: mcp-tool-auth-policy
      namespace: openshift-mcp-server
    spec:
      targetRef:
        group: gateway.networking.k8s.io
        kind: Gateway
        name: mcp-gateway
        sectionName: mcp
      rules:
        authentication:
          'sso-server':
            jwt:
              issuerUrl: https://login.microsoftonline.com/<tenant-id>/v2.0
        authorization:
          'tool-access-check':
            patternMatching:
              patterns:
                - predicate: |
                    request.headers['x-mcp-toolname'] in (has(auth.identity.resource_access) && auth.identity.resource_access.exists(p, p == request.headers['x-mcp-servername']) ? auth.identity.resource_access[request.headers['x-mcp-servername']].roles : [])
        response:
          unauthenticated:
            headers:
              'WWW-Authenticate':
                value: Bearer resource_metadata=http://mcp-gateway.apps.<cluster-name>.<domain-name>:8001/.well-known/oauth-protected-resource/mcp
            body:
              value: |
                {
                  "error": "Unauthorized",
                  "message": "MCP Tool Access denied: Authentication required."
                }
          unauthorized:
            body:
              value: |
                {
                  "error": "Forbidden",
                  "message": "MCP Tool Access denied: Insufficient permissions for this tool."
                }
    EOF
    ```
    *   `spec.sectionName` targets the MCP server Listener.
    *   `<cluster-name>.<domain-name>` is the name and domain of your cluster.

**Verification**

1.  Test that authorization now controls tool access by setting up the MCP Inspector:
    1.  Start MCP Inspector (requires Node.js/npm) by running the following command:
        ```terminal
        $ npx @modelcontextprotocol/inspector@latest &
        INSPECTOR_PID=$!
        ```
    1.  Wait for services to start by running the following command:
        ```terminal
        $ sleep 3
        ```
    1.  Open MCP Inspector by going to the following URL: http://localhost:6274/?transport=streamable-http&serverUrl=http://mcp-gateway.apps.&lt;cluster-name>.&lt;domain-name>:8001/mcp.

        `<cluster-name>.<domain-name>` is the name and domain of your cluster.
1.  To stop the services later, run the following command:
    ```terminal
    $ kill $INSPECTOR_PID
    ```
1.  Authenticate using a user account configured with the required role claims in your identity provider.
1.  Try the following allowed tools:
    *   pods_list
    *   events_list
    *   nodes_list
    *   deployments_get
1.  Try this restricted tool: pods_delete

    Since this tool is restricted, you should get a 403 Forbidden error.
1.  Monitor authorization decisions:
    1.  Check the AuthPolicy status by running the following command:
        ```terminal
        $ oc get authpolicy -A
        ```
    1.  View the authorization logs by running the following command:
        ```terminal
        $ oc logs -n kuadrant-system -l authorino-resource=authorino
        ```