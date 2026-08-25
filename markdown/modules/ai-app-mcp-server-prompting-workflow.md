{%- set _mod_docs_content_type = "CONCEPT" %}
# MCP server for Red Hat OpenShift Prompting workflow {id="ai-app-mcp-server-model-context-prompting-workflow_{{ context }}"}

By understanding the Model Context Protocol (MCP) prompting workflow you can better troubleshoot issues and optimize how your prompts reach cluster resources through the MCP server, gateway, and a Large Language Model (LLM). {._abstract}

When you prompt an LLM, the execution happens according to the following steps:

1.  User types a prompt: "Are there any pods that keep restarting?".
1.  MCP Host (for example, Claude Desktop): receives your prompt. It looks at its connected MCP servers and sees one has a tool called pods_list.
1.  MCP gateway (If used): If you are in an enterprise environment, the Host talks to the gateway first. The gateway checks "Is this user allowed to access the cluster?" and "Is the cluster currently online?"
1.  MCP server: The gateway (or Host) sends the command to the server. The server runs the actual code (the API call to OpenShift), gets the data, and sends it back.
1.  LLM: Receives that raw data, "reads" it, and gives you the final summary.