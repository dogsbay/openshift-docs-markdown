{%- set _mod_docs_content_type = "CONCEPT" %}
# Accessing a Windows node {id="accessing-windows-node_{{ context }}"}

Windows nodes cannot be accessed using the `oc debug node` command; the command requires running a privileged pod on the node, which is not yet supported for Windows. Instead, a Windows node can be accessed using a secure shell (SSH) or Remote Desktop Protocol (RDP). An SSH bastion is required for both methods.