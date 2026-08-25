{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.6.0 {id="compliance-operator-release-notes-1-6-0_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.6.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.6.0:

*   [RHBA-2024:6761 - OpenShift Compliance Operator 1.6.0 bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2024:6761)

## New features and enhancements {id="compliance-operator-1-6-0-new-features-and-enhancements_{{ context }}"}

*   The Compliance Operator now contains supported profiles for Payment Card Industry Data Security Standard (PCI-DSS) version 4. For more information, see [Supported compliance profiles](/security/compliance_operator/co-scans/compliance-operator-supported-profiles#compliance-supported-profiles_compliance-operator-supported-profiles).
*   The Compliance Operator now contains supported profiles for Defense Information Systems Agency Security Technical Implementation Guide (DISA STIG) V2R1. For more information, see [Supported compliance profiles](/security/compliance_operator/co-scans/compliance-operator-supported-profiles#compliance-supported-profiles_compliance-operator-supported-profiles).
*   A `must-gather` extension is now available for the Compliance Operator installed on `x86`, `ppc64le`, and `s390x` architectures. The `must-gather` tool provides crucial configuration details to Red Hat Customer Support and engineering. For more information, see [Using the must-gather tool for the Compliance Operator](/security/compliance_operator/co-support#compliance-must-gather_co-support).

## Bug fixes {id="compliance-operator-1-6-0-bug-fixes_{{ context }}"}

*   Before this release, a misleading description in the `ocp4-route-ip-whitelist` rule resulted in misunderstanding, causing potential for misconfigurations. With this update, the rule is now more clearly defined. ([CMP-2485](https://issues.redhat.com/browse/CMP-2485))
*   Previously, the reporting of all of the `ComplianceCheckResults` for a `DONE` status `ComplianceScan` was incomplete. With this update, annotation has been added to report the number of total  `ComplianceCheckResults` for a `ComplianceScan` with a `DONE` status. ([CMP-2615](https://issues.redhat.com/browse/CMP-2615))
*   Previously, the `ocp4-cis-scc-limit-container-allowed-capabilities` rule description contained ambiguous guidelines, leading to confusion among users. With this update, the rule description and actionable steps are clarified. ([OCPBUGS-17828](https://issues.redhat.com/browse/OCPBUGS-17828))
*   Before this update, sysctl configurations caused certain auto remediations for RHCOS4 rules to fail scans in affected clusters. With this update, the correct sysctl settings are applied and RHCOS4 rules for FedRAMP High profiles pass scans correctly. ([OCPBUGS-19690](https://issues.redhat.com/browse/OCPBUGS-19690))
*   Before this update, an issue with a `jq` filter caused errors with the `rhacs-operator-controller-manager` deployment during compliance checks. With this update, the `jq` filter expression is updated and the `rhacs-operator-controller-manager` deployment is exempt from compliance checks pertaining to container resource limits, eliminating false positive results. ([OCPBUGS-19690](https://issues.redhat.com/browse/OCPBUGS-19690))
*   Before this update, `rhcos4-high` and `rhcos4-moderate` profiles checked values of an incorrectly titled configuration file. As a result, some scan checks could fail. With this update, the `rhcos4` profiles now check the correct configuration file and scans pass correctly. ([OCPBUGS-31674](https://issues.redhat.com/browse/OCPBUGS-31674))
*   Previously, the `accessokenInactivityTimeoutSeconds` variable used in the `oauthclient-inactivity-timeout` rule was immutable, leading to a `FAIL` status when performing DISA STIG scans. With this update, proper enforcement of the `accessTokenInactivityTimeoutSeconds` variable operates correctly and a `PASS` status is now possible. ([OCPBUGS-32551](https://issues.redhat.com/browse/OCPBUGS-32551))
*   Before this update, some annotations for rules were not updated, displaying the incorrect control standards. With this update, annotations for rules are updated correctly, ensuring the correct control standards are displayed. ([OCPBUGS-34982](https://issues.redhat.com/browse/OCPBUGS-34982))
*   Previously, when upgrading to Compliance Operator 1.5.1, an incorrectly referenced secret in a `ServiceMonitor` configuration caused integration issues with the Prometheus Operator. With this update, the Compliance Operator will accurately reference the secret containing the token for `ServiceMonitor` metrics. ([OCPBUGS-39417](https://issues.redhat.com/browse/OCPBUGS-39417))