{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand secrets management {id="understand-secrets-management-con_{{ context }}"}

`Secret` objects let you provide sensitive information such as passwords, keys, and certificates to applications without exposing it in plain text in a workload definition. Understanding how the platform stores, projects, and rotates that data is the basis for choosing between built-in secrets and an external secrets management Operator.