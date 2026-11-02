{%- set _mod_docs_content_type = "CONCEPT" %}
# Adding application manifests to an image for offline use {id="microshift-embed-app-manifests-offline_{{ context }}"}

If you have a simple application that includes a few files for deployment such as manifests, you can add those manifests directly to a {{ op_system_ostree_first }} system image. This method is an alternative to building application RPMs or embedding workload container images. {._abstract}

See "Create a custom file blueprint customization" for an example.