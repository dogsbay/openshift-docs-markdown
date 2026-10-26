{%- set _mod_docs_content_type = "CONCEPT" %}
# Allocate compute resources for VMs {id="virt-allocate-compute-resources-for-vms_{{ context }}"}

Give each virtual machine (VM) the CPU and network capacity that its workload needs. You can assign a VM exclusive use of whole physical cores, process its network traffic across several virtual CPUs, or overcommit physical CPUs so that more VMs fit on each node. {._abstract}

You can also tune how many API requests {{ VirtProductName }} sends to the API server, so that operations on a large number of VMs are not throttled.