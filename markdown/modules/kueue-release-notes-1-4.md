{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.4 {id="release-notes-1.4_{{ context }}"}

{{ kueue_name }} version 1.4 is a generally available release that is supported on {{ product_title }} versions 4.18 and later. {{ kueue_name }} version 1.4 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.18. {._abstract}

## New features and enhancements {id="release-notes-1.4-new-features_{{ context }}"}


Admission fair sharing
:   This release introduces admission fair sharing, which balances workload admission across multiple local Queues feeding into a shared `ClusterQueue`. Admission fair sharing:
    *   Prioritizes workloads based on historical resource consumption
    *   Tracks usage over time with a configurable decay function
    *   Applies immediate admission penalties to prevent resource monopolization

For more information, see [Admission fair sharing](/ai_workloads/kueue/admission-fair-sharing#admission-fair-sharing).


Dynamic Resource Allocation (DRA) quota management for GPUs (Technology Preview)
:   You can manage quotas for workloads that request GPUs through Dynamic Resource Allocation (DRA). When quota management is configured, {{ kueue_name }} tracks DRA device requests toward quota alongside traditional resources such as CPU and memory, preventing teams from exceeding their allocated GPU resources.

For more information, see [Integrating Dynamic Resource Allocation](/ai_workloads/kueue/kueue-dra-integrating-dynamic-resource-allocation#kueue-dra-integrating-dynamic-resource-allocation).

## Fixed issues {id="release-notes-1.4-fixed-issues_{{ context }}"}


Use  the `resourceNames` object to limit webhooks to only {{ kueue_name }} resources
:   You can restrict the `kueue-manager-role` `ClusterRole` webhook configurations and CRD rules to specific `resourceNames`, preventing the controller from modifying other Operators' webhook configurations or CRDs. Webhook rules are scoped to `kueue-mutating-webhook-configuration` and `kueue-validating-webhook-configuration`, as shown in this example:
    ```yaml
    resourceNames: 
      - kueue-mutating-webhook-configuration
      - kueue-validating-webhook-configuration
    ```

    ([OCPBUGS-88495](https://issues.redhat.com/browse/OCPBUGS-88495))


Removed secrets from the core API resources list
:   The upstream version of Kueue moved the `secrets` RBAC to a namespace-scoped role (`kueue-manager-secrets-role`), but the `ClusterRole` was not updated to remove the cluster-wide secrets permission.

    This version of {{ kueue_name }} removes the `secrets` resource type from the cluster-wide openshift-kueue-operator `ClusterRole`. The namespace-scoped `kueue-manager-secrets-role` role already exists and provides the necessary access.

    ([OCPBUGS-88040](https://issues.redhat.com/browse/OCPBUGS-88040))