{%- set _mod_docs_content_type = "CONCEPT" %}
# Optimize VM compute resources {id="virt-optimize-vm-compute-resources_{{ context }}"}

Tune CPU and memory allocation for virtual machine (VM) workloads based on the requirements of your environment. {._abstract}

Dedicated CPUs and huge pages reduce latency for an individual VM. Non-uniform memory access (NUMA) alignment keeps the CPUs and memory of a VM in the same zone. If instead you require a greater number of VMs per node, you can overcommit memory and provision swap resources to avoid adding hardware.