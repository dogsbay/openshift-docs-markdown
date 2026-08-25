{%- set _mod_docs_content_type = "CONCEPT" %}
# CRD upgrades {id="olm-dependency-resolution-crd-upgrades_{{ context }}"}

Operator Lifecycle Manager (OLM) upgrades a custom resource definition (CRD) immediately if a single cluster service version (CSV) owns it. When multiple CSVs share ownership, OLM upgrades the CRD only after verifying compatibility with earlier versions.