{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 0.1.39 {id="compliance-operator-release-notes-0-1-39_{{ context }}"}

Release Notes for Compliance Operator 0.1.39. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift Compliance Operator 0.1.39:

*   [RHBA-2021:3214 - OpenShift Compliance Operator bug fix and enhancement update](https://access.redhat.com/errata/RHBA-2021:3214)

## New features and enhancements {id="compliance-operator-0-1-39-new-features-and-enhancements_{{ context }}"}

*   Previously, the Compliance Operator was unable to parse Payment Card Industry Data Security Standard (PCI DSS) references. Now, the Operator can parse compliance content that is provided with PCI DSS profiles.
*   Previously, the Compliance Operator was unable to run rules for AU-5 control in the moderate profile. Now, permission is added to the Operator so that it can read **Prometheusrules.monitoring.coreos.com** objects and run the rules that cover AU-5 control in the moderate profile.