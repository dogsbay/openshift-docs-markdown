{%- set _mod_docs_content_type = "CONCEPT" %}
# Limit the number of process IDs that a pod can use {id="limit-the-number-of-process-ids-pids-that-a-pod-can-use-on-my-nodes-to-prevent-pid-exhaustion-con_{{ context }}"}

A single pod that spawns unbounded processes can exhaust the process ID space on its node and destabilize every other workload there. You cap the number of PIDs a pod can use through the kubelet configuration.