{%- set _mod_docs_content_type = "CONCEPT" %}
# Disable symmetric multithreading on your nodes {id="disable-symmetric-multithreading-on-my-nodes-to-improve-security-con_{{ context }}"}

Symmetric multithreading (SMT) lets two threads share a physical core, which some side-channel mitigations require you to disable. You turn SMT off on a machine config pool by adding the appropriate kernel argument through a `MachineConfig` object.