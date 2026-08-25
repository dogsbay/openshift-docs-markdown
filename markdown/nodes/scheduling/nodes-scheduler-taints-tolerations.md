---
title: Controlling pod placement using node taints
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-scheduler-taints-tolerations" %}
# Controlling pod placement using node taints {id="nodes-scheduler-taints-tolerations"}
{% include "./_attributes/common-attributes.md" %}

You can use taints and tolerations to allow the scheduler to control which pods should or should not be scheduled on a node.

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-taints-tolerations-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-taints-tolerations-adding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-adding-machineset.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-binding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-special.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-taints-tolerations-removing.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Adding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-adding_nodes-scheduler-taints-tolerations)
*   [Adding taints and tolerations using a compute machine set](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-adding-machineset_nodes-scheduler-taints-tolerations)
{%- if not (openshift_rosa or openshift_dedicated) %}
*   [Creating project-wide node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors-project_nodes-scheduler-node-selectors)
*   [Pod placement of Operator workloads](/operators/admin/olm-adding-operators-to-cluster#olm-pod-placement_olm-adding-operators-to-a-cluster)
{%- endif %}
*   [Rate limits on eviction (Kubernetes documentation)](https://kubernetes.io/docs/concepts/architecture/nodes/#rate-limits-on-eviction)