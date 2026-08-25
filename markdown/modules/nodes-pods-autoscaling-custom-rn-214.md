{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom Metrics Autoscaler Operator 2.14 release notes {id="nodes-pods-autoscaling-custom-rn-214_{{ context }}"}

You can review the following release notes to learn about changes in the 2.14.z releases. {._abstract}

## Custom Metrics Autoscaler Operator 2.14.1-467 release notes {id="nodes-pods-autoscaling-custom-rn-2141-467_{{ context }}"}

This release of the Custom Metrics Autoscaler Operator 2.14.1-467 provides a CVE and a bug fix for running the Operator in an {{ product_title }} cluster. The following advisory is available for the Custom Metrics Autoscaler: [RHSA-2024:7348](https://access.redhat.com/errata/RHSA-2024:7348).


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::



Bug fixes

:   *   Before this update, the root file system of the Custom Metrics Autoscaler Operator pod was writable, which is unnecessary and could present security issues. With this release, the pod root file system is read-only, which addresses the potential security issue. ([OCPBUGS-37989](https://issues.redhat.com/browse/OCPBUGS-37989))

## Custom Metrics Autoscaler Operator 2.14.1-454 release notes {id="nodes-pods-autoscaling-custom-rn-2141_{{ context }}"}

This release of the Custom Metrics Autoscaler Operator 2.14.1-454 provides a CVE, a new feature, and bug fixes for running the Operator in an {{ product_title }} cluster. The following advisory is available for the Custom Metrics Autoscaler: [RHBA-2024:5865](https://access.redhat.com/errata/RHBA-2024:5865).


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::



New features and enhancements

:   Note the new features and enhancements in this release:

    *   Support for the Cron trigger with the Custom Metrics Autoscaler Operator

    The Custom Metrics Autoscaler Operator can now use the Cron trigger to scale pods based on an hourly schedule. When your specified time frame starts, the Custom Metrics Autoscaler Operator scales pods to your desired amount. When the time frame ends, the Operator scales back down to the previous level.

    For more information, see "Understanding the Cron trigger".

Bug fixes

:   *   Before this update, if you made changes to audit configuration parameters in the `KedaController` custom resource, the `keda-metrics-server-audit-policy` config map would not get updated. As a consequence, you could not change the audit configuration parameters after the initial deployment of the Custom Metrics Autoscaler. With this release, changes to the audit configuration now render properly in the config map, allowing you to change the audit configuration any time after installation. ([OCPBUGS-32521](https://issues.redhat.com/browse/OCPBUGS-32521))