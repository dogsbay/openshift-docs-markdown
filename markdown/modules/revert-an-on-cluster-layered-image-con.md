{%- set _mod_docs_content_type = "CONCEPT" %}
# Revert any changes I made by using the on-cluster mode of {{ image_mode_os_lower }} {id="revert-an-on-cluster-layered-image-con_{{ context }}"}

When you no longer need the software or drivers that you added with the on-cluster mode of {{ image_mode_os_lower }}, remove the layer from a node by removing the node label. The node then reboots with the base image.