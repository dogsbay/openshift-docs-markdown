{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the kernel type in a node pool {id="change-kernel-type-in-a-nodepool-con_{{ context }}"}

You can switch the nodes in a pool to the real-time kernel by creating a machine config that enables the `kernel-rt` package. The real-time kernel supports systems that have extremely high determinism requirements.