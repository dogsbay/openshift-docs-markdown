{%- set _mod_docs_content_type = "REFERENCE" %}
# External DNS Operator 1.0 {id="external-dns-operator-release-notes-1.0_{{ context }}"}

The External DNS Operator 1.0 release notes summarize all new features and enhancements, notable technical changes, major corrections from previous versions, and any known bugs upon general availability. {._abstract}


External DNS Operator 1.0.1
:   The following advisory is available for the External DNS Operator version 1.0.1:
    *   [RHEA-2024:0537 ExternalDNS Operator 1.0 operator/operand containers](https://access.redhat.com/errata/RHEA-2024:0537)

External DNS Operator 1.0.0
:   The following advisory is available for the External DNS Operator version 1.0.0:
    *   [RHEA-2022:5867 ExternalDNS Operator 1.0 operator/operand containers](https://access.redhat.com/errata/RHEA-2022:5867)

    Bug fixes:
    *   Previously, the External DNS Operator issued a warning about the violation of the restricted SCC policy during ExternalDNS operand pod deployments. This issue has been resolved. ([BZ#2086408](https://bugzilla.redhat.com/show_bug.cgi?id=2086408))