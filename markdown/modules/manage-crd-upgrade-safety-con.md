{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage custom resource definition upgrade safety {id="manage-crd-upgrade-safety-con_{{ context }}"}

When you update a custom resource definition (CRD) provided by a cluster extension, {{ olmv1_first }} runs a CRD upgrade safety preflight check to ensure compatibility with earlier versions. {._abstract}

The CRD update must pass the validation checks before the change can progress on a cluster.