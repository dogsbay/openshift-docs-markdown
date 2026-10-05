{%- set _mod_docs_content_type = "CONCEPT" %}
# Allow the configuration drift to remain and return the node to ready state {id="allow-the-configuration-drift-to-remain-and-return-the-node-to-ready-state-con_{{ context }}"}

When a node’s on-disk configuration intentionally differs from its `MachineConfig`, you can keep the change and clear the degraded condition rather than reverting the node.