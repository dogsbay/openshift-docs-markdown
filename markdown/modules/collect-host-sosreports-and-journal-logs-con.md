{%- set _mod_docs_content_type = "CONCEPT" %}
# Collect host sosreports and journal logs {id="collect-host-sosreports-and-journal-logs-con_{{ context }}"}

When a problem appears to originate at the host operating system level, you generate a `sosreport` archive on the affected node and collect journal logs from bootstrap and cluster nodes.  {._abstract}

Red&#160;Hat support uses this data to analyze low-level system state and diagnose issues that are not captured by `oc adm must-gather`.