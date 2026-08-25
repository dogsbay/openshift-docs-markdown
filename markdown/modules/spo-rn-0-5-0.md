{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.5.0 {id="spo-release-notes-0-5-0_{{ context }}"}

Release notes for Security Profiles Operator 0.5.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the Security Profiles Operator 0.5.0:

*   [RHBA-2022:8762 - OpenShift Security Profiles Operator bug fix update](http://access.redhat.com/errata/RHBA-2022:8762)

## Known issue {id="spo-0-5-0-known-issue_{{ context }}"}

*   When uninstalling the Security Profiles Operator, the `MutatingWebhookConfiguration` object is not deleted and must be manually removed. As a workaround, delete the `MutatingWebhookConfiguration` object after uninstalling the Security Profiles Operator. For these steps, see [Uninstalling the Security Profiles Operator](/security/security_profiles_operator/spo-uninstalling#spo-uninstalling). ([OCPBUGS-4687](http://issues.redhat.com/browse/OCPBUGS-4687))