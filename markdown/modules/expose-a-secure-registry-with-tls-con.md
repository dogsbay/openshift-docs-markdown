{%- set _mod_docs_content_type = "CONCEPT" %}
# Expose a secure registry with TLS {id="expose-a-secure-registry-with-tls-con_{{ context }}"}

When you expose the {{ product_registry }} outside the cluster, the route must serve the registry’s TLS certificate so that clients can verify it. Exposing a secure registry manually creates that route with re-encrypt termination.