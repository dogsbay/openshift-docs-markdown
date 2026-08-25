{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for the Multiarch Tuning Operator 1.3.0 {id="multi-arch-tuning-operator-release-notes-1-3-0_{{ context }}"}

The release notes for the Multiarch Tuning Operator 1.3.0 summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability. {._abstract}

Issued: 6 April 2026

## New features and enhancements {id="multi-arch-tuning-operator-1-3-0-new-features-and-enhancements_{{ context }}"}

*   With this release, after you create a `ClusterPodPlacementConfig` object, you can create namespace-scoped `PodPlacementConfig` objects for the purposes of configuring pod placement at the namespace level. `PodPlacementConfig` objects modify the behavior of the pod placement controller at the namespace level, and take precedence over the `ClusterPodPlacementConfig` object. For more information, see [Creating the namespace-scoped PodPlacementConfig object](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multi-arch-creating-namespace-podplacement-config_multiarch-tuning-operator).
*   With this release, you can specify a fallback architecture where pods are scheduled if the image inspector cannot determine the architecture of the image. For more information, see [Creating the ClusterPodPlacementConfig object](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multi-architecture-creating-podplacement-config_multiarch-tuning-operator).

## Bug fixes {id="multi-arch-tuning-operator-1-3-0-bug-fixes_{{ context }}"}

*   Previously, an error could occur that led to an `ENoExecEvent` custom resource (CR) failing to be deleted. This leftover CR resulted in the failure to uninstall the `execFormatErrorMonitor` plugin. With this update, the `execFormatErrorMonitor` plugin can be uninstalled if there are leftover `ENoExecEvent` CRs. Deleting the `ClusterPodPlacementConfig` object removes all remaining CRs regardless of their state. ([MULTIARCH-5642](https://redhat.atlassian.net/browse/MULTIARCH-5642))
*   Previously, the Multiarch Tuning Operator (MTO) processed images that contained attestation manifests, leading to the incorrect creation of an "unknown" architecture. Pods could fail to be scheduled when they tried to target the "unknown" architecture. With this update, the MTO does not process attestation manifests, and the "unknown" architecture is not created. ([MULTIARCH-5800](https://redhat.atlassian.net/browse/MULTIARCH-5800))

## Enhancements {id="multi-arch-tuning-operator-1-3-0-enhancements_{{ context }}"}

*   MTO has been updated to use `go` version 1.25.7.