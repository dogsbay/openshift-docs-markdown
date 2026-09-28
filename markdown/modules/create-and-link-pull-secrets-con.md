{%- set _mod_docs_content_type = "CONCEPT" %}
# Create and link pull secrets {id="create-and-link-pull-secrets-con_{{ context }}"}

A pull secret holds the registry credentials that a workload needs to pull images from a secured registry. After you create the secret from your registry authentication file, you link it to a service account or reference it directly from the pod so that the pull succeeds.