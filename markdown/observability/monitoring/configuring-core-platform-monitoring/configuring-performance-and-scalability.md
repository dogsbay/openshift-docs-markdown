{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring performance and scalability for core platform monitoring {id="configuring-performance-and-scalability"}
{%- set context = "configuring-performance-and-scalability" %}

You can configure the monitoring stack to optimize the performance and scale of your clusters. The following documentation provides information about how to distribute the monitoring components and control the impact of the monitoring stack on CPU and memory resources.

**Additional resources**
{._additional-resources}

*   [About performance and scalability](/observability/monitoring/about-ocp-monitoring/key-concepts#about-performance-and-scalability_key-concepts)

## Controlling the placement and distribution of monitoring components {id="controlling-placement-and-distribution-of-monitoing-components_{{ context }}" ._additional-resources}

You can move the monitoring stack components to specific nodes:

*   Use the `nodeSelector` constraint with labeled nodes to move any of the monitoring stack components to specific nodes.
*   Assign tolerations to enable moving components to tainted nodes.

By doing so, you control the placement and distribution of the monitoring components across a cluster.

By controlling placement and distribution of monitoring components, you can optimize system resource use, improve performance, and separate workloads based on specific requirements or policies.

**Additional resources**
{._additional-resources}

*   [Using node selectors to move monitoring components](/observability/monitoring/about-ocp-monitoring/key-concepts#using-node-selectors-to-move-monitoring-components_key-concepts)

{% leveloffset +2 %}{% include "./modules/monitoring-moving-monitoring-components-to-different-nodes.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to configure core platform monitoring stack](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#preparing-to-configure-the-monitoring-stack)
*   [Understanding how to update labels on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
*   [`nodeSelector` (Kubernetes documentation)](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector)

{% leveloffset +2 %}{% include "./modules/monitoring-assigning-tolerations-to-monitoring-components.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to configure core platform monitoring stack](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#preparing-to-configure-the-monitoring-stack)
{%- if not openshift_rosa_hcp %}
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{%- endif %}
*   [Taints and tolerations (Kubernetes documentation)](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)

{% leveloffset +1 %}{% include "./modules/monitoring-setting-the-body-size-limit-for-metrics-scraping.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [`scrape_config` (Prometheus documentation)](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config)

## Managing CPU and memory resources for monitoring components {id="managing-cpu-and-memory-resources-for-monitoring-components_{{ context }}" ._additional-resources}

You can ensure that the containers that run monitoring components have enough CPU and memory resources by specifying values for resource limits and requests for those components.

You can configure these limits and requests for core platform monitoring components in the `openshift-monitoring` namespace.

{% leveloffset +2 %}{% include "./modules/monitoring-specifying-limits-and-requests-for-monitoring-components.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About specifying limits and requests](/observability/monitoring/about-ocp-monitoring/key-concepts#about-specifying-limits-and-requests-for-monitoring-components_key-concepts)
*   [Requests and limits (Kubernetes documentation)](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits)

{% leveloffset +1 %}{% include "./modules/monitoring-choosing-a-metrics-collection-profile.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About metrics collection profiles](/observability/monitoring/about-ocp-monitoring/key-concepts#configuring-metrics-collection-profiles_key-concepts)
*   [Viewing a list of available metrics](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#viewing-a-list-of-available-metrics_accessing-metrics-as-an-administrator)
{%- if not openshift_rosa_hcp %}
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling)
{%- endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-pod-topology-spread-constraints.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About pod topology spread constraints for monitoring](/observability/monitoring/about-ocp-monitoring/key-concepts#using-pod-topology-spread-constraints-for-monitoring_key-concepts)
*   [Controlling pod placement by using pod topology spread constraints](/nodes/scheduling/nodes-scheduler-pod-topology-spread-constraints#nodes-scheduler-pod-topology-spread-constraints-about)
*   [Pod topology spread constraints (Kubernetes documentation)](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)