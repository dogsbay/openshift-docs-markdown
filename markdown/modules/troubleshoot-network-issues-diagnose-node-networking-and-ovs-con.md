{%- set _mod_docs_content_type = "CONCEPT" %}
# Diagnose node networking and Open vSwitch {id="troubleshoot-network-issues-diagnose-node-networking-and-ovs-con_{{ context }}"}

When a node has network connectivity problems, you identify the selected network interface and override the default node IP selection logic if needed. You can also configure a second OVS bridge and collect OVS logs to isolate and resolve the underlying issue.