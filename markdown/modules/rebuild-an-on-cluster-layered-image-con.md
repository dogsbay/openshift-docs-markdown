{%- set _mod_docs_content_type = "CONCEPT" %}
# Force a rebuild of the object used with the on-cluster mode of {{ image_mode_os_lower }} {id="rebuild-an-on-cluster-layered-image-con_{{ context }}"}

Some changes to a `MachineOSConfig` object do not trigger an automatic rebuild of the layered image. When you make such a change, you can start a rebuild manually so that the change reaches your nodes.