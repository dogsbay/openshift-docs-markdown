{%- set _mod_docs_content_type = "CONCEPT" %}
# Analyze logs and events {id="virt-analyze-logs-and-events_{{ context }}"}

Review logs, events, and error messages to identify the root cause of a cluster or virtual machine issue. {._abstract}

{{ VirtProductName }} records diagnostic evidence in layers, and the layer you start from depends on the symptom. The platform records events for each virtual machine (VM) and the resources it depends on. The `virt-launcher` pod that runs each VM keeps its own logs. The guest operating system keeps logs that you can read only after you configure access to them. A VM that never starts, a VM that starts and then misbehaves, and a disk that never finishes importing each leave evidence in a different place.

Working outward from the symptom is faster than reading everything. Platform events confirm whether the cluster accepted, scheduled, and started a workload at all. Pod logs explain failures between scheduling and guest boot. Guest system logs explain what happens after the guest boots. When an issue spans several VMs or nodes, or when the cluster has already replaced a short-lived pod, aggregated logs are the only place where the evidence survives. Storage problems report separately again: a disk that fails to import or clone records its own conditions and events, even when the VM shows no error.

You can reach each of these sources from the {{ product_title }} web console or the {{ oc_first }}.

**Additional resources**
{._additional-resources}

*   [{{ product_title }} events](/nodes/clusters/nodes-containers-events#nodes-containers-events)
*   [List of events](/nodes/clusters/nodes-containers-events#nodes-containers-events-list_nodes-containers-events)
*   [Connecting to virtual machine consoles](/virt/managing_vms/virt-accessing-vm-consoles#virt-accessing-vm-consoles)
*   [LogQL log queries](https://grafana.com/docs/loki/latest/logql/log_queries/)