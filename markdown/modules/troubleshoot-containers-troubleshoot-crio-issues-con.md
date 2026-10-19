{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshoot CRI-O issues {id="troubleshoot-containers-troubleshoot-crio-issues-con_{{ context }}"}

When containers fail to start or the CRI-O runtime behaves unexpectedly, you verify the engine status, gather journald unit logs, and clean CRI-O storage to resolve the issue. These procedures help you diagnose low-level container runtime problems on individual cluster nodes.