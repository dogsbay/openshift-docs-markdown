{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ cli_manager }} 0.2.0 (Technology Preview) {id="cli-manager-rn-0-2-0_{{ context }}"}

Review the features, enhancements, and advisory for the Technology Preview release of {{ cli_manager }} 0.2.0. {._abstract}

Issued: 9 December 2025

The following advisory is available for the {{ cli_manager }} 0.2.0:

*   [RHBA-2025:22803](https://access.redhat.com/errata/RHBA-2025:22803)

## New features and enhancements {id="cli-manager-0-2-0-new-features-and-enhancements_{{ context }}"}

*   This release of the {{ cli_manager }} updates the Kubernetes version to 1.34.
*   The `readOnlyRootFilesystem` flag is set to `true` for additional hardening of {{ product_title }} pods.