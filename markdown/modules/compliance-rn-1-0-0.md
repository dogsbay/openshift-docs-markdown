{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.0.0 {id="compliance-operator-release-notes-1-0-0_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.0.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.0.0:

*   [RHBA-2023:1682 - OpenShift Compliance Operator bug fix update](https://access.redhat.com/errata/RHBA-2023:1682)

## New features and enhancements {id="compliance-operator-1-0-0-new-features-and-enhancements_{{ context }}"}

*   The Compliance Operator is now stable and the release channel is upgraded to `stable`. Future releases will follow [Semantic Versioning](https://semver.org/). To access the latest release, see [Updating the Compliance Operator](/security/compliance_operator/co-management/compliance-operator-updating#olm-preparing-upgrade_compliance-operator-updating).

## Bug fixes {id="compliance-operator-1-0-0-bug-fixes_{{ context }}"}

*   Before this update, the compliance_operator_compliance_scan_error_total metric had an ERROR label with a different value for each error message. With this update, the compliance_operator_compliance_scan_error_total metric does not increase in values. ([**OCPBUGS-1803**](https://issues.redhat.com/browse/OCPBUGS-1803))
*   Before this update, the `ocp4-api-server-audit-log-maxsize` rule would result in a `FAIL` state. With this update, the error message has been removed from the metric, decreasing the cardinality of the metric consistent with best practices. ([**OCPBUGS-7520**](https://issues.redhat.com/browse/OCPBUGS-7520))
*   Before this update, the `rhcos4-enable-fips-mode` rule description was misleading that FIPS could be enabled after installation. With this update, the `rhcos4-enable-fips-mode` rule description clarifies that FIPS must be enabled at install time. ([**OCPBUGS-8358**](https://issues.redhat.com/browse/OCPBUGS-8358))