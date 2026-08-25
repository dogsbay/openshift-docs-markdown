{%- set _mod_docs_content_type = "REFERENCE" %}

# Allowed CRD upgrade changes {id="allowed-crd-changes_{{ context }}"}

Reference which custom resource definition (CRD) changes are compatible with earlier versions to avoid unexpected halts during the upgrade safety preflight check. {._abstract}

The following CRD changes are compatible with earlier versions and pass the upgrade safety preflight check:

*   Adding new values to an existing enum field
*   Changing an existing required field to optional in an existing version
*   Decreasing the minimum value of an existing field in an existing version
*   Increasing the maximum value of an existing field in an existing version
*   Adding a new version of the CRD without modifying existing versions