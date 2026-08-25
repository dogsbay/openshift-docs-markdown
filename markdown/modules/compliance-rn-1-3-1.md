{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.3.1 {id="compliance-operator-release-notes-1-3-1_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.3.1. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.3.1:

*   [RHBA-2023:5669 - OpenShift Compliance Operator bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2023:5669)

This update addresses a CVE in an underlying dependency.

## New features and enhancements {id="compliance-operator-1-3-1-new-features-and-enhancements_{{ context }}"}

*   You can install and use the Compliance Operator in an {{ product_title }} cluster running in FIPS mode.
{% include "./snippets/fips-snippet.md" %}

## Known issue {id="compliance-operator-1-3-1-known-issue_{{ context }}"}

*   On a cluster with Windows nodes, some rules will FAIL after auto remediation is applied because the Windows nodes are not skipped by the compliance scan. This differs from the expected results because the Windows nodes must be skipped when scanning. ([**OCPBUGS-7355**](https://issues.redhat.com/browse/OCPBUGS-7355))