{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ cert_manager_operator }} 1.19.1 {id="cert-manager-operator-release-notes-1-19-1_{{ context }}"}

Review the release notes for the {{ cert_manager_operator }} 1.19.1 to learn what is new and updated with this release. {._abstract}

Issued: 13 August 2026

The following advisories are available for the {{ cert_manager_operator }} for {{ product_title }} 1.19.1:

*   [RHSA-2026:54527](https://access.redhat.com/errata/RHSA-2026:54527)
*   [RHBA-2026:54529](https://access.redhat.com/errata/RHBA-2026:54529)
*   [RHSA-2026:54531](https://access.redhat.com/errata/RHSA-2026:54531)
*   [RHBA-2026:54551](https://access.redhat.com/errata/RHBA-2026:54551)

Version `v1.19.6` of the {{ cert_manager_operator }} is based on the upstream cert-manager version `v1.19.6`. For more information, see the [cert-manager project release notes for v1.19.6](https://cert-manager.io/docs/releases/release-notes/release-notes-1.19#v1196).

## Fixed issues {id="cert-manager-operator-1-19-1-fixed-issues_{{ context }}"}

*   Before this update, the {{ cert_manager_operator }} installation failed on clusters without the console capability because the OLM bundle included `ConsoleYAMLSample` and `ConsoleQuickStart` resources that require the `console.openshift.io` APIs. With this release, the Operator creates the console resources at runtime only when the required APIs are available, ensuring successful installation. ([OCPBUGS-85579](https://redhat.atlassian.net/browse/OCPBUGS-85579))

## CVEs {id="cert-manager-operator-1-19-1-cves_{{ context }}"}

*   [CVE-2026-33186](https://access.redhat.com/security/cve/CVE-2026-33186)
*   [CVE-2026-46595](https://access.redhat.com/security/cve/CVE-2026-46595)
*   [CVE-2026-39821](https://access.redhat.com/security/cve/CVE-2026-39821)
*   [CVE-2026-39828](https://access.redhat.com/security/cve/CVE-2026-39828)
*   [CVE-2026-39830](https://access.redhat.com/security/cve/CVE-2026-39830)
*   [CVE-2026-42499](https://access.redhat.com/security/cve/CVE-2026-42499)
*   [CVE-2026-25681](https://access.redhat.com/security/cve/CVE-2026-25681)
*   [CVE-2026-39820](https://access.redhat.com/security/cve/CVE-2026-39820)
*   [CVE-2026-46597](https://access.redhat.com/security/cve/CVE-2026-46597)
*   [CVE-2026-27145](https://access.redhat.com/security/cve/CVE-2026-27145)
*   [CVE-2026-42504](https://access.redhat.com/security/cve/CVE-2026-42504)
*   [CVE-2026-27136](https://access.redhat.com/security/cve/CVE-2026-27136)
*   [CVE-2026-42502](https://access.redhat.com/security/cve/CVE-2026-42502)