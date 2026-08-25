{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for the Multiarch Tuning Operator 1.1.0 {id="multi-arch-tuning-operator-release-notes-1-1-0_{{ context }}"}

The release notes for the Multiarch Tuning Operator 1.1.0 summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability. {._abstract}

Issued: 18 March 2024

## New features and enhancements {id="multi-arch-tuning-operator-1-1-0-new-features-and-enhancements_{{ context }}"}

*   The Multiarch Tuning Operator is now supported on managed offerings, including ROSA with Hosted Control Planes (HCP) and other HCP environments.
*   With this release, you can configure architecture-aware workload scheduling by using the new `plugins` field in the `ClusterPodPlacementConfig` object. You can use the `plugins.nodeAffinityScoring` field to set architecture preferences for pod placement. If you enable the `nodeAffinityScoring` plugin, the scheduler first filters out nodes that do not meet the pod requirements. The scheduler then prioritizes the remaining nodes based on the architecture scores defined in the `nodeAffinityScoring.platforms` field.

## Bug fixes {id="multi-arch-tuning-operator-1-1-0-bug-fixes_{{ context }}"}

*   With this release, the Multiarch Tuning Operator does not update the `nodeAffinity` field for pods that are managed by a daemon set. ([OCPBUGS-45885](https://issues.redhat.com/browse/OCPBUGS-45885))