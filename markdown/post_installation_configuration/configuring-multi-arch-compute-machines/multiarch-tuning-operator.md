---
title: Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "multiarch-tuning-operator" %}
{% include "./_attributes/common-attributes.md" %}
# Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator {id="multiarch-tuning-operator"}

The Multiarch Tuning Operator optimizes workload management within multi-architecture clusters and in single-architecture clusters transitioning to multi-architecture environments. {._abstract}

Architecture-aware workload scheduling allows the scheduler to place pods onto nodes that match the architecture of the pod images.

By default, the scheduler does not consider the architecture of a pod’s container images when determining the placement of new pods onto nodes.

To enable architecture-aware workload scheduling, you must create the `ClusterPodPlacementConfig` object. When you create the `ClusterPodPlacementConfig` object, the Multiarch Tuning Operator deploys the necessary operands to support architecture-aware workload scheduling. You can also use the `nodeAffinityScoring` plugin in the `ClusterPodPlacementConfig` object to set cluster-wide scores for node architectures. If you enable the `nodeAffinityScoring` plugin, the scheduler first filters nodes with compatible architectures and then places the pod on the node with the highest score.

At the namespace level, you can use the `celArchitecturePlacement` plugin in a `PodPlacementConfig` object to place workloads on specific architectures based on Common Expression Language (CEL) expressions that evaluate pod metadata.

When a pod is created, the operands perform the following actions:

1.  Add the `multiarch.openshift.io/scheduling-gate` scheduling gate that prevents the scheduling of the pod.
1.  Compute a scheduling predicate that includes the supported architecture values for the `kubernetes.io/arch` label.
1.  Integrate the scheduling predicate as a `nodeAffinity` requirement in the pod specification.
1.  Remove the scheduling gate from the pod.


:::important

The following exclusions apply before CEL placement or image-based architecture detection:

*   The Operator ignores pods with `spec.nodeName` already set and pods owned by a DaemonSet.
*   The Operator ignores pods in its own namespace, pods in namespaces with the `kube-` prefix, and pods with a control-plane node selector.
*   If a pod has a `kubernetes.io/arch` node selector, or architecture constraints in every required node affinity term, together with architecture-based preferred node affinity, the Operator ignores the pod. This combination prevents CEL from overriding the existing architecture constraints.

For otherwise eligible pods, CEL can replace architecture selectors and required node affinity while preserving preferred node affinity. If a pod already has architecture-based preferred node affinity, the Operator skips `nodeAffinityScoring`, not CEL placement.

For image-based architecture detection, the Operator preserves existing architecture selectors and required affinity constraints. When neither a matching namespace-scoped placement plugin nor cluster-wide `nodeAffinityScoring` requires processing, pods with existing architecture constraints are not processed.

:::


Before installing the Operator, ensure that existing network policies allow its pods to reach the Kubernetes API server. If egress isolation blocks that access, configure the required allow policy before installation so that the Operator can create its managed network policies. An ingress-only default-deny policy does not block this egress.

**Additional resources**
{._additional-resources}

*   [Network policies created by the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multi-arch-tuning-operator-network-policies_multiarch-tuning-operator)

{% leveloffset +1 %}{% include "./modules/multi-arch-installing-using-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing from the software catalog by using the CLI](/operators/user/olm-installing-operators-in-namespace#olm-installing-operator-from-software-catalog-using-cli_olm-installing-operators-in-namespace)

{% leveloffset +1 %}{% include "./modules/multi-arch-installing-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-gather-info-about-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-creating-podplacment-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/multi-arch-creating-podplacment-config-using-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/multi-arch-creating-podplacment-config-using-web-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Network policies created by the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multi-arch-tuning-operator-network-policies_multiarch-tuning-operator)

{% leveloffset +1 %}{% include "./modules/multi-arch-creating-namespace-podplacement-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring architecture placement rules by using CEL expressions](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multi-arch-creating-namespace-podplacement-config-cel_multiarch-tuning-operator)

{% leveloffset +1 %}{% include "./modules/multi-arch-creating-namespace-podplacement-config-cel.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-tuning-operator-network-policies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-deleting-podplacment-config-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-deleting-podplacment-config-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-uninstalling-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-uninstalling-using-web-console.md" %}{% endleveloffset %}