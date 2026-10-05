{%- set _mod_docs_content_type = "CONCEPT" %}
# Container Storage Interface volumes {id="container-storage-interface-volumes-con_{{ context }}"}

The Container Storage Interface (CSI) is the standard that lets {{ product_title }} use storage from any vendor that ships a CSI driver. A CSI driver runs as a controller deployment and a node daemon set, and it provisions persistent volumes dynamically from a storage class.