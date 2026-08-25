{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom Metrics Autoscaler Operator 2.19.0-2 release notes {id="nodes-pods-autoscaling-custom-rn-2190-2_{{ context }}"}

Issued: 09 July 2026

You can review the following release notes to learn about the bug fixes provided in this release of the Custom Metrics Autoscaler Operator. {._abstract}

The following advisory is available for the Custom Metrics Autoscaler Operator:

*   [RHBA-2026:37467](https://access.redhat.com/errata/RHBA-2026:37467)


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::



Bug fixes

:   *   Before this update, the addition of an immutable label in the deployment selector that was not compatible with the existing deployment was causing automatic upgrades from Custom Metrics Autoscaler Operator version 2.18.1-2 to version 2.19.0-1 to fail. With the fix, automatic upgrades from version 2.18.1-2 to version 2.19.0-2 succeed without manual intervention. ([OCPBUGS-91950](https://redhat.atlassian.net/browse/OCPBUGS-91950))