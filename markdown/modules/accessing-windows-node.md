{%- set _mod_docs_content_type = "CONCEPT" %}
# Windows node access methods {id="accessing-windows-node_{{ context }}"}

You cannot use the `oc debug node` command to access Windows nodes because it requires running a privileged pod, which Windows does not support. Instead, access a Windows node by using secure shell (SSH) or Remote Desktop Protocol (RDP) through an SSH bastion.