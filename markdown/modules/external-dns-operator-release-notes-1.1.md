{%- set _mod_docs_content_type = "REFERENCE" %}
# External DNS Operator 1.1 {id="external-dns-operator-release-notes-1.1_{{ context }}"}

The External DNS Operator 1.1 release notes summarize all new features and enhancements, notable technical changes, major corrections from previous versions, and any known bugs upon general availability. {._abstract}


External DNS Operator 1.1.1
:   The following advisory is available for the External DNS Operator version 1.1.1:
    *   [RHEA-2024:0536 ExternalDNS Operator 1.1 operator/operand containers](https://access.redhat.com/errata/RHEA-2024:0536)

External DNS Operator 1.1.0
:   This release included a rebase of the operand from the upstream project version 0.13.1. The following advisory is available for the External DNS Operator version 1.1.0:
    *   [RHEA-2022:9086-01 ExternalDNS Operator 1.1 operator/operand containers](https://access.redhat.com/errata/RHEA-2022:9086)

    Bug fixes:
    *   Previously, the ExternalDNS Operator enforced an empty `defaultMode` value for volumes, which caused constant updates due to a conflict with the OpenShift API. Now, the `defaultMode` value is not enforced and operand deployment does not update constantly. ([OCPBUGS-2793](https://issues.redhat.com/browse/OCPBUGS-2793))