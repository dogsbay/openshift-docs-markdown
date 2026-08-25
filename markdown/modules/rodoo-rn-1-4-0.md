{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ run_once_operator }} 1.4.0 {id="rodoo-rn-1-4-0_{{ context }}"}

Review the features, enhancements, and advisory for the release of {{ run_once_operator }} 1.4.0. {._abstract}

Issued: 12 February 2026

The following advisory is available for the {{ run_once_operator }} 1.4.0:

*   [RHBA-2026:2649](https://access.redhat.com/errata/RHBA-2026:2649)

## New features and enhancements {id="rodoo-1-4-0-new-features-and-enhancements_{{ context }}"}

*   This release of the {{ run_once_operator }} updates the Kubernetes version to 1.34.
*   Users should set `.spec.managementState: Managed` in {{ run_once_operator }} 1.4.0 custom resources (CR). In a future release, the `spec.managementState` field in the {{ run_once_operator }} CR will be required to be set to `Managed`.

## Bug fixes {id="rodoo-rn-1-4-0-bug-fixes_{{ context }}"}

*   This release of the {{ run_once_operator }} addresses several Common Vulnerabilities and Exposures (CVEs).