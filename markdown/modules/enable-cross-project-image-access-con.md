{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable cross-project image access {id="enable-cross-project-image-access-con_{{ context }}"}

Pods in one project cannot pull images from another project by default. Granting the consuming project’s service account access to the image-holding project lets workloads reference those images without copying them or embedding registry credentials.