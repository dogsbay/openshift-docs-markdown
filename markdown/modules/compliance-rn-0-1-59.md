{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 0.1.59 {id="compliance-operator-release-notes-0-1-59_{{ context }}"}

Release notes for OpenShift Compliance Operator 0.1.59. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 0.1.59:

*   [RHBA-2022:8538 - OpenShift Compliance Operator bug fix update](https://access.redhat.com/errata/RHBA-2022:8538)

## New features and enhancements {id="compliance-operator-0-1-59-new-features-and-enhancements_{{ context }}"}

*   The Compliance Operator now supports Payment Card Industry Data Security Standard (PCI-DSS) `ocp4-pci-dss` and `ocp4-pci-dss-node` profiles on the `ppc64le` architecture.

## Bug fixes {id="compliance-operator-0-1-59-bug-fixes_{{ context }}"}

*   Previously, the Compliance Operator did not support the Payment Card Industry Data Security Standard (PCI DSS) `ocp4-pci-dss` and `ocp4-pci-dss-node` profiles on different architectures such as `ppc64le`. Now, the Compliance Operator supports `ocp4-pci-dss` and `ocp4-pci-dss-node` profiles on the `ppc64le` architecture. ([**OCPBUGS-3252**](https://issues.redhat.com/browse/OCPBUGS-3252))
*   Previously, after the recent update to version 0.1.57, the `rerunner` service account (SA) was no longer owned by the cluster service version (CSV), which caused the SA to be removed during the Operator upgrade. Now, the CSV owns the `rerunner` SA in 0.1.59, and upgrades from any previous version will not result in a missing SA. ([**OCPBUGS-3452**](https://issues.redhat.com/browse/OCPBUGS-3452))