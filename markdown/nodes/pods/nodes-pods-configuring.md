---
title: Configuring an OpenShift Container Platform cluster for pods
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-configuring" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an {{ product_title }} cluster for pods {id="nodes-pods-configuring"}

To maintain optimal pod performance and availability, administrators can configure pod restart behavior, lifecycle settings, resource limits, disruption budgets, and other behaviors. You can use these configurations to ensure that your cluster remains resilient while providing a stable environment for application development. {._abstract}

By keeping your cluster efficient, you can provide a better environment for your developers using
such tools as what a pod does when it exits, ensuring that the required number of pods is always running,
when to restart pods designed to run only once, limit the bandwidth available to pods, and how to keep
pods running during disruptions.

{% leveloffset +1 %}{% include "./modules/nodes-pods-configuring-restart.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-configuring-bandwidth.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-pod-disruption-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-pod-disruption-configuring.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/pod-disruption-eviction-policy.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**
{._additional-resources}

*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
*   [Unhealthy Pod Eviction Policy (Kubernetes documentation)](https://kubernetes.io/docs/tasks/run-application/configure-pdb/#unhealthy-pod-eviction-policy)

{% leveloffset +1 %}{% include "./modules/nodes-pods-configuring-pod-critical.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-configuring-reducing.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
*   [Unhealthy Pod Eviction Policy (Kubernetes documentation)](https://kubernetes.io/docs/tasks/run-application/configure-pdb/#unhealthy-pod-eviction-policy)
*   [Example States (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#example-states)
{% endif %}