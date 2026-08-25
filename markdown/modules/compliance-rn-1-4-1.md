{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.4.1 {id="compliance-operator-release-notes-1-4-1_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.4.1. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.4.1:

*   [RHBA-2024:1830 - OpenShift Compliance Operator bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2024:1830)

## New features and enhancements {id="compliance-operator-1-4-1-new-features-and-enhancements_{{ context }}"}

*   As of this release, the Compliance Operator now provides the CIS OpenShift 1.5.0 profile rules.  ([**CMP-2447**](https://issues.redhat.com/browse/CMP-2447))
*   With this update, the Compliance Operator now provides `OCP4 STIG ID` and `SRG` with the profile rules. ([**CMP-2401**](https://issues.redhat.com/browse/CMP-2401))
*   With this update, obsolete rules being applied to `s390x` have been removed. ([**CMP-2471**](https://issues.redhat.com/browse/CMP-2471))

## Bug fixes {id="compliance-operator-1-4-1-bug-fixes_{{ context }}"}

*   Previously, for {{ op_system_first }} systems using {{ op_system_base_full }} 9, application of the `ocp4-kubelet-enable-protect-kernel-sysctl-file-exist` rule failed. This update replaces the rule with `ocp4-kubelet-enable-protect-kernel-sysctl`. Now, after auto remediation is applied, {{ op_system_base }} 9-based {{ op_system }} systems will show `PASS` upon the application of this rule. ([**OCPBUGS-13589**](https://issues.redhat.com/browse/OCPBUGS-13589))
*   Previously, after applying compliance remediations using profile `rhcos4-e8`, the nodes were no longer accessible using SSH to the core user account. With this update, nodes remain accessible through SSH using the `sshkey1 option. ([**OCPBUGS-18331**](https://issues.redhat.com/browse/OCPBUGS-18331))
*   Previously, the `STIG` profile was missing rules from CaC that fulfill requirements on the published `STIG` for {{ product_title }}. With this update, upon remediation, the cluster satisfies `STIG` requirements that can be remediated using Compliance Operator. ([**OCPBUGS-26193**](https://issues.redhat.com/browse/OCPBUGS-26193))
*   Previously, creating a `ScanSettingBinding` object with profiles of different types for multiple products bypassed a restriction against multiple products types in a binding. With this update, the product validation now allows multiple products regardless of the of profile types in the `ScanSettingBinding` object. ([**OCPBUGS-26229**](https://issues.redhat.com/browse/OCPBUGS-26229))
*   Previously, running the `rhcos4-service-debug-shell-disabled` rule showed as `FAIL` even after auto-remediation was applied. With this update, running the `rhcos4-service-debug-shell-disabled` rule now shows `PASS` after auto-remediation is applied. ([**OCPBUGS-28242**](https://issues.redhat.com/browse/OCPBUGS-28242))
*   With this update, instructions for the use of the `rhcos4-banner-etc-issue` rule are enhanced to provide more detail. ([**OCPBUGS-28797**](https://issues.redhat.com/browse/OCPBUGS-28797))
*   Previously the `api_server_api_priority_flowschema_catch_all` rule provided `FAIL` status on {{ product_title }} 4.16 clusters. With this update, the `api_server_api_priority_flowschema_catch_all` rule provides `PASS` status on {{ product_title }} 4.16 clusters. ([**OCPBUGS-28918**](https://issues.redhat.com/browse/OCPBUGS-28918))
*   Previously, when a profile was removed from a completed scan shown in a `ScanSettingBinding` (SSB) object, the Compliance Operator did not remove the old scan. Afterward, when launching a new SSB using the deleted profile, the Compliance Operator failed to update the result. With this release of the Compliance Operator, the new SSB now shows the new compliance check result. ([**OCPBUGS-29272**](https://issues.redhat.com/browse/OCPBUGS-29272))
*   Previously, on `ppc64le` architecture, the metrics service was not created. With this update, when deploying the Compliance Operator v1.4.1 on `ppc64le` architecture, the metrics service is now created correctly. ([**OCPBUGS-32797**](https://issues.redhat.com/browse/OCPBUGS-32797))
*   Previously, on a HyperShift hosted cluster, a scan with the `ocp4-pci-dss profile` will run into an unrecoverable error due to a `filter cannot iterate` issue. With this release, the scan for the `ocp4-pci-dss` profile will reach `done` status and return either a `Compliance` or `Non-Compliance` test result. ([**OCPBUGS-33067**](https://issues.redhat.com/browse/OCPBUGS-33067))