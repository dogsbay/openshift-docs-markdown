{%- set _mod_docs_content_type = "CONCEPT" %}
# Enhance user authentication on your nodes {id="enhance-user-authentication-on-my-nodes-con_{{ context }}"}

Node-level authentication controls who can log in to the underlying host rather than to the cluster API. You can harden it by managing the core user password and by adding {{ op_system_base_full }} authentication extensions to a machine config pool through a `MachineConfig` object.