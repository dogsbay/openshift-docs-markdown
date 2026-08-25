{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.0 {id="release-notes-1.0_{{ context }}"}

{{ kueue_name }} version 1.0 is a generally available release that is supported on {{ product_title }} versions 4.18 and 4.19 on the 64-bit x86 architecture. {{ kueue_name }} version 1.0 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.11. {._abstract}

## New features and enhancements {id="release-notes-1.0-new-features_{{ context }}"}


Role-based access control (RBAC)
:   Role-based access control (RBAC) enables you to control which types of users can create which types of {{ kueue_name }} resources.


Configure resource quotas
:   Configuring resource quotas by creating cluster queues, resource flavors, and local queues enables you to control the amount of resources used by user-submitted jobs and workloads.


Control job and workload management
:   Labeling namespaces and configuring label policies enable you to control which jobs and workloads are managed by {{ kueue_name }}.


Share borrowable resources between queues
:   Configuring cohorts, fair sharing, and gang scheduling settings enable you to share unused, borrowable resources between queues.

## Known issues {id="release-notes-1.0-known-issues_{{ context }}"}


Jobs in all namespaces are reconciled if they have the `kueue.x-k8s.io/queue-name` label
:   {{ kueue_name }} uses the `managedJobsNamespaceSelector` configuration field, so that administrators can configure which namespaces opt in to be managed by {{ kueue_name }}. Because namespaces must be manually configured to opt in to being managed by {{ kueue_name }}, resources in system or third-party namespaces are not impacted or managed by {{ kueue_name }}.

    The behavior in {{ kueue_name }} 1.0 allows reconciliation of `Job` resources that have the `kueue.x-k8s.io/queue-name` label, even if these resources are in namespaces that are not configured to opt in to being managed by {{ kueue_name }}. This is inconsistent with the behavior for other core integrations like pods, deployments, and stateful sets, which are only reconciled if they are in namespaces that have been configured to opt in to being managed by {{ kueue_name }}.

    ([OCPBUGS-58205](https://issues.redhat.com/browse/OCPBUGS-58205))


You cannot create a `Kueue` custom resource by using the {{ product_title }} web console
:   If you try to use the {{ product_title }} web console to create a `Kueue` custom resource (CR) by using the form view, the web console shows an error and the resource cannot be created. As a workaround, use the YAML view to create a `Kueue` CR instead.

    ([OCPBUGS-58118](https://issues.redhat.com/browse/OCPBUGS-58118))