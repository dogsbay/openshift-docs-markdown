{%- set _mod_docs_content_type = "REFERENCE" %}
# External DNS Operator 1.3 {id="external-dns-operator-release-notes-1.3_{{ context }}"}

The External DNS Operator 1.3 release notes summarize all new features and enhancements, notable technical changes, major corrections from previous versions, and any known bugs upon general availability.  {._abstract}


External DNS Operator 1.3.3
:   The following advisory is available for the External DNS Operator version 1.3.3:
    *   [RHBA-2025:23077 Product Enhancement Advisory](https://access.redhat.com/errata/RHBA-2025:23077)

External DNS Operator 1.3.2
:   The following advisory is available for the External DNS Operator version 1.3.2:
    *   [RHEA-2025:22454 Product Enhancement Advisory](https://access.redhat.com/errata/RHEA-2025:22454)

External DNS Operator 1.3.1
:   The following advisory is available for the External DNS Operator version 1.3.1:
    *   [RHEA-2025:15598 Product Enhancement Advisory](https://access.redhat.com/errata/RHEA-2025:15598)

    This update includes improved container security.

External DNS Operator 1.3.0
:   The following advisory is available for the External DNS Operator version 1.3.0:
    *   [RHEA-2024:8550 Product Enhancement Advisory](https://access.redhat.com/errata/RHEA-2024:8550)

    This update includes a rebase to the 0.14.2 version of the upstream project.

    Bug fixes:
    *   Previously, the ExternalDNS Operator could not deploy operands on HCP clusters. With this release, the Operator deploys operands in a running and ready state. ([OCPBUGS-37059](https://issues.redhat.com/browse/OCPBUGS-37059))
    *   Previously, the ExternalDNS Operator was not using RHEL 9 as its building or base images. With this release, RHEL9 is the base. ([OCPBUGS-41683](https://issues.redhat.com/browse/OCPBUGS-41683))
    *   Previously, the godoc had a broken link for Infoblox provider. With this release, the godoc is revised for accuracy. Some links are removed while some other are replaced with GitHub permalinks. ([OCPBUGS-36797](https://issues.redhat.com/browse/OCPBUGS-36797))