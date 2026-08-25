---
title: Automatically scaling pods with the horizontal pod autoscaler
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-autoscaling" %}
# Automatically scaling pods with the horizontal pod autoscaler {id="nodes-pods-autoscaling"}
{% include "./_attributes/common-attributes.md" %}

As a developer, you can use a horizontal pod autoscaler (HPA) to specify how {{ product_title }} should automatically increase or decrease the scale of a replication controller or deployment configuration, based on metrics collected from the pods that belong to that replication controller or deployment configuration. 

You can create an HPA for any deployment, deployment config, replica set, replication controller, or stateful set.

For information on scaling pods based on custom metrics, see "Automatically scaling pods based on custom metrics".


:::note

It is recommended to use a `Deployment` object or `ReplicaSet` object unless you need a specific feature or behavior provided by other objects. For more information on
these objects, see "Understanding deployments".

:::


{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-workflow-hpa.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-requests-and-limits-hpa.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-best-practices-hpa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-policies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-creating-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-creating-web-console-edit.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-creating-web-console-remove.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-creating-cpu.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-creating-cpu-percent.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-creating-cpu-specific.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-creating-memory-percent.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-creating-memory-specific.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-status-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-autoscaling-status-viewing.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Automatically scaling pods based on custom metrics](/nodes/cma/nodes-cma-autoscaling-custom#nodes-cma-autoscaling-custom)
*   [Understanding deployments](/applications/deployments/what-deployments-are#what-deployments-are)
*   [Understanding resource requests and limits](/nodes/pods/nodes-pods-using#nodes-pods-understanding-requests-limits_nodes-pods-using-ssy)
*   [Scaling policies](/nodes/pods/nodes-pods-autoscaling#nodes-pods-autoscaling-policies_nodes-pods-autoscaling)
*   [Understanding deployments and deployment configs](/applications/deployments/what-deployments-are#what-deployments-are)
*   [Horizontal Pod Autoscaling of Quarkus Application Based on Memory Utilization](https://cloud.redhat.com/blog/horizontal-pod-autoscaling-of-quarkus-application-based-on-memory-utilization)