{%- set _mod_docs_content_type = "CONCEPT" %}
# Modify the object needed to use the on-cluster mode of {{ image_mode_os_lower }} {id="modify-an-on-cluster-layered-image-con_{{ context }}"}

When you use the on-cluster mode of {{ image_mode_os_lower }}, you can edit the `MachineOSConfig` object to add or remove software, update passwords, or change image repositories. Editing the object keeps the layered image aligned with changes in your environment.