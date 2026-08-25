{%- set _mod_docs_content_type = "REFERENCE" %}
# AWS Load Balancer Operator 1.0.0 {id="aws-load-balancer-operator-release-notes-1.0.0_{{ context }}"}

The AWS Load Balancer Operator 1.0.0 release notes summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability.  {._abstract}

The AWS Load Balancer Operator is now generally available with this release. The AWS Load Balancer Operator version 1.0.0 supports the AWS Load Balancer Controller version 2.4.4.

The following advisory is available for the AWS Load Balancer Operator version 1.0.0:

*   [RHEA-2023:1954 Release of AWS Load Balancer Operator on OperatorHub Enhancement Advisory Update](https://access.redhat.com/errata/RHEA-2023:1954)


:::important

The AWS Load Balancer (ALB) Operator version 1.x.x cannot upgrade automatically from the Technology Preview version 0.x.x. To upgrade from an earlier version, you must uninstall the ALB operands and delete the `aws-load-balancer-operator` namespace.

:::


Notable changes

:   *   This release uses the new `v1` API version.

Bug fixes

:   *   Previously, the controller provisioned by the AWS Load Balancer Operator did not properly use the configuration for the cluster-wide proxy.
These settings are now applied appropriately to the controller.
([**OCPBUGS-4052**](https://issues.redhat.com/browse/OCPBUGS-4052), [**OCPBUGS-5295**](https://issues.redhat.com/browse/OCPBUGS-5295))