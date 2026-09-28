{%- set _mod_docs_content_type = "CONCEPT" %}
# Expose the registry securely {id="expose-the-registry-securely-con_{{ context }}"}

By default, the {{ product_registry }} is secured during cluster installation so that it serves traffic over TLS, but it is not exposed outside the cluster. To push and pull images from outside, you create a route so that external clients can authenticate to the registry and use it.