{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for the Multiarch Tuning Operator 1.4.0 {id="multi-arch-tuning-operator-release-notes-1-4-0_{{ context }}"}

The release notes for the Multiarch Tuning Operator 1.4.0 summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability. {._abstract}

Some linked Jira tickets are accessible only with Red Hat credentials.

Issued: 28 October 2026

## New features and enhancements {id="multi-arch-tuning-operator-1-4-0-new-features-and-enhancements_{{ context }}"}


CEL rules select workload architectures
:   You can use the `celArchitecturePlacement` plugin in a namespace-scoped `PodPlacementConfig` object to select architectures by using Common Expression Language (CEL) expressions that evaluate pod metadata. For eligible pods, the first rule that evaluates to `true` determines the target architectures. Fallback architectures apply when the rule list is empty or at least one rule evaluates successfully but no rule matches. If every rule fails at runtime, the configuration is skipped and lower-priority configurations can be considered.

    [MULTIARCH-6069](https://redhat.atlassian.net/browse/MULTIARCH-6069)


Managed network policies protect Operator workloads
:   The Multiarch Tuning Operator creates `NetworkPolicy` objects at runtime to restrict network traffic to and from its controller manager and pod placement operands while allowing required connectivity. The policies allow DNS, Kubernetes API, metrics, webhook, and image-inspection traffic, depending on the workload.

    [MULTIARCH-5569](https://redhat.atlassian.net/browse/MULTIARCH-5569)

## Technical changes {id="multi-arch-tuning-operator-1-4-0-technical-changes_{{ context }}"}


Operator SDK is updated to version 1.42.3
:   The Multiarch Tuning Operator uses Operator SDK version 1.42.3.

    [MULTIARCH-6359](https://redhat.atlassian.net/browse/MULTIARCH-6359)


Kubernetes and controller-runtime dependencies are updated
:   The Multiarch Tuning Operator uses Kubernetes module version 0.36.5 and `controller-runtime` version 0.24.1.

    [MULTIARCH-6466](https://redhat.atlassian.net/browse/MULTIARCH-6466)