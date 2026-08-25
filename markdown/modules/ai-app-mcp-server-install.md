{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install MCP server for Red Hat OpenShift {id="ai-mcp-server-install_{{ context }}"}

Install and configure the MCP server for Red Hat OpenShift to enable AI agents to securely diagnose and inspect your cluster. {._abstract}

To install the MCP server for Red Hat OpenShift feature, complete the following procedures.

**Prerequisites**

*   Access to OpenShift console with admin rights.
*   Installed MCP-compatible client, such as Claude Code, Visual Studio Code (VS Code), Cursor, or OpenShift LightSpeed (OLS).

**Procedure**

1.  Install the MCP server for Red Hat OpenShift Helm chart.
1.  Connect a compatible with Model Context Protocol (MCP) client, such as Claude Code, to the MCP server.
1.  Install the MCP gateway.
1.  Verify the MCP gateway deployment.
1.  Configure the MCP gateway.
1.  Configure RBAC enforcement.
1.  Revoke access to Custom Resources.
1.  Set up the MCP gateway authentication.
1.  Set up MCP gateway authorization.