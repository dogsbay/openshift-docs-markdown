{%- set _mod_docs_content_type = "CONCEPT" %}
# About CSI {id="csi-about_{{ context }}"}

The Container Storage Interface (CSI) enables storage vendors to deliver plugins through a standard interface without modifying Kubernetes core code, replacing traditional embedded storage drivers. {._abstract}

CSI Operators give {{ product_title }} users storage options, such as volume snapshots, that are not possible with in-tree volume plugins.