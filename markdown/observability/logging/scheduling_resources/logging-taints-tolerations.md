{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Using taints and tolerations to control logging pod placement {id="logging-taints-tolerations"}
{%- set context = "logging-taints-tolerations" %}

Taints and tolerations allow the node to control which pods should (or should not) be scheduled on them.

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-taints-tolerations-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-loki-pod-placement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-tolerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/log-collector-resources-scheduling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-pod-location.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_cluster-logging-tolerations" ._additional-resources}
{%- if openshift_enterprise or openshift_origin %}
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{% endif %}