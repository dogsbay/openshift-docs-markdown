{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure additional trust stores {id="configure-additional-trust-stores-con_{{ context }}"}

A cluster cannot pull from a registry whose certificate is signed by a private certificate authority until that authority is trusted. You can add certificate authorities to the cluster trust store by referencing a config map from the `Image` custom resource.