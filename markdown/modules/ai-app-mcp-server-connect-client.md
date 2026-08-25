{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connect a client to the MCP server {id="ai-app-mcp-server-connect-client_{{ context }}"}

Connect a client that is compatible with the Model Context Protocol (MCP) to the MCP server so that an AI agent can interact with your cluster. {._abstract}

**Prerequisites**

*   Access to OpenShift console with admin rights.
*   The MCP server Helm chart is installed.

**Procedure**

1.  Add the following lines to your client configuration file:
    *   For Claude Desktop: `claude_desktop_config.json` file
    *   For Claude Code (CLI): `.mcp.json` file
        ```json
        {
          "mcpServers": {
            "openshift": {
              "type": "http",
              "url": "<url of the route created in the Helm chart>/mcp"
            }
          }
        }
        ```

        `<url of the route created in the Helm chart>` is the hostname you configured during Helm installation.
1.  Accept the CA certificate when prompted by the client.