{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom Metrics Autoscaler Operator 2.15 release notes {id="nodes-pods-autoscaling-custom-rn-215_{{ context }}"}

You can review the following release notes to learn about changes in the 2.15.z releases. {._abstract}

# Custom Metrics Autoscaler Operator 2.15.1-4 release notes {id="nodes-pods-autoscaling-custom-rn-2151-4_{{ context }}"}

Issued: 31 March 2025

This release of the Custom Metrics Autoscaler Operator 2.15.1-4, which addresses Common Vulnerabilities and Exposures (CVEs), was issued on 25 September 2025. You can review the following release notes to learn about changes in this release.

The following advisory is available for the Custom Metrics Autoscaler Operator: [RHSA-2025:3501](https://access.redhat.com/errata/RHSA-2025:3501)


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::



New features and enhancements

:   Note the new features and enhancements in this release:

    *   CMA multi-arch builds

    With this version of the Custom Metrics Autoscaler Operator, you can now install and run the Operator on an ARM64 {{ product_title }} cluster.