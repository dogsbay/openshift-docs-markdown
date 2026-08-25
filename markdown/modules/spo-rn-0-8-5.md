{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.8.5 {id="spo-release-notes-0-8-5_{{ context }}"}

Release notes for Security Profiles Operator 0.8.5. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the Security Profiles Operator 0.8.5:

*   [RHBA-2024:5016 - OpenShift Security Profiles Operator bug fix update](http://access.redhat.com/errata/RHBA-2024:5016)

## Bug fixes {id="spo-0-8-5-bug-fixes_{{ context }}"}

*   When attempting to install the Security Profiles Operator from the web console, the option to enable Operator-recommended cluster monitoring was unavailable for the namespace. With this update, you can now enabled Operator-recommend cluster monitoring in the namespace. ([OCPBUGS-37794](http://issues.redhat.com/browse/OCPBUGS-37794))
*   Before this update, the Security Profiles Operator would intermittently be not visible in the OperatorHub, which caused limited access to install the Operator through the web console. With this update, the Security Profiles Operator is present in the OperatorHub.