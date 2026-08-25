{%- set _mod_docs_content_type = "REFERENCE" %}
# Validation checklist for installation {id="validation-checklist-for-installation_{{ context }}"}

Ensure that all required steps are completed before installing {{ product_title }}. {._abstract}

*   [ ] {{ product_title }} installer has been retrieved.
*   [ ] {{ product_title }} installer has been extracted.
*   [ ] Required parameters for the `install-config.yaml` have been configured.
*   [ ] The `hosts` parameter for the `install-config.yaml` has been configured.
*   [ ] The `bmc` parameter for the `install-config.yaml` has been configured.
*   [ ] Conventions for the values configured in the `bmc` `address` field have been applied.
*   [ ] Created the {{ product_title }} manifests.
*   [ ] (Optional) Deployed routers on compute nodes.
*   [ ] (Optional) Created a disconnected registry.
*   [ ] (Optional) Validate disconnected registry settings if in use.