{%- set _mod_docs_content_type = "REFERENCE" %}
# External DNS Operator 1.2 {id="external-dns-operator-release-notes-1.2_{{ context }}"}

The External DNS Operator 1.2 release notes summarize all new features and enhancements, notable technical changes, major corrections from previous versions, and any known bugs upon general availability. {._abstract}


External DNS Operator 1.2.0
:   The following advisory is available for the External DNS Operator version 1.2.0:
    *   [RHEA-2022:5867 ExternalDNS Operator 1.2 operator/operand containers](https://access.redhat.com/errata/RHEA-2023:7239)

    New features:
    *   The External DNS Operator now supports {{ aws_short }} shared VPC. For more information, see "Creating DNS records in a different {{ aws_short }} Account using a shared VPC".

    Bug fixes:
    *   The update strategy for the operand changed from `Rolling` to `Recreate`. ([OCPBUGS-3630](https://issues.redhat.com/browse/OCPBUGS-3630))