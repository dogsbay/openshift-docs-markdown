{%- set _mod_docs_content_type = "CONCEPT" %}
# Reboot a node without disrupting workloads {id="reboot-a-node-without-disrupting-workloads-con_{{ context }}"}

You can reboot a node without an application outage by evacuating its pods first. Pods that need to stay available, including routers and other critical infrastructure, must be spread across enough nodes to tolerate one node going offline.