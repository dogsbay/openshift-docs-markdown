{%- set _mod_docs_content_type = "CONCEPT" %}
# Exclusive CPU use for predictable VM latency {id="virt-about-dedicated-resources_{{ context }}"}

Dedicated resources give a virtual machine (VM) workload exclusive use of its CPUs, which improves VM performance and the accuracy of latency predictions. {._abstract}

When you enable dedicated resources, the VM’s workload is pinned to specific CPUs on the node, and no other process is scheduled on those CPUs. The node must have CPU Manager configured.