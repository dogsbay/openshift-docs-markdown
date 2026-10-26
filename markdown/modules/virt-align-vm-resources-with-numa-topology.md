{%- set _mod_docs_content_type = "CONCEPT" %}
# Align VM resources with NUMA topology {id="virt-align-vm-resources-with-numa-topology_{{ context }}"}

Keep the CPUs and memory of a virtual machine (VM) in the same non-uniform memory access (NUMA) zone. Latency-sensitive workloads then avoid the performance cost of reaching across zones.