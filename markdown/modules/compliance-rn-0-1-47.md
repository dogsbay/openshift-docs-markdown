{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 0.1.47 {id="compliance-operator-release-notes-0-1-47_{{ context }}"}

Release notes for OpenShift Compliance Operator 0.1.47. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 0.1.47:

*   [RHBA-2022:0014 - OpenShift Compliance Operator bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2022:0014)

## New features and enhancements {id="compliance-operator-0-1-47-new-features-and-enhancements_{{ context }}"}

*   The Compliance Operator now supports the following compliance benchmarks for the Payment Card Industry Data Security Standard (PCI DSS):
    *   ocp4-pci-dss
    *   ocp4-pci-dss-node
*   Additional rules and remediations for FedRAMP moderate impact level are added to the OCP4-moderate, OCP4-moderate-node, and rhcos4-moderate profiles.
*   Remediations for KubeletConfig are now available in node-level profiles.

## Bug fixes {id="openshift-compliance-operator-0-1-47-bug-fixes_{{ context }}"}

*   Previously, if your cluster was running {{ product_title }} 4.6 or earlier, remediations for USBGuard-related rules would fail for the moderate profile. This is because the remediations created by the Compliance Operator were based on an older version of USBGuard that did not support drop-in directories. Now, invalid remediations for USBGuard-related rules are not created for clusters running {{ product_title }} 4.6. If your cluster is using {{ product_title }} 4.6, you must manually create remediations for USBGuard-related rules.

    Additionally, remediations are created only for rules that satisfy minimum version requirements. ([**BZ#1965511**](https://bugzilla.redhat.com/show_bug.cgi?id=1965511))
*   Previously, when rendering remediations, the compliance operator would check that the remediation was well-formed by using a regular expression that was too strict. As a result, some remediations, such as those that render `sshd_config`, would not pass the regular expression check and therefore, were not created. The regular expression was found to be unnecessary and removed. Remediations now render correctly. ([**BZ#2033009**](https://bugzilla.redhat.com/show_bug.cgi?id=2033009))