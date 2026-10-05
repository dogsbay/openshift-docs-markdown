{%- set _mod_docs_content_type = "CONCEPT" %}
# Reference image registry configuration {id="reference-image-registry-configuration-con_{{ context }}"}

The integrated image registry is configured through the `Config` custom resource that the Image Registry Operator reconciles. Its fields control the management state of the registry, how registry pods are spread across availability zones, which route exposes the registry, what certificate authorities it trusts, and which storage backend it writes to. {._abstract}

Use these references to look up a configuration parameter and its accepted values before you change the registry. Platform-specific storage parameters are documented with the storage configuration procedures for each platform.