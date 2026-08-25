{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Using node selectors to move logging resources {id="logging-node-selectors"}
{%- set context = "logging-node-selectors" %}

{% include "./snippets/about-node-selectors.md" %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-selectors-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-loki-pod-placement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/log-collector-resources-scheduling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-collector-pod-location.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_logging-node-selection" ._additional-resources}
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)