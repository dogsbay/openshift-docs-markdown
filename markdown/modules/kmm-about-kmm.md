{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Kernel Module Management Operator {id="about-kmm_{{ context }}"}

The Kernel Module Management (KMM) Operator on {{ product_title }} manages the full lifecycle of out-of-tree kernel modules and device plugins, from build and signing through deployment. You can use `Module` custom resources (CRs)to define module loaders, device plugins, and version-specific build instructions across kernel upgrades.