---
title: Automatically adjust pod resource levels with the vertical pod autoscaler
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-vertical-autoscaler" %}
{% include "./_attributes/common-attributes.md" %}
# Automatically adjust pod resource levels with the vertical pod autoscaler {id="nodes-pods-vpa"}

You can use the {{ product_title }} Vertical Pod Autoscaler Operator (VPA) to help you understand the optimal CPU and memory usage for your pods and automatically maintain pod resources through the pod lifecycle. {._abstract}

The VPA automatically reviews the historic and current CPU and memory resources for containers in pods. The VPA can update the resource limits and requests based on the usage values it learns. By using individual custom resources (CR), the VPA updates all the pods in a project associated with any built-in workload objects. This includes the following list of object types:

*   `Deployment`
*   `DeploymentConfig`
*   `StatefulSet`
*   `Job`
*   `DaemonSet`
*   `ReplicaSet`
*   `ReplicationController`

The VPA can also update certain custom resource object that manage pods. For more information, see "Example custom resources for the Vertical Pod Autoscaler".

{% leveloffset +1 %}{% include "./modules/nodes-pods-vertical-autoscaler-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-vertical-autoscaler-in-place.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-vertical-autoscaler-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-vertical-autoscaler-moving-vpa.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-vertical-autoscaler-using-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-vertical-autoscaler-tuning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-vertical-autoscaler-oom.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-vertical-autoscaler-custom.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-vertical-autoscaler-configuring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-vertical-autoscaler-custom-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-vertical-autoscaler-uninstall.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Example custom resources for the Vertical Pod Autoscaler](/nodes/pods/nodes-pods-vertical-autoscaler#nodes-pods-vertical-autoscaler-custom-resource_nodes-pods-vertical-autoscaler)
*   [About using the Vertical Pod Autoscaler Operator](/nodes/pods/nodes-pods-vertical-autoscaler#nodes-pods-vertical-autoscaler-using-about_nodes-pods-vertical-autoscaler)
*   [Adjust pod resource levels without pod disruption](/nodes/pods/nodes-pods-adjust-resources-in-place#nodes-pods-adjust-resources-in-place)
*   [Understanding OOM kill policy](/nodes/clusters/nodes-cluster-resource-configure#nodes-cluster-resource-configure-oom_nodes-cluster-resource-configure)