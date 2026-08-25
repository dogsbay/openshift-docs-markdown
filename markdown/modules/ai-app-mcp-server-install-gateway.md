{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the MCP gateway {id="ai-app-mcp-server-install-gateway_{{ context }}"}

Install the Model Context Protocol (MCP) gateway to provide a secure, centralized entry point that enforces authentication, authorization, and rate limiting for all MCP server traffic. {._abstract}

**Prerequisites**

*   Access to OpenShift console with admin rights.
*   The MCP server Helm chart is installed.
*   MCP-compatible client connected.

**Procedure**

1.  Install the MCP gateway.

    For information about how to install the MCP gateway, see "Install the MCP gateway (Red Hat Connectivity Link)".

    After installation, the controller automatically creates the HTTPRoute for gateway access. The MCP gateway acts as a reverse proxy that aggregates multiple MCP servers into a single endpoint and provides a layer for authentication and rate limiting.