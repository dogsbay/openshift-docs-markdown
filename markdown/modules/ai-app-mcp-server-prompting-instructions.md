{%- set _mod_docs_content_type = "CONCEPT" %}
# MCP server for Red Hat OpenShift prompting {id="ai-app-mcp-server-overview-prompting-instructions_{{ context }}"}

Use Model Context Protocol (MCP) server prompts to query a Large Language Model (LLM) to identify and diagnose issues across your {{ product_title }} cluster. {._abstract}


:::note

To ensure that you get the best results when prompting be sure to:

*   Specify the namespace.
 
*   For Red Hat Advanced Cluster Management (ACM) for Kubernetes environments, specify the cluster.

:::


## MCP prompts {id="ai-app-mcp-server-overview-prompting-instructions-prompts_{{ context }}"}
MCP Prompts are predefined templates that guide AI assistants through specific workflows. 

They combine:

*   **Structured guidance**: Step-by-step instructions for common tasks
*   **Parameterization**: Arguments that customize the prompt for specific contexts
*   **Conversation templates**: Preformatted messages that guide the interaction

## Creating custom prompts {id="ai-app-mcp-server-overview-prompting-instructions-custom_{{ context }}"}
Define custom prompts in your `config.toml` file. Code changes and recompilation are not needed.

```toml title="Example custom prompts"
[[prompts]]
name = "check-pod-logs"
title = "Check Pod Logs"
description = "Quick way to check pod logs"

[[prompts.arguments]]
name = "pod_name"
description = "Name of the pod"
required = true

[[prompts.arguments]]
name = "namespace"
description = "Namespace of the pod"
required = false

[[prompts.messages]]
role = "user"
content = "Show me the logs for pod {{pod_name}} in {{namespace}}"

[[prompts.messages]]
role = "assistant"
content = "I'll retrieve and analyze the logs for you."
```

***Configuration reference***

<table>
<thead>
<tr>
  <th colspan="2">Prompt Fields</th>
</tr>
</thead>
<tbody>
<tr>
  <td>name (required)</td>
  <td>Unique identifier for the prompt</td>
</tr>
<tr>
  <td>title (optional)</td>
  <td>Human-readable display name</td>
</tr>
<tr>
  <td>description (required)</td>
  <td>Brief explanation of what the prompt does</td>
</tr>
<tr>
  <td>arguments (optional)</td>
  <td>List of parameters the prompt accepts</td>
</tr>
<tr>
  <td>messages (required)</td>
  <td>Conversation template with role/content pairs</td>
</tr>
<tr>
  <td colspan="2">Argument Fields</td>
</tr>
<tr>
  <td>name (required)</td>
  <td>Argument identifier</td>
</tr>
<tr>
  <td>description (optional)</td>
  <td>Explanation of the argument's purpose</td>
</tr>
<tr>
  <td>required (optional)</td>
  <td>Whether the argument must be provided (default: false)</td>
</tr>
<tr>
  <td colspan="2">Argument Substitution</td>
</tr>
<tr>
  <td colspan="2">Use {{{ argument_name }}} placeholders in message content. The template engine replaces these with actual values when the prompt is called. If an optional argument is not provided, its placeholder is removed from the output.</td>
</tr>
</tbody>
</table>

## Built-in prompts {id="ai-app-mcp-server-overview-prompting-instructions-built-in_{{ context }}"}
The MCP server for Red Hat OpenShift includes several built-in prompts that are always available:

`Cluster-health-check` performs a comprehensive health assessment of your OpenShift cluster.

Arguments:

*   namespace (optional): Limit the health check to a specific namespace. Default: all namespaces.
*   check_events (optional): Include recent warning/error events in the analysis. Values: true or false. Default: true.

What it checks:

*   **Nodes**: Status and conditions (for example, Ready, MemoryPressure, DiskPressure)
*   **Cluster Operators**: Available and degraded status
*   **Pods**: Phase, container statuses, restart counts, and common issues (for example, CrashLoopBackOff, ImagePullBackOff)
*   **Workload Controllers**: Deployments, StatefulSets, and DaemonSets replica status
*   **Persistent Volume Claims**: Binding status
*   **Events**: Recent warning and error events from the last hour

Example usage:

```terminal
Check the health of my cluster
```

Or with specific parameters:
```terminal
Check the health of namespace production
```

You can also skip event checking for faster results:

```terminal
Check the health of my cluster without events
```

The prompt gathers comprehensive diagnostic data and presents it to the LLM for analysis, which provides:

*   Overall health status (Healthy, Warning, or Critical)
*   Critical issues requiring immediate attention
*   Warnings and recommendations
*   Summary by component

## Configuration file location {id="ai-app-mcp-server-overview-prompting-instructions-config-file_{{ context }}"}
Place your prompts in the `config.toml` file used by the MCP server. Specify the config file path by using the `--config flag` when starting the server.

## Toolset prompts {id="ai-app-mcp-server-overview-prompting-instructions-toolset_{{ context }}"}
Some toolsets contain prompts and enabling the toolset enables the prompt(s).

## Prompt merging {id="ai-app-mcp-server-overview-prompting-instructions-merging_{{ context }}"}
When both toolset and config prompts exist, config-defined prompts override toolset prompts with the same name. This allows administrators to customize built-in workflows. Prompts with unique names from both sources are available.