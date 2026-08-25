{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.7.1 {id="spo-release-notes-0-7-1_{{ context }}"}

Release notes for Security Profiles Operator 0.7.1. {._abstract}

The following Red Hat Security Advisory (RHSA) is available for the Security Profiles Operator 0.7.1:

*   [RHSA-2023:2029 - OpenShift Security Profiles Operator bug fix update](http://access.redhat.com/errata/RHSA-2023:2029)

## New features and enhancements {id="spo-0-7-1-new-features-and-enhancements_{{ context }}"}

*   Security Profiles Operator (SPO) now automatically selects the appropriate `selinuxd` image for RHEL 8- and 9-based {{ op_system_first }} systems.

    :::important

    Users that mirror images for disconnected environments must mirror both `selinuxd` images provided by the Security Profiles Operator.
    
    :::

*   You can now enable memory optimization inside of an `spod` daemon. For more information, see [Enabling memory optimization in the spod daemon](/security/security_profiles_operator/spo-advanced#spo-memory-optimization_spo-advanced).

    :::note

    SPO memory optimization is not enabled by default.
    
    :::

*   The daemon resource requirements are now configurable. For more information, see [Customizing daemon resource requirements](/security/security_profiles_operator/spo-advanced#spo-daemon-requirements_spo-advanced).
*   The priority class name is now configurable in the `spod` configuration. For more information, see [Setting a custom priority class name for the spod daemon pod](/security/security_profiles_operator/spo-advanced#spo-custom-priority-class_spo-advanced).

## Deprecated and removed features {id="spo-0-7-1-deprecations_{{ context }}"}

*   The default `nginx-1.19.1` seccomp profile is now removed from the Security Profiles Operator deployment.

## Bug fixes {id="spo-0-7-1-bug-fixes_{{ context }}"}

*   Before this update, a Security Profiles Operator (SPO) SELinux policy did not inherit low-level policy definitions from the container template. If you selected another template, such as `net_container`, the policy would not work because it required low-level policy definitions that only existed in the container template. This issue occurred when the SPO SELinux policy attempted to translate SELinux policies from the SPO custom format to the Common Intermediate Language (CIL) format. With this update, the container template appends to any SELinux policies that require translation from SPO to CIL. Additionally, the SPO SELinux policy can inherit low-level policy definitions from any supported policy template. ([OCPBUGS-12879](http://issues.redhat.com/browse/OCPBUGS-12879))

## Known issue {id="spo-0-7-1-known-issue_{{ context }}"}

*   When uninstalling the Security Profiles Operator, the `MutatingWebhookConfiguration` object is not deleted and must be manually removed. As a workaround, delete the `MutatingWebhookConfiguration` object after uninstalling the Security Profiles Operator. For these steps, see [Uninstalling the Security Profiles Operator](/security/security_profiles_operator/spo-uninstalling#spo-uninstalling). ([OCPBUGS-4687](http://issues.redhat.com/browse/OCPBUGS-4687))