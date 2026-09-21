{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand Cluster Samples Operator behavior {id="understand-operator-behavior-con_{{ context }}"}

The Cluster Samples Operator runs in a management state that determines whether it installs and updates samples, and it retries image stream imports that fail. Understanding this behavior helps you predict what the Operator does on your cluster.