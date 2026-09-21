{%- set _mod_docs_content_type = "CONCEPT" %}
# Customize the kernel behavior on your nodes {id="understanding-how-to-customize-the-kernel-behavior-on-my-nodes-to-meet-specific-needs-con_{{ context }}"}

You can create `MachineConfig` objects that add kernel arguments, install a real-time kernel, or add extensions to the nodes in a machine config pool. These changes let you enable debugging, security, or performance settings on a specific set of nodes rather than across the whole cluster.