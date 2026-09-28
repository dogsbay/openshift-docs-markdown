{%- set _mod_docs_content_type = "CONCEPT" %}
# Expose the default image registry manually {id="expose-the-default-image-registry-manually-con_{{ context }}"}

The {{ product_registry }} is not exposed outside the cluster when the cluster is installed. Exposing it manually creates the route that external clients need in order to reach the registry.