{%- set _mod_docs_content_type = "CONCEPT" %}
# Define the maximum size of the container log file before it is rotated {id="define-the-maximum-size-of-the-container-log-file-before-it-is-rotated-con_{{ context }}"}

CRI-O writes container logs to the node filesystem and rotates them when they reach a size limit. You change that limit by creating a `ContainerRuntimeConfig` object that targets a machine config pool.