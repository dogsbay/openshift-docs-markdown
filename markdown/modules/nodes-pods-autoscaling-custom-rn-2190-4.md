{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom Metrics Autoscaler Operator 2.19.0-4 release notes {id="nodes-pods-autoscaling-custom-rn-2190-4_{{ context }}"}

Issued: 22 September 2026

You can review the following release notes to learn about the bug fixes provided in this release of the Custom Metrics Autoscaler Operator. {._abstract}

The following advisory is available for the Custom Metrics Autoscaler Operator:

*   [RHBA-2026:70460](https://access.redhat.com/errata/RHBA-2026:70460)


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::


Bug fixes
:   *   Before this update, the `default` scaling strategy for scaled jobs was missing. With this fix, the `default` strategy has been added back to the `scaledjobs` custom resource. As a result, you can select the default strategy with scaled jobs. ([OCPBUGS-121352](https://redhat.atlassian.net/browse/OCPBUGS-121352))

    :::note

    This issue was initially addressed in the Custom Metrics Autoscaler 2.19.0-3 release through [OCPBUGS-98657](https://redhat.atlassian.net/browse/OCPBUGS-98657). However, the fix did not fully address the problem. Updating to the Custom Metrics Autoscaler 2.19.0-4 release will fix this issue.
    
    :::