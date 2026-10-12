{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.0.1 {id="release-notes-1.0.1_{{ context }}"}

{{ kueue_name }} version 1.0.1 is a patch release that is supported on {{ product_title }} versions 4.18 and 4.19 on the 64-bit x86 architecture. {._abstract}

{{ kueue_name }} version 1.0.1 uses Kueue version 0.11.

## Bug fixes in {{ kueue_name }} version 1.0.1 {id="release-notes-1.0.1-bug-fixes_{{ context }}"}

*   Previously, leader election for {{ kueue_name }} was not configured to tolerate disruption, which resulted in frequent crashing. With this release, the leader election values for {{ kueue_name }} have been updated to match the durations recommended for {{ product_title }}. ([OCPBUGS-58496](https://issues.redhat.com/browse/OCPBUGS-58496))
*   Previously, the `ReadyReplicas` count was not set in the reconciler, which meant that the {{ kueue_name }} Operator status would report that there were no replicas ready. With this release, the `ReadyReplicas` count is based on the number of ready replicas for the deployment, which ensures that the Operator shows as ready in the {{ product_title }} console when the `kueue-controller-manager` pods are ready. ([OCPBUGS-59261](https://issues.redhat.com/browse/OCPBUGS-59261))
*   Previously, when the `Kueue` custom resource (CR) was deleted from the `openshift-kueue-operator` namespace, the `kueue-manager-config` config map was not deleted automatically and could remain in the namespace. With this release, the `kueue-manager-config` config map, `kueue-webhook-server-cert` secret, and `metrics-server-cert` secret are deleted automatically when the `Kueue` CR is deleted. ([OCPBUGS-57960](https://issues.redhat.com/browse/OCPBUGS-57960))