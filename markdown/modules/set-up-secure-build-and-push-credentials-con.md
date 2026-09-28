{%- set _mod_docs_content_type = "CONCEPT" %}
# Set up secure build and push credentials {id="set-up-secure-build-and-push-credentials-con_{{ context }}"}

Kernel Module Management (KMM) builds kernel module images in the cluster and pushes them to a registry. When either the base image or the target registry is private, the build needs credentials, which you supply as secrets referenced from the `Module` resource.