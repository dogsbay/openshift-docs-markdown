{%- set _mod_docs_content_type = "CONCEPT" %}
# Load custom firmware blobs onto my nodes {id="load-custom-firmware-blobs-onto-my-nodes-con_{{ context }}"}

You can add firmware blobs that are not in the {{ op_system }} base image by writing them to the nodes with a machine config. The same machine config points the kernel firmware search path at the directory that holds the blobs.