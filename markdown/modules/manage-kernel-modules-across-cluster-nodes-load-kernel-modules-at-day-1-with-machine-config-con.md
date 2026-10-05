{%- set _mod_docs_content_type = "CONCEPT" %}
# Load kernel modules at Day 1 with Machine Config {id="manage-kernel-modules-across-cluster-nodes-load-kernel-modules-at-day-1-with-machine-config-con_{{ context }}"}

To load a kernel module before the kubelet starts, you deliver it through a `MachineConfig` object that targets a machine config pool. The Machine Config Operator applies the configuration as each node boots.