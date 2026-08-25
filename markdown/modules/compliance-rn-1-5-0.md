{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.5.0 {id="compliance-operator-release-notes-1-5-0_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.5.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.5.0:

*   [RHBA-2024:3533 - OpenShift Compliance Operator 1.5.0 bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2024:3533)

## New features and enhancements {id="compliance-operator-1-5-0-new-features-and-enhancements_{{ context }}"}

*   With this update, the Compliance Operator provides a unique profile ID for easier programmatic use.  ([**CMP-2450**](https://issues.redhat.com/browse/CMP-2450))
*   With this release, the Compliance Operator is now tested and supported on the ROSA HCP environment. The Compliance Operator loads only Node profiles when running on ROSA HCP. This is because a Red&#160;Hat managed platform restricts access to the control plane, which makes Platform profiles irrelevant to the operator’s function.([**CMP-2581**](https://issues.redhat.com/browse/CMP-2581))

## Bug fixes {id="compliance-operator-1-5-0-bug-fixes_{{ context }}"}

*   CVE-2024-2961 is resolved in the Compliance Operator 1.5.0 release. ([**CVE-2024-2961**](https://access.redhat.com/security/cve/CVE-2024-2961))
*   Previously, for ROSA HCP systems, profile listings were incorrect. This update allows the Compliance Operator to provide correct profile output. ([**OCPBUGS-34535**](https://issues.redhat.com/browse/OCPBUGS-34535))
*   With this release, namespaces can be excluded from the `ocp4-configure-network-policies-namespaces` check by setting the `ocp4-var-network-policies-namespaces-exempt-regex` variable in the tailored profile. ([**CMP-2543**](https://issues.redhat.com/browse/cmp-2543))