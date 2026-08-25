---
title: Including pod priority in pod scheduling decisions
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-priority" %}
# Including pod priority in pod scheduling decisions {id="nodes-pods-priority"}
{% include "./_attributes/common-attributes.md" %}

Pod priority ranks pods by importance to influence scheduling order, sort out-of-resource evictions, and enable preemption, where higher-priority pods can evict lower-priority pods when resources are constrained.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
To use priority and preemption, you create priority classes that define the relative weight of your pods. Then, reference a priority class in the pod specification to apply that weight for scheduling.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
To use priority and preemption, reference a priority class in the pod specification to apply that weight for scheduling.
{% endif %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-priority-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-priority-preempt-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-priority-configuring.md" %}{% endleveloffset %}