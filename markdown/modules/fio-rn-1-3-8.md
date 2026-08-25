{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.3.8 {id="file-integrity-operator-release-notes-1-3-8_{{ context }}"}

Release notes for OpenShift File Integrity Operator 1.3.8. {._abstract}

The following Red Hat Security Advisory (RHSA) is available for the OpenShift File Integrity Operator 1.3.8:

*   [RHSA-2025:23542 OpenShift File Integrity Operator Update](https://access.redhat.com/errata/RHSA-2025:23542)

## Bug fixes {id="file-integrity-operator-1-3-8-bug-fixes_{{ context }}"}

*   Before this update, the file-integrity-operator pods and the aide pods running the database used by a recently installed File Integrity Operator (FIO) would go into a terminating state, adding error log entries that were not useful. With this release, the pods needed by FIO do not go into terminating state unless a relevant error occurred or they completed their work.  ([**CMP-3757**](https://issues.redhat.com/browse/CMP-3757))
*   This update includes upgraded dependencies in the underlying base images.