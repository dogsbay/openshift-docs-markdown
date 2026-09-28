{%- set _mod_docs_content_type = "CONCEPT" %}
# Modify the number of unavailable worker nodes {id="modify-number-of-unavailable-worker-nodes-con_{{ context }}"}

The `maxUnavailable` setting of a machine config pool controls how many nodes the Machine Config Operator updates at the same time. Raise the value to roll out configuration changes faster, or lower it to keep more capacity available to applications during the rollout.