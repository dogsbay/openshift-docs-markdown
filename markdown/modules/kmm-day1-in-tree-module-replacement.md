{%- set _mod_docs_content_type = "CONCEPT" %}
# In-tree module replacement {id="kmm-day1-in-tree-module-replacement_{{ context }}"}

Day 1 kernel module loading in {{ product_title }} replaces in-tree kernel modules with out-of-tree (OOT) versions when present. If the in-tree module is not loaded, KMM loads the OOT module without affecting the flow.