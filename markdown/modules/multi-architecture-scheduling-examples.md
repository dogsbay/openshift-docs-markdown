{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample multi-architecture node workload deployments {id="multi-architecture-scheduling-examples_{{ context }}"}

Scheduling a workload to an appropriate node based on architecture works in the same way as scheduling based on any other node characteristic.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
Consider the following options when determining how to schedule your workloads. {._abstract}
{%- endif %}

{% leveloffset +0 %}{% include "./snippets/multi-arch-schedule-nodeaffinity.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +0 %}{% include "./snippets/multi-arch-schedule-taint.md" %}{% endleveloffset %}

{% leveloffset +0 %}{% include "./snippets/multi-arch-schedule-default-toleration-namespace.md" %}{% endleveloffset %}

{% leveloffset +0 %}{% include "./snippets/multi-arch-schedule-toleration.md" %}{% endleveloffset %}

{% leveloffset +0 %}{% include "./snippets/multi-arch-schedule-affinity-taint-toleration.md" %}{% endleveloffset %}

{% endif %}