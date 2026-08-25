{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.9.2 {id="compliance-operator-release-notes-1-9-2_{{ context }}"}

OpenShift Compliance Operator 1.9.2 is now available. The `stable` update channel tracks and receives updates for the Compliance Operator. For more information, see [Updating the Compliance Operator](/security/compliance_operator/co-management/compliance-operator-updating#compliance-operator-updating). The following Red Hat Security Advisory (RHSA) is available: {._abstract}

*   [RHSA-2026:54500 - OpenShift Compliance Operator 1.9.2 bug fix and enhancement update](https://access.redhat.com/errata/RHSA-2026:54500)

## Fixed issues {id="compliance-operator-1-9-2-bug-fixes_{{ context }}"}
*   Before this release, the `compliance_operator_compliance_state` metric could report `NON-COMPLIANT` even when related `ComplianceSuite` and `ComplianceScan` results were `COMPLIANT`, which could trigger false alerts. With this release, the Compliance Operator keeps the metric in synchronization with the relevant suite and removes it when you delete that suite. For more information, see ([CMP-4373](https://redhat.atlassian.net/browse/CMP-4373)).
*   CVE-2026-33811 is resolved in the Compliance Operator 1.9.2 release. ([CVE-2026-33811](https://access.redhat.com/security/cve/cve-2026-33811))
*   CVE-2026-27145 is resolved in the Compliance Operator 1.9.2 release. ([CVE-2026-27145](https://access.redhat.com/security/cve/cve-2026-27145))
*   CVE-2026-42504 is resolved in the Compliance Operator 1.9.2 release. ([CVE-2026-42504](https://access.redhat.com/security/cve/cve-2026-42504))