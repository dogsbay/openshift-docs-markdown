{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.5 {id="release-notes-1-5_{{ context }}"}

{{ kueue_name }} version 1.5 is a generally available release that is supported on {{ product_title }} versions 4.18 and later. {{ kueue_name }} version 1.5 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.19. {._abstract}

## New features and enhancements {id="release-notes-1-5-new-features_{{ context }}"}


Hierarchical cohorts
:   With hierarchical cohorts, you can share unused quota among related cluster queues. Set cohort-level quotas and borrowing and lending limits to control how groups share resources.

    For more information, see [Using cohorts](/ai_workloads/kueue/using-cohorts#using-cohorts).


Workload readiness timeouts and retries
:   You can configure startup and recovery timeouts, retry limits, and retry delays for gang-scheduled workloads. These settings help limit how long workloads hold quota when pods are not ready.

    In this release, gang scheduling is enabled by default. The default value of `spec.config.gangScheduling.policy` in the `Kueue` custom resource (CR) is `ByWorkloadDefaults`. In earlier releases, gang scheduling was disabled by default.

    In this release, the readiness timeout changes from a fixed 5 minutes to a configurable timeout with a default of 30 minutes (1800 seconds).

    For more information, see [Gang scheduling](/ai_workloads/kueue/gangscheduling#gangscheduling).


Topology-aware scheduling
:   With topology-aware scheduling, you can keep related pods close together to help reduce communication latency. Required placement keeps a workload pending until enough capacity is available in the requested topology.


Consumable-capacity quota for Dynamic Resource Allocation devices
:   On {{ product_title }} 5.0 and later, you can set quotas for shared Dynamic Resource Allocation (DRA) device capacity, such as GPU memory. Workload requests count toward capacity quotas instead of whole-device quotas.

## Deprecated features {id="release-notes-1-5-deprecated-features_{{ context }}"}


Beta API deprecation
:   Beta (`v1beta1`) APIs are deprecated in {{ kueue_name }} 1.5 and planned for removal in a future release.