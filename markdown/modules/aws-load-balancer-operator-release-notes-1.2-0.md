{%- set _mod_docs_content_type = "REFERENCE" %}
# AWS Load Balancer Operator 1.2.0 {id="aws-load-balancer-operator-release-notes-1.2-0_{{ context }}"}

The AWS Load Balancer Operator 1.2.0 release notes  summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability.  {._abstract}

The following advisory is available for the AWS Load Balancer Operator version 1.2.0:

*   [RHEA-2025:0034 Release of AWS Load Balancer Operator 1.2.z on OperatorHub](https://access.redhat.com/errata/RHEA-2025:0034)

Notable changes

:   *   This release supports the AWS Load Balancer Controller version 2.8.2.
    *   With this release, the platform tags defined in the `Infrastructure` resource are added to all AWS objects created by the controller.