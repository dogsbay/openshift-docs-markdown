{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 0.1.30 {id="file-integrity-operator-release-notes-0-1-30_{{ context }}"}

Release notes for OpenShift File Integrity Operator 0.1.30. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 0.1.30:

*   [RHBA-2022:5538 OpenShift File Integrity Operator Bug Fix and Enhancement Update](https://access.redhat.com/errata/RHBA-2022:5538)

## New features and enhancements {id="file-integrity-operator-0-1-30-new-features-and-enhancements_{{ context }}"}

*   The File Integrity Operator is now supported on the following architectures:
    *   {{ ibm_power_name }}
    *   {{ ibm_z_name }} and {{ ibm_linuxone_name }}

## Bug fixes {id="file-integrity-operator-0-1-30-bug-fixes_{{ context }}"}

*   Before this update, alerts issued by the File Integrity Operator did not set a namespace, making it difficult to understand where the alert originated. Now, the Operator sets the appropriate namespace, increasing understanding of the alert. ([**BZ#2101393**](https://bugzilla.redhat.com/show_bug.cgi?id=2101393))