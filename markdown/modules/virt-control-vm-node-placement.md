{%- set _mod_docs_content_type = "CONCEPT" %}
# Control VM node placement {id="virt-control-vm-node-placement_{{ context }}"}

Control which nodes a virtual machine can run on by applying node placement rules to the `VirtualMachine` manifest, so that workloads land on nodes with the hardware they need, stay separated from each other for fault tolerance, and avoid nodes that are reserved for other purposes.