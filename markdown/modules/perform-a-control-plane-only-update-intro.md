{%- set _mod_docs_content_type = "CONCEPT" %}
# Perform a Control Plane Only update {id="perform-a-control-plane-only-update-intro_{{ context }}"}

A control plane only update updates the control plane without restarting worker nodes, reducing total update duration. You can perform a control plane only update between two Extended Update Support (EUS) versions, skipping intermediate minor versions.