{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.3 {id="release-notes-1.3_{{ context }}"}

{{ kueue_name }} version 1.3 is a generally available release that is supported on {{ product_title }} versions 4.18 and later. {{ kueue_name }} version 1.3 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.16. {._abstract}

## New features and enhancements {id="release-notes-1.3-new-features_{{ context }}"}


{{ lws_operator }}
:   {{ kueue_name }} version 1.3 provides for the integration of the {{ lws_operator }} with {{ kueue_name }} so you can leverage the {{ kueue_name }} scheduling and resource management functionality when running LeaderWorkerSets. For more information, see [Integrating the Leader Worker Set Operator](/ai_workloads/kueue/integrating-lws#integrating-lws).


{{ js_operator }}
:   {{ kueue_name }} version 1.3 provides for the integration of the {{ js_operator }} so you can use the {{ js_operator }} to manage and run large-scale, coordinated workloads like high-performance computing (HPC) and AI training. For more information, see [Integrating the JobSet Operator](/ai_workloads/kueue/integrating-jobset#integrating-jobset).


Upstream progression of the {{ kueue_name }} API to `v1beta2`
:   {{ kueue_name }} version 1.3 provides the `v1beta2` version of the {{ kueue_name }} API. This update continues the evolution of the {{ kueue_name }} APIs with the ultimate goal of graduating the API to `v1`. 

    All new Kueue objects created after the upgrade will be stored using the `v1beta2` version. The earlier version of the API, `v1beta1` is deprecated. Objects can still be created using `v1beta1`, if necessary. In these cases, a deprecation message is shown.

    However, existing objects are only auto-converted to the new storage version by Kubernetes during a write request. This means that {{ kueue_name }} API objects that rarely receive updates such as Topologies, ResourceFlavors, or long-running Workloads could remain in the older `v1beta1` format indefinitely.

## Fixed issues {id="release-notes-1.3-fixed-issues_{{ context }}"}


Reconcile jobs only in opt-in namespaces
:   {{ product_title }} allowed reconciliation of `Job` resources that have the `kueue.x-k8s.io/queue-name` label, even if these resources are in namespaces that are not configured to opt in to being managed by {{ product_title }}. With this release, there is ongoing upstream work that updates this behavior so that Jobs with queue-name labels are also ignored unless their namespace matches the `managedJobsNamespaceSelector`. This change makes {{ kueue_name }} behavior consistent across all integrations.

    ([OCPBUGS-58205](https://issues.redhat.com/browse/OCPBUGS-58205))


`Kueue` CR description reads as "Not available" in the {{ product_title }} web console
:   After installing {{ kueue_name }}, in the **Operator details** view, the description for the `Kueue` CR read as "Not available". This issue did not affect or degrade the {{ kueue_name }} Operator functionality. With this release, the "Not available" message no longer displays.

    ([OCPBUGS-62185](https://issues.redhat.com/browse/OCPBUGS-62185))


LeaderWorkerSet and Jobset validation errors
:   Currently, the {{ lws_operator }} and {{ js_operator }} are only validated after the Operand CR is updated and the full Kueue hierarchy (ResourceFlavor, ClusterQueue, and LocalQueue) is established. Any configuration errors appear only when applying a LeaderWorkerSet or JobSet template.

    ([OCPBUGS-74210](https://issues.redhat.com/browse/OCPBUGS-74210))

## Known issues {id="release-notes-1.3-known-issues_{{ context }}"}


LeaderWorkerSet pods update sequentially by default
:   If you have integrated {{ lws_operator }} with your {{ kueue_name }} installation and you are using the rollout strategy option for updating LeaderWorkerSet pods, be aware that the `MaxUnavailable` feature gate in {{ product_title }} is disabled by default. 

    When any change is made to LeaderWorkerSet pods, a rolling update is triggered. This action gradually replaces the old pods of a deployment with new ones, keeping as many pods alive as possible to avoid downtime. If `MaxUnavailable` is disabled, which is the {{ product_title }} default setting, the pods are updated one at a time.

    If you want to run updates in parallel instead of running them sequentially, `MaxUnavailable` feature gate must be enabled. For more information, see [Enabling feature sets at installation](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-install_nodes-cluster-enabling) and [Rollout Strategy](https://lws.sigs.k8s.io/docs/concepts/rollout-strategy/).