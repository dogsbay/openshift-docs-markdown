---
title: Configuring cluster extensions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring cluster extensions {id="olmv1-configuring-extensions"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olmv1-configuring-extensions" %}

You can customize Operator installations to control namespace scope and manage deployment behavior including resource allocation, node placement, and pod scheduling.

{%- set FeatureName = "Configuring cluster extensions" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/olmv1-config-api.md" %}{% endleveloffset %}

**Additional resources**

*   [Operator groups](/operators/understanding/olm/olm-understanding-operatorgroups#olm-understanding-operatorgroups)

{% leveloffset +1 %}{% include "./modules/olmv1-config-api-watch-namespace-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-discovering-bundle-install-modes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-installing-an-operator-in-a-specific-namespace.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-config-api-watch-namespace-examples.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olmv1-clusterextension-watchnamespace-validation-errors.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-deployment-config-api.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-clusterobjectsets-deployment-mechanism.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-inspecting-clusterobjectsets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-customizing-operator-deployments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-deployment-config-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-deployment-config-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-deployment-config-troubleshooting.md" %}{% endleveloffset %}

## Additional resources {id="olmv1-configuring-extensions_additional-resources"}

*   [Installing a cluster extension in all namespaces](/extensions/ce/managing-ce#olmv1-installing-an-operator_managing-ce)
*   [Assigning Pods to Nodes (Kubernetes)](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)
*   [Taints and Tolerations (Kubernetes)](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)