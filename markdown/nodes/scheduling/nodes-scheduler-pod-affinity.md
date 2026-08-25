---
title: Placing pods relative to other pods using affinity and anti-affinity rules
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-scheduler-pod-affinity" %}
{% include "./_attributes/common-attributes.md" %}
# Placing pods relative to other pods using affinity and anti-affinity rules {id="nodes-scheduler-pod-affinity"}

To control workload distribution, you can use pod affinity and anti-affinity rules to specify whether pods must be scheduled close to or separate from other pods. {._abstract}

{% include "./snippets/about-pod-affinity.md" %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-pod-affinity-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-pod-affinity-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-pod-anti-affinity-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-pod-affinity-example.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/olm-overriding-operator-pod-affinity.md" %}{% endleveloffset %}

{% endif %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Node label (Kubernetes documentation)](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#built-in-node-labels)