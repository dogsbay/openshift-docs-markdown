{%- set _mod_docs_content_type = "CONCEPT" %}
# Collect console logs from machines that fail to boot {id="collect-console-logs-from-machines-that-fail-to-boot-con_{{ context }}"}

A machine that does not finish booting never joins the cluster, so the usual node logs do not exist. Boot diagnostics store the console output from the virtual machine, which shows how far the boot got and where it stopped.