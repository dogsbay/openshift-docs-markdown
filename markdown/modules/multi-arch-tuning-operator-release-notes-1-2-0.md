{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for the Multiarch Tuning Operator 1.2.0 {id="multi-arch-tuning-operator-release-notes-1-2-0_{{ context }}"}

The release notes for the Multiarch Tuning Operator 1.2.0 summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability. {._abstract}

Issued: 22 October 2025

## New features and enhancements {id="multi-arch-tuning-operator-1-2-0-new-features-and-enhancements_{{ context }}"}

*   With this release, you can enable the `exec format error monitor` plugin for the Multiarch Tuning Operator. This plugin detects `ENOEXEC` errors, which occur when a pod attempts to execute a binary incompatible with the node’s architecture. You enable this plugin by setting the `plugins.execFormatErrorMonitor.enabled` parameter to `true` in the `ClusterPodPlacementConfig` object. For more information, see [Creating the ClusterPodPlacementConfig object](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multi-architecture-creating-podplacement-config_multiarch-tuning-operator).

## Bug fixes {id="multi-arch-tuning-operator-1-2-0-bug-fixes_{{ context }}"}

*   Previously, the Multiarch Tuning Operator incorrectly handled the Operator bundle image inspector, restricting the inspector to a single architecture, which could cause OLM to fail when installing Operators. With this update, MTO now sets the bundle image to support all architectures, allowing Operators to be successfully installed on single-architecture clusters when the Multiarch Tuning Operator is deployed. ([MULTIARCH-5546](https://issues.redhat.com/browse/MULTIARCH-5546))
*   Previously, when a cluster global pull secret was changed, stale authentication information could remain in the Multiarch Tuning Operator cache. With this update, the cache is cleared whenever a cluster global pull secret is changed. ([MULTIARCH-5538](https://issues.redhat.com/browse/MULTIARCH-5538))
*   Previously, the Multiarch Tuning Operator failed to process pods if an image reference contained both a tag and a digest. With this update, the image inspector prioritizes the digest if both are present. ([MULTIARCH-5584](https://issues.redhat.com/browse/MULTIARCH-5584))
*   Previously, the Multiarch Tuning Operator did not respect the `.spec.registrySources.containerRuntimeSearchRegistries` field in the `config.openshift.io/Image` custom resource when a workload image did not specify a registry URL. With this update, the Operator can now handle this case, allowing workload images without an explicit registry URL to be pulled successfully. ([MULTIARCH-5611](https://issues.redhat.com/browse/MULTIARCH-5611))
*   Previously, if the `ClusterPodPlacementConfig` object was deleted less than 1 second after its creation, some finalizers were not removed in time, causing certain resources to remain. With this update, all finalizers are properly deleted when the `ClusterPodPlacementConfig` object is deleted. ([MULTIARCH-5372](https://issues.redhat.com/browse/MULTIARCH-5372))