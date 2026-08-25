{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring performance and scalability for user workload monitoring {id="configuring-performance-and-scalability-uwm"}
{%- set context = "configuring-performance-and-scalability-uwm" %}

You can configure the monitoring stack to optimize the performance and scale of your clusters. The following documentation provides information about how to distribute the monitoring components and control the impact of the monitoring stack on CPU and memory resources.

## Controlling the placement and distribution of monitoring components {id="controlling-placement-and-distribution-of-monitoing-components_{{ context }}"}

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

{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [Understanding how to update labels on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
{%- endif %}
*   [`nodeSelector` (Kubernetes documentation)](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector)

{% leveloffset +2 %}{% include "./modules/monitoring-assigning-tolerations-to-monitoring-components.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
{% endif %}
{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{%- endif %}
*   [Taints and tolerations (Kubernetes documentation)](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)

## Managing CPU and memory resources for monitoring components {id="managing-cpu-and-memory-resources-for-monitoring-components_{{ context }}" ._additional-resources}

You can ensure that the containers that run monitoring components have enough CPU and memory resources by specifying values for resource limits and requests for those components.

You can configure these limits and requests for monitoring components that monitor user-defined projects in the `openshift-user-workload-monitoring` namespace.

{% leveloffset +2 %}{% include "./modules/monitoring-specifying-limits-and-requests-for-monitoring-components.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About specifying limits and requests for monitoring components](/observability/monitoring/about-ocp-monitoring/key-concepts#about-specifying-limits-and-requests-for-monitoring-components_key-concepts)
*   [Requests and limits (Kubernetes documentation)](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits)

## Controlling the impact of unbound metrics attributes in user-defined projects {id="controlling-the-impact-of-unbound-attributes-in-user-defined-projects_{{ context }}" ._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
Cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
A `dedicated-admin`
{%- endif %}
can use the following measures to control the impact of unbound metrics attributes in user-defined projects:

*   Limit the number of samples that can be accepted per target scrape in user-defined projects
*   Limit the number of scraped labels, the length of label names, and the length of label values
*   Configure the intervals between consecutive scrapes and between Prometheus rule evaluations
{%- if not (openshift_dedicated or openshift_rosa) %}
*   Create alerts that fire when a scrape sample threshold is reached or when the target cannot be scraped
{% endif %}


:::note

Limiting scrape samples can help prevent the issues caused by adding many unbound attributes to labels. Developers can also prevent the underlying cause by limiting the number of unbound attributes that they define for metrics. Using attributes that are bound to a limited set of possible values reduces the number of potential key-value pair combinations.

:::


**Additional resources**
{._additional-resources}

*   [Controlling the impact of unbound metrics attributes in user-defined projects](/observability/monitoring/about-ocp-monitoring/key-concepts#controlling-the-impact-of-unbound-attributes-in-user-defined-projects_key-concepts)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
{%- endif %}
*   [Determining why Prometheus is consuming a lot of disk space](/observability/monitoring/troubleshooting-monitoring-issues#determining-why-prometheus-is-consuming-disk-space_troubleshooting-monitoring-issues)

{% leveloffset +2 %}{% include "./modules/monitoring-setting-scrape-and-evaluation-intervals-limits-for-user-defined-projects.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +2 %}{% include "./modules/monitoring-creating-scrape-sample-alerts.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-pod-topology-spread-constraints.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About pod topology spread constraints for monitoring](/observability/monitoring/about-ocp-monitoring/key-concepts#using-pod-topology-spread-constraints-for-monitoring_key-concepts)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Controlling pod placement by using pod topology spread constraints](/nodes/scheduling/nodes-scheduler-pod-topology-spread-constraints#nodes-scheduler-pod-topology-spread-constraints-about)
{%- endif %}
*   [Pod topology spread constraints (Kubernetes documentation)](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)