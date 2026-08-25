{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Network Observability CLI {id="network-observability-netoberv-cli-about_{{ context }}"}

Use the Network Observability CLI (`oc netobserv`) to quickly debug and troubleshoot networking issues. This tool provides instant, live insight into flows and packets without installing the Network Observability Operator. {._abstract}

The Network Observability CLI is a flow and packet visualization tool that relies on eBPF agents to stream collected data to an ephemeral collector pod. It requires no persistent storage during the capture. After the run, the output is transferred to your local machine.


:::important

CLI capture is meant to run only for short durations, such as 8-10 minutes. If it runs for too long, it can be difficult to delete the running process.

:::