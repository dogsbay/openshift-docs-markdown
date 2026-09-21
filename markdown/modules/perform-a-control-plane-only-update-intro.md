{%- set _mod_docs_content_type = "CONCEPT" %}
# Perform a Control Plane Only update {id="perform-a-control-plane-only-update-intro_{{ context }}"}

In a Control Plane Only update, only the control plane portion of {{ product_title }} is updated. This procedure reduces the total update duration and the number of times worker nodes are restarted. You can perform a Control Plane Only update between two Extended Update Support (EUS) versions, skipping one or more intermediate minor versions.