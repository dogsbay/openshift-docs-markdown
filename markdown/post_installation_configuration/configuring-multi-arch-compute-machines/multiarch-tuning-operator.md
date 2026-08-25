---
title: Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "multiarch-tuning-operator" %}
# Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator {id="multiarch-tuning-operator"}
{% include "./_attributes/common-attributes.md" %}

The Multiarch Tuning Operator optimizes workload management within multi-architecture clusters and in single-architecture clusters transitioning to multi-architecture environments.

Architecture-aware workload scheduling allows the scheduler to place pods onto nodes that match the architecture of the pod images.

By default, the scheduler does not consider the architecture of a pod’s container images when determining the placement of new pods onto nodes.

To enable architecture-aware workload scheduling, you must create the `ClusterPodPlacementConfig` object. When you create the `ClusterPodPlacementConfig` object, the Multiarch Tuning Operator deploys the necessary operands to support architecture-aware workload scheduling. You can also use the `nodeAffinityScoring` plugin in the `ClusterPodPlacementConfig` object to set cluster-wide scores for node architectures. If you enable the `nodeAffinityScoring` plugin, the scheduler first filters nodes with compatible architectures and then places the pod on the node with the highest score.

When a pod is created, the operands perform the following actions:

1.  Add the `multiarch.openshift.io/scheduling-gate` scheduling gate that prevents the scheduling of the pod.
1.  Compute a scheduling predicate that includes the supported architecture values for the `kubernetes.io/arch` label.
1.  Integrate the scheduling predicate as a `nodeAffinity` requirement in the pod specification.
1.  Remove the scheduling gate from the pod.


:::important

Note the following operand behaviors:

*   If the `nodeSelector` field is already configured with the `kubernetes.io/arch` label for a workload, the operand does not update the `nodeAffinity` field for that workload.
*   If the `nodeSelector` field is not configured with the `kubernetes.io/arch` label for a workload, the operand updates the `nodeAffinity` field for that workload. For the `nodeAffinity` field, the operand updates only the node selector terms that are not configured with the `kubernetes.io/arch` label.
*   If the `nodeName` field is already set, the Multiarch Tuning Operator does not process the pod.
*   If the pod is owned by a DaemonSet, the operand does not update the `nodeAffinity` field.
*   If `nodeSelector` or `nodeAffinity` and `preferredAffinity` fields are set for the `kubernetes.io/arch` label, the operand does not update the `nodeAffinity` field.
*   If only the `nodeSelector` or the `nodeAffinity` field is set for the `kubernetes.io/arch` label and the `nodeAffinityScoring` plugin is disabled, the operand does not update the `nodeAffinity` field.
*   If the `nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution` field already contains terms that score nodes based on the `kubernetes.io/arch` label, the operand ignores the configuration in the `nodeAffinityScoring` plugin.

:::


{% leveloffset +1 %}{% include "./modules/multi-arch-installing-using-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing from the software catalog by using the CLI](/operators/user/olm-installing-operators-in-namespace#olm-installing-operator-from-software-catalog-using-cli_olm-installing-operators-in-namespace)

{% leveloffset +1 %}{% include "./modules/multi-arch-installing-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-gather-info-about-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-creating-podplacment-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/multi-arch-creating-podplacment-config-using-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/multi-arch-creating-podplacment-config-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-creating-namespace-podplacement-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-deleting-podplacment-config-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-deleting-podplacment-config-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-uninstalling-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-arch-uninstalling-using-web-console.md" %}{% endleveloffset %}