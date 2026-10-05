{%- set _mod_docs_content_type = "CONCEPT" %}
# Remediate node configuration drift to return the node to ready {id="remediate-node-configuration-drift-to-return-the-node-to-ready-con_{{ context }}"}

Configuration drift happens when a file or unit on a node no longer matches what its `MachineConfig` specifies. The Machine Config Operator marks the node degraded and stops applying further changes until the drift is resolved.