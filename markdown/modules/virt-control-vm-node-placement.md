{%- set _mod_docs_content_type = "CONCEPT" %}
# Control VM node placement {id="virt-control-vm-node-placement_{{ context }}"}

You can use node placement rules to control which nodes a virtual machine (VM) can run on. Add node placement rules to the `VirtualMachine` manifest to spread VMs across nodes for fault tolerance, to keep related VMs on the same node for performance, or to place a VM on a node that has the hardware the VM requires. {._abstract}

Choose from node selectors, node affinity, pod affinity and anti-affinity, and tolerations that let a VM run on nodes that a taint reserves. You can also run a VM under a custom scheduler instead of the default scheduler.