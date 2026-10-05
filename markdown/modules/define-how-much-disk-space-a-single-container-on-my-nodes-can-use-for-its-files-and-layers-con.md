{%- set _mod_docs_content_type = "CONCEPT" %}
# Define how much disk space a single container can use {id="define-how-much-disk-space-a-single-container-on-my-nodes-can-use-for-its-files-and-layers-con_{{ context }}"}

CRI-O caps the size of a container’s writable overlay layer so that one container cannot fill the node filesystem. You change that cap through a `ContainerRuntimeConfig` object.