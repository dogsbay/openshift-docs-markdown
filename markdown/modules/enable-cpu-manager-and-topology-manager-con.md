{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable CPU Manager and Topology Manager {id="enable-cpu-manager-and-topology-manager-con_{{ context }}"}

CPU Manager constrains workloads to specific CPUs, and Topology Manager aligns CPU, memory, and device allocations on the same NUMA node. Enable both to give latency-sensitive pods predictable access to node hardware.