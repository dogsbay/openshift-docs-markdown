{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.8.4 {id="spo-release-notes-0-8-4_{{ context }}"}

Release notes for Security Profiles Operator 0.8.4. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the Security Profiles Operator 0.8.4:

*   [RHBA-2024:4781 - OpenShift Security Profiles Operator bug fix update](http://access.redhat.com/errata/RHBA-2024:4781)

This update addresses CVEs in underlying dependencies.

## New features and enhancements {id="spo-0-8-4-new-features-and-enhancements_{{ context }}"}

*   You can now specify a default security profile in the `image` attribute of a `ProfileBinding` object by setting a wildcard. For more information, see [Binding workloads to profiles with `ProfileBinding` objects (SELinux)](/security/security_profiles_operator/spo-selinux#spo-binding-workloads_spo-selinux) and [Binding workloads to profiles with `ProfileBinding` objects (Seccomp)](/security/security_profiles_operator/spo-seccomp#spo-binding-workloads_spo-seccomp).