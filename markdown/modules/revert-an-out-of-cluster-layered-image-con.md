{%- set _mod_docs_content_type = "CONCEPT" %}
# Revert any changes I made by using the out-of-cluster mode of {{ image_mode_os_lower }} {id="revert-an-out-of-cluster-layered-image-con_{{ context }}"}

When you no longer need the software or drivers that you added with the out-of-cluster mode of {{ image_mode_os_lower }}, remove the layered image from the affected nodes. The nodes then return to the base image.