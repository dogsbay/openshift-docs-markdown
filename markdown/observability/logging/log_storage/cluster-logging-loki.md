{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-loki" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the LokiStack log store {id="cluster-logging-loki"}

In {{ logging }} documentation, _LokiStack_ refers to the {{ logging }} supported combination of Loki and web proxy with {{ product_title }} authentication integration. LokiStack’s proxy uses {{ product_title }} authentication to enforce multi-tenancy. _Loki_ refers to the log store as either the individual component or an external store.

{% leveloffset +1 %}{% include "./modules/logging-creating-new-group-cluster-admin-user-role.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-loki-restart-hardening.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Pod disruption budgets Kubernetes documentation](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets)

{% leveloffset +1 %}{% include "./modules/logging-loki-reliability-hardening.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [`PodAntiAffinity` v1 core Kubernetes documentation](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#podantiaffinity-v1-core)
*   [Assigning Pods to Nodes Kubernetes documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity)
*   [Placing pods relative to other pods using affinity and anti-affinity rules](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity)

{% leveloffset +1 %}{% include "./modules/logging-loki-zone-aware-rep.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/logging-loki-zone-fail-recovery.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Topology spread constraints Kubernetes documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/#spread-constraint-definition)
*   [Kubernetes storage documentation](https://kubernetes.io/docs/setup/best-practices/multiple-zones/#storage-access-for-zones).

{% if openshift_enterprise %}
*   [Controlling pod placement by using pod topology spread constraints](/nodes/scheduling/nodes-scheduler-pod-topology-spread-constraints#nodes-scheduler-pod-topology-spread-constraints-configuring)
{% endif %}

{% leveloffset +1 %}{% include "./modules/logging-loki-log-access.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if openshift_enterprise %}
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac) {._additional-resources}
{% endif %}

{% leveloffset +1 %}{% include "./modules/logging-loki-retention.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/loki-rate-limit-errors.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-loki-memberlist-ip.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_cluster-logging-loki" ._additional-resources}
*   [Loki components documentation](https://grafana.com/docs/loki/latest/get-started/components/)
*   [Loki Query Language (LogQL) documentation](https://grafana.com/docs/loki/latest/logql/)
*   [Grafana Dashboard documentation](https://loki-operator.dev/docs/howto_connect_grafana.md/)
*   [Loki Object Storage documentation](https://loki-operator.dev/docs/object_storage.md/)
*   [{{ loki_op }} `IngestionLimitSpec` documentation](https://loki-operator.dev/docs/api.md/#loki-grafana-com-v1-IngestionLimitSpec)
*   [Loki Storage Schema documentation](https://grafana.com/docs/loki/latest/operations/storage/schema/#changing-the-schema)