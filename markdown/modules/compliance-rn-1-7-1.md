{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.7.1 {id="compliance-operator-release-notes-1-7-1_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.7.1. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.7.1:

*   [RHBA-2025:14639 - OpenShift Compliance Operator 1.7.1 bug fix update](https://access.redhat.com/errata/RHBA-2025:14639)


:::note

The OpenShift Compliance Operator 1.7.1 supports PCI-DSS versions 3.2.1 and 4.0.0 on {{ ibm_z_name }} (`s390x`) architecture.

:::


## Bug fixes {id="compliance-operator-1-7-1-bug-fixes_{{ context }}"}

*   Previously, the Compliance Operator’s `pauser` container could be terminated due to running out of memory, showing the status `OOMKilled`. With this update, the memory limit for the `pauser` container is increased to prevent the error and improve overall stability. ([OCPBUGS-50924](https://issues.redhat.com/browse/OCPBUGS-50924))