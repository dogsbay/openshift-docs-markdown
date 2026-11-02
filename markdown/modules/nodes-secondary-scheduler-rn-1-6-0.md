{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ secondary_scheduler_operator_full }} 1.6.0 {id="secondary-scheduler-operator-release-notes-1.6.0_{{ context }}"}

Review the release notes for {{ secondary_scheduler_operator }} 1.6.0 to learn what is new and updated with this release. {._abstract}

Issued: 24 June 2026

The following advisory is available for the {{ secondary_scheduler_operator_full }} 1.6.0:

*   [RHBA-2026:28915](https://access.redhat.com/errata/RHBA-2026:28915)

## New features and enhancements {id="secondary-scheduler-1.6.0-new-features_{{ context }}"}

*   You can now configure high availability for the {{ secondary_scheduler_operator }}, ensuring continuous pod scheduling for specialized workloads during scheduler pod failures or maintenance. High availability eliminates the secondary scheduler as a single point of failure in production environments.

    To enable high availability, set the topology mode to `HighlyAvailable` in the `SecondaryScheduler` custom resource (CR). In this mode, the Operator deploys multiple secondary scheduler replicas distributed across nodes, up to a configurable maximum. You can optionally set a node selector to target specific nodes or set tolerations for tainted nodes.

    For more information, see [Deploying a secondary scheduler](/nodes/scheduling/secondary_scheduler/nodes-secondary-scheduler-configuring#nodes-secondary-scheduler-configuring-console_secondary-scheduler-configuring).
*   The {{ secondary_scheduler_operator }} now publishes secondary scheduler metrics to Prometheus by default.
*   This release of the {{ secondary_scheduler_operator }} updates the Kubernetes version to 1.35.

## Bug fixes {id="secondary-scheduler-1.6.0-bug-fixes_{{ context }}"}

*   This release of the {{ secondary_scheduler_operator }} addresses Common Vulnerabilities and Exposures (CVEs).

## Known issues {id="secondary-scheduler-operator-1.6.0-known-issues_{{ context }}"}

*   Currently, you cannot deploy additional resources, such as config maps, CRDs, or RBAC policies through the {{ secondary_scheduler_operator }}. Any resources other than roles and role bindings that are required by your custom secondary scheduler must be applied externally. ([WRKLDS-645](https://issues.redhat.com/browse/WRKLDS-645))