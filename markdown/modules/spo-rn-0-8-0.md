{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.8.0 {id="spo-release-notes-0-8-0_{{ context }}"}

Release notes for Security Profiles Operator 0.8.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the Security Profiles Operator 0.8.0:

*   [RHBA-2023:4689 - OpenShift Security Profiles Operator bug fix update](http://access.redhat.com/errata/RHBA-2023:4689)

## Bug fixes {id="spo-0-8-0-bug-fixes_{{ context }}"}

*   Before this update, while trying to install Security Profiles Operator in a disconnected cluster, the secure hash algorithms (SHAs) provided were wrong due to an SHA relabeling issue. With this update, the secure hash algorithms work consistently with disconnected environments. ([OCPBUGS-14404](http://issues.redhat.com/browse/OCPBUGS-14404))