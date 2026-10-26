{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ VirtProductName }} pod logs {id="virt-troubleshooting-pod-logs_{{ context }}"}

To diagnose issues and monitor {{ VirtProductName }} pods, you can view logs by using the web console or the CLI. {._abstract}

Pod logs exist only while the pod exists. If a container restarts within a pod, you can still retrieve the logs of the earlier container, but the cluster discards the logs when it replaces the pod itself. For evidence that must survive pod replacement, or that spans several virtual machines (VMs) or nodes, use aggregated logs instead.