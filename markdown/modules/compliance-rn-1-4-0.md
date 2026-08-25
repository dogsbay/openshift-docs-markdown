{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.4.0 {id="compliance-operator-release-notes-1-4-0_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.4.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.4.0:

*   [RHBA-2023:7658 - OpenShift Compliance Operator bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2023:7658)

## New features and enhancements {id="compliance-operator-1-4-0-new-features-and-enhancements_{{ context }}"}

*   With this update, clusters which use custom node pools outside the default `worker` and `master` node pools no longer need to supply additional variables to ensure Compliance Operator aggregates the configuration file for that node pool.
*   Users can now pause scan schedules by setting the `ScanSetting.suspend` attribute to `True`. This allows users to suspend a scan schedule and reactivate it without the need to delete and re-create the `ScanSettingBinding`. This simplifies pausing scan schedules during maintenance periods. ([**CMP-2123**](https://issues.redhat.com/browse/CMP-2123))
*   Compliance Operator now supports an optional `version` attribute on `Profile` custom resources. ([**CMP-2125**](https://issues.redhat.com/browse/CMP-2125))
*   Compliance Operator now supports profile names in `ComplianceRules`. ([**CMP-2126**](https://issues.redhat.com/browse/CMP-2126))
*   Compliance Operator compatibility with improved `cronjob` API improvements is available in this release. ([**CMP-2310**](https://issues.redhat.com/browse/CMP-2310))

## Bug fixes {id="compliance-operator-1-4-0-bug-fixes_{{ context }}"}

*   Previously, on a cluster with Windows nodes, some rules will FAIL after auto remediation is applied because the Windows nodes were not skipped by the compliance scan. With this release, Windows nodes are correctly skipped when scanning. ([**OCPBUGS-7355**](https://issues.redhat.com/browse/OCPBUGS-7355))
*   With this update, `rprivate` default mount propagation is now handled correctly for root volume mounts of pods that rely on multipathing. ([**OCPBUGS-17494**](https://issues.redhat.com/browse/OCPBUGS-17494))
*   Previously, the Compliance Operator would generate a remediation for `coreos_vsyscall_kernel_argument` without reconciling the rule even while applying the remediation. With release 1.4.0, the `coreos_vsyscall_kernel_argument` rule properly evaluates kernel arguments and generates an appropriate remediation.([**OCPBUGS-8041**](https://issues.redhat.com/browse/OCPBUGS-8041))
*   Before this update, rule `rhcos4-audit-rules-login-events-faillock` would fail even after auto-remediation has been applied. With this update, `rhcos4-audit-rules-login-events-faillock` failure locks are now applied correctly after auto-remediation. ([**OCPBUGS-24594**](https://issues.redhat.com/browse/OCPBUGS-24594))
*   Previously, upgrades from Compliance Operator 1.3.1 to Compliance Operator 1.4.0 would cause OVS rules scan results to go from `PASS` to `NOT-APPLICABLE`. With this update, OVS rules scan results now show `PASS` ([**OCPBUGS-25323**](https://issues.redhat.com/browse/OCPBUGS-25323))