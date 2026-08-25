{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.7.0 {id="compliance-operator-release-notes-1-7-0_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.7.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 1.7.0:

*   [RHBA-2025:3728 - OpenShift Compliance Operator 1.7.0 bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2025:3728)

## New features and enhancements {id="compliance-operator-1-7-0-new-features-and-enhancements_{{ context }}"}

*   A `must-gather` extension is now available for the Compliance Operator installed on `aarch64`, `x86`, `ppc64le`, and `s390x` architectures. The `must-gather` tool provides crucial configuration details to Red Hat Customer Support and engineering. For more information, see [Using the must-gather tool for the Compliance Operator](/security/compliance_operator/co-support#compliance-must-gather_co-support).
*   CIS Benchmark Support has been added to Compliance Operator 1.7.0. The profile supported is CIS OpenShift Benchmark 1.7.0. For more information, see ([CMP-3081](https://issues.redhat.com/browse/CMP-3081))
*   Compliance Operator is now supported on `aarch64` architecture for CIS OpenShift Benchmark 1.7.0 and FedRAMP Moderate Revision 4. For more information, see ([CMP-2960](https://issues.redhat.com/browse/CMP-2960))
*   Compliance Operator 1.7.0 now supports OpenShift DISA STIG V2R2 profiles for OpenShift and RHCOS. For more information, see ([CMP-3142](https://issues.redhat.com/browse/CMP-3142))
*   Compliance Operator 1.7.0 now supports deprecation of old, unsupported profile versions, such as deprecation of CIS 1.4 profiles, CIS 1.5 profiles, DISA STIG V1R1 profiles and DISA STIG V2R1 profiles. For more information, see ([CMP-3149](https://issues.redhat.com/browse/CMP-3149))
*   With this release of Compliance Operator 1.7.0, the deprecation of older CIS and DISA STIG profiles mean that these older profiles will no longer be supported with the appearance of Compliance Operator 1.8.0. For more information, see ([CMP-3284](https://issues.redhat.com/browse/CMP-3284))
*   With this release of Compliance Operator 1.7.0, BSI profile support is added for OpenShift. For more information, refer to the KCS article [BSI Quick Check](https://access.redhat.com/articles/7045834) and [**BSI Compliance Summary**](https://access.redhat.com/compliance/bsi).

## Bug fixes {id="compliance-operator-1-7-0-bug-fixes_{{ context }}"}

*   Before this release, Compliance Operator would provide an unneeded remediation recommendation due to differences in filesystem structure for the `s390x` architecture. With this release, the Compliance Operator now recognizes the differences in filesystem structure and does not provide the misleading remediation. With this update, the rule is now more clearly defined. ([OCPBUGS-33194](https://issues.redhat.com/browse/OCPBUGS-33194))
*   Previously, the instructions for rule `ocp4-etcd-unique-ca` did not work for OpenShift 4.17 and later. With this update, the instructions and actionable steps are corrected. ([OCPBUGS-42350](https://issues.redhat.com/browse/OCPBUGS-42350))
*   When using the Compliance Operator with Cluster Logging Operator (CLO) version 6.0, various rules would fail. This is due to backwards incompatible changes to the CRDs that CLO uses. The Compliance Operator relies on those CRDs to verify logging functionality. The CRDs have been corrected to support the PCI-DSS profiles with CLO. ([OCPBUGS-43229](https://issues.redhat.com/browse/OCPBUGS-43229))
*   After installing Cluster Logging Operator (CLO) 6.0, users found that the ComplianceCheckResult `ocp4-cis-audit-log-forwarding-enabled` was failing because there was a change in the APIversion of the `clusterlogforwarder` resource. Log collection and forwarding configurations are now specified under the new API, part of the observability.openshift.io API group. ([OCPBUGS-43585](https://issues.redhat.com/browse/OCPBUGS-43585))
*   For previous releases of Compliance Operator, the scans would generate an error log for the reconcile loop on the Operator pod. With this release, the Compliance Operator controller logic is more stable. ([OCPBUGS-51267](https://issues.redhat.com/browse/OCPBUGS-51267))
*   Previously, the rules `file-integrity-exists` or `file-integrity-notification-enabled` would fail on `aarch64` OpenShift clusters. With this update, these rules evaluate as `NOT-APPLICABLE` on `aarch64` systems. ([OCPBUGS-52884](https://issues.redhat.com/browse/OCPBUGS-52884))
*   Before this release of the Compliance Operator, the rule `kubelet-configure-tls-cipher-suites` failed for the API server ciphers, resulting in `E2E-FAILURE` status. The rule has been updated to check new ciphers from RFC 8446, which are included with OpenShift 4.18. The rule is now being evaluated correctly. ([OCPBUGS-54212](https://issues.redhat.com/browse/OCPBUGS-54212))
*   Previously, the Compliance Operator platform scan would fail and produce the message `failed to parse Ignition config`. With this release, the Compliance Operator is safe to run on 4.19 clusters, when that version of OpenShift is available to customers. ([OCPBUGS-54403](https://issues.redhat.com/browse/OCPBUGS-54403))
*   Before this release of Compliance Operator, several rules were not platform aware, creating unneeded errors. Now that the rules have been properly ported to other architectures, those rules run correctly and users can observe some Compliance Check Results reporting `NOT-APPLICABLE` appropriately, depending on the architecture they are using. ([OCPBUGS-53041](https://issues.redhat.com/browse/OCPBUGS-53041))
*   Previously, the rule `file-groupowner-ovs-conf-db-hugetlbf` would fail unexpectedly. With this release, the rule fails only when this is the needed result. ([OCPBUGS-55190](http://issues.redhat.com/browse/OCPBUGS-55180))