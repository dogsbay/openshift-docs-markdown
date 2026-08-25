{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.3.3 {id="file-integrity-operator-release-notes-1-3-3_{{ context }}"}

Release notes for OpenShift File Integrity Operator 1.3.3. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 1.3.3:

*   [RHBA-2023:5652 OpenShift File Integrity Operator Bug Fix and Enhancement Update](https://access.redhat.com/errata/RHBA-2023:5652)

This update addresses a CVE in an underlying dependency.

## New features and enhancements {id="file-integrity-operator-1-3-3-new-features-and-enhancements_{{ context }}"}

*   You can install and use the File Integrity Operator in an {{ product_title }} cluster running in FIPS mode.
    {% include "./snippets/fips-snippet.md" %}

## Bug fixes {id="file-integrity-operator-1-3-3-bug-fixes_{{ context }}"}

*   Before this update, some FIO pods with private default mount propagation in combination with `hostPath: path: /` volume mounts would break the CSI driver relying on multipath. This problem has been fixed and the CSI driver works correctly. ([Some OpenShift Operator pods blocking unmounting of CSI volumes when multipath is in use](https://access.redhat.com/solutions/7017081))
*   This update resolves CVE-2023-39325. ([**CVE-2023-39325**](https://access.redhat.com/security/cve/CVE-2023-39325))