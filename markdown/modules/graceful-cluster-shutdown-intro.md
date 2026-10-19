{%- set _mod_docs_content_type = "CONCEPT" %}
# Shut down the cluster gracefully {id="graceful-shutdown-cluster-intro_{{ context }}"}

You can shut down your {{ product_title }} cluster for planned maintenance by cordoning nodes, draining workloads, and stopping nodes in order. Graceful shutdown preserves cluster state so you can restart the cluster when maintenance is complete.