{%- set _mod_docs_content_type = "CONCEPT" %}
# Add software or drivers not available as extensions in the base {{ op_system }} image during cluster installation {id="apply-a-layered-image-during-installation-con_{{ context }}"}

You can extend the base {{ op_system }} image with software or drivers that are not available as extensions by adding a `MachineOSConfig` object to your installation manifests. The layered image is built and applied during installation, so the nodes start with the software already in place.