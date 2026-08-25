{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.8.1 {id="compliance-operator-release-notes-1-8-1_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.8.1. {._abstract}

The following Red Hat Security Advisory (RHSA) is available for the OpenShift Compliance Operator 1.8.1:

*   [RHSA-2026:0737 - OpenShift Compliance Operator 1.8.1 bug fix and enhancement update](https://access.redhat.com/errata/RHSA-2026:0737)

## Bug fixes {id="compliance-operator-1-8-1-bug-fixes_{{ context }}"}

*   Before this release, Compliance Operator could cause a privilege escalation due to incorrect permissions on `/etc/passwd`. With this release, the permissions have been corrected. For more information, see ([CVE-2025-7195](https://access.redhat.com/security/cve/cve-2025-7195)).
*   Previously, Compliance Operator scans using rhcos4 profile would incorrectly return `NOT-APPLICABLE` scan results when using {{ op_system_first }} 10 systems. With this release, scans using rhcos4 profiles return `COMPLIANT` and `NON-COMPLIANT` results. For more information, see ([CMP-4034](https://issues.redhat.com/browse/CMP-4034)).